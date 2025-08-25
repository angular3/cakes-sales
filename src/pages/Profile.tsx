import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Cake, User, ShoppingBag, Heart, Settings, MapPin, Phone, Mail, Calendar, Star, Package } from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('orders');

  // Данные пользователя
  const user = {
    name: 'Анна Иванова',
    email: 'anna.ivanova@example.com',
    phone: '+7 (926) 123-45-67',
    avatar: '',
    registrationDate: '2023-05-15',
    totalOrders: 12,
    totalSpent: 34500,
    loyaltyPoints: 345,
    addresses: [
      {
        id: 1,
        title: 'Дом',
        address: 'г. Москва, ул. Тверская, д. 15, кв. 42',
        isDefault: true
      },
      {
        id: 2,
        title: 'Работа',
        address: 'г. Москва, ул. Арбат, д. 25, офис 301',
        isDefault: false
      }
    ]
  };

  const orders = [
    {
      id: 'ORD-2024-001',
      date: '2024-01-20',
      status: 'delivered',
      total: 3500,
      items: [
        { name: 'Красный бархат', quantity: 1, price: 2800 },
        { name: 'Доставка', quantity: 1, price: 500 },
        { name: 'Свечи', quantity: 1, price: 200 }
      ]
    },
    {
      id: 'ORD-2024-002',
      date: '2024-01-15',
      status: 'in_progress',
      total: 4200,
      items: [
        { name: 'Торт Единорог', quantity: 1, price: 3500 },
        { name: 'Доставка', quantity: 1, price: 500 },
        { name: 'Установка', quantity: 1, price: 200 }
      ]
    },
    {
      id: 'ORD-2024-003',
      date: '2024-01-10',
      status: 'cancelled',
      total: 2200,
      items: [
        { name: 'Наполеон', quantity: 1, price: 2200 }
      ]
    }
  ];

  const wishlist = [
    {
      id: 1,
      name: 'Тирамису',
      price: 3200,
      image: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=200',
      inStock: true
    },
    {
      id: 2,
      name: 'Чизкейк Нью-Йорк',
      price: 2900,
      image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=200',
      inStock: true
    },
    {
      id: 3,
      name: 'Свадебный торт',
      price: 8500,
      image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=200',
      inStock: false
    }
  ];

  const getStatusBadge = (status) => {
    const statusConfig = {
      delivered: { label: 'Доставлен', variant: 'default', color: 'bg-green-600' },
      in_progress: { label: 'В работе', variant: 'secondary', color: 'bg-blue-600' },
      cancelled: { label: 'Отменен', variant: 'destructive', color: 'bg-red-600' }
    };
    
    const config = statusConfig[status] || statusConfig.delivered;
    return <Badge className={config.color}>{config.label}</Badge>;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Cake className="h-8 w-8 text-pink-600" />
              <h1 className="text-2xl font-bold text-gray-800">СладкиеМечты</h1>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-600 hover:text-pink-600 transition-colors">Главная</Link>
              <Link to="/catalog" className="text-gray-600 hover:text-pink-600 transition-colors">Каталог</Link>
              <Link to="/profile" className="text-pink-600 font-semibold">Профиль</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Боковая панель профиля */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback className="text-xl">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-semibold">{user.name}</h2>
                  <p className="text-gray-600">{user.email}</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Заказов:</span>
                    <span className="font-semibold">{user.totalOrders}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Потрачено:</span>
                    <span className="font-semibold">{user.totalSpent.toLocaleString()}₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Бонусы:</span>
                    <span className="font-semibold text-pink-600">{user.loyaltyPoints}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button 
                    variant={activeTab === 'orders' ? 'default' : 'ghost'} 
                    className="w-full justify-start"
                    onClick={() => setActiveTab('orders')}
                  >
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Мои заказы
                  </Button>
                  <Button 
                    variant={activeTab === 'wishlist' ? 'default' : 'ghost'} 
                    className="w-full justify-start"
                    onClick={() => setActiveTab('wishlist')}
                  >
                    <Heart className="h-4 w-4 mr-2" />
                    Избранное
                  </Button>
                  <Button 
                    variant={activeTab === 'addresses' ? 'default' : 'ghost'} 
                    className="w-full justify-start"
                    onClick={() => setActiveTab('addresses')}
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    Адреса
                  </Button>
                  <Button 
                    variant={activeTab === 'settings' ? 'default' : 'ghost'} 
                    className="w-full justify-start"
                    onClick={() => setActiveTab('settings')}
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Настройки
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Основной контент */}
          <div className="lg:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              {/* Заказы */}
              <TabsContent value="orders">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Мои заказы</h2>
                    <Badge variant="secondary">{orders.length} заказов</Badge>
                  </div>

                  {orders.map(order => (
                    <Card key={order.id}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle className="text-lg">Заказ {order.id}</CardTitle>
                            <p className="text-gray-600">от {order.date}</p>
                          </div>
                          <div className="text-right">
                            {getStatusBadge(order.status)}
                            <p className="text-lg font-bold mt-1">{order.total}₽</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {order.items.map((item, index) => (
                            <div key={index} className="flex justify-between text-sm">
                              <span>{item.name} × {item.quantity}</span>
                              <span>{item.price}₽</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex space-x-2 mt-4">
                          <Button size="sm" variant="outline">
                            Подробнее
                          </Button>
                          {order.status === 'delivered' && (
                            <Button size="sm" variant="outline">
                              Повторить заказ
                            </Button>
                          )}
                          <Link to="/order-tracking">
                            <Button size="sm" variant="outline">
                              Отследить
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Избранное */}
              <TabsContent value="wishlist">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Избранное</h2>
                    <Badge variant="secondary">{wishlist.length} товаров</Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {wishlist.map(item => (
                      <Card key={item.id}>
                        <div className="aspect-square overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-semibold mb-2">{item.name}</h3>
                          <div className="flex justify-between items-center">
                            <span className="text-lg font-bold text-pink-600">{item.price}₽</span>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                <Heart className="h-4 w-4 text-red-500 fill-current" />
                              </Button>
                              <Button 
                                size="sm" 
                                className="bg-pink-600 hover:bg-pink-700"
                                disabled={!item.inStock}
                              >
                                <ShoppingBag className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          {!item.inStock && (
                            <p className="text-red-600 text-xs mt-2">Временно нет в наличии</p>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Адреса */}
              <TabsContent value="addresses">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Адреса доставки</h2>
                    <Button className="bg-pink-600 hover:bg-pink-700">
                      Добавить адрес
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {user.addresses.map(address => (
                      <Card key={address.id}>
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="font-semibold">{address.title}</h3>
                              {address.isDefault && (
                                <Badge variant="secondary" className="mt-1">По умолчанию</Badge>
                              )}
                            </div>
                            <Button variant="ghost" size="sm">
                              Изменить
                            </Button>
                          </div>
                          <p className="text-gray-600">{address.address}</p>
                          <div className="flex space-x-2 mt-4">
                            {!address.isDefault && (
                              <Button size="sm" variant="outline">
                                Сделать основным
                              </Button>
                            )}
                            <Button size="sm" variant="outline" className="text-red-600">
                              Удалить
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Настройки */}
              <TabsContent value="settings">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">Настройки профиля</h2>

                  <Card>
                    <CardHeader>
                      <CardTitle>Личная информация</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Имя</label>
                          <Input defaultValue={user.name.split(' ')[0]} />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Фамилия</label>
                          <Input defaultValue={user.name.split(' ')[1]} />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <Input type="email" defaultValue={user.email} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Телефон</label>
                        <Input defaultValue={user.phone} />
                      </div>
                      <Button className="bg-pink-600 hover:bg-pink-700">
                        Сохранить изменения
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Изменить пароль</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Текущий пароль</label>
                        <Input type="password" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Новый пароль</label>
                        <Input type="password" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Подтвердите пароль</label>
                        <Input type="password" />
                      </div>
                      <Button className="bg-pink-600 hover:bg-pink-700">
                        Изменить пароль
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Уведомления</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span>Email уведомления о заказах</span>
                        <input type="checkbox" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <span>SMS уведомления</span>
                        <input type="checkbox" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Уведомления о скидках</span>
                        <input type="checkbox" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Новости и статьи</span>
                        <input type="checkbox" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Статистика пользователя */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          <Card className="text-center p-6">
            <ShoppingBag className="h-8 w-8 text-pink-600 mx-auto mb-2" />
            <div className="text-2xl font-bold">{user.totalOrders}</div>
            <div className="text-gray-600">Заказов</div>
          </Card>
          <Card className="text-center p-6">
            <Package className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold">{user.totalSpent.toLocaleString()}₽</div>
            <div className="text-gray-600">Потрачено</div>
          </Card>
          <Card className="text-center p-6">
            <Star className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
            <div className="text-2xl font-bold">{user.loyaltyPoints}</div>
            <div className="text-gray-600">Бонусных баллов</div>
          </Card>
          <Card className="text-center p-6">
            <Calendar className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold">1.5</div>
            <div className="text-gray-600">Года с нами</div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;