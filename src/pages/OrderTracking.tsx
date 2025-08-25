import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Cake, Search, Package, Truck, CheckCircle, Clock, MapPin, Phone, Calendar } from 'lucide-react';

const OrderTracking = () => {
  const [orderNumber, setOrderNumber] = useState('ORD-2024-001');
  const [trackingData, setTrackingData] = useState(null);

  // Пример данных отслеживания
  const sampleOrder = {
    id: 'ORD-2024-001',
    status: 'in_delivery',
    progress: 75,
    customer: {
      name: 'Анна Иванова',
      phone: '+7 (926) 123-45-67',
      email: 'anna.ivanova@example.com'
    },
    items: [
      {
        name: 'Красный бархат',
        quantity: 1,
        size: 'Средний (10-12 порций)',
        price: 2800,
        image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=200'
      }
    ],
    delivery: {
      type: 'delivery',
      address: 'г. Москва, ул. Тверская, д. 15, кв. 42',
      date: '2024-01-22',
      timeSlot: '15:00 - 18:00',
      estimatedTime: '16:30',
      courier: {
        name: 'Алексей Петров',
        phone: '+7 (926) 987-65-43',
        photo: 'АП'
      }
    },
    timeline: [
      {
        status: 'confirmed',
        title: 'Заказ подтвержден',
        description: 'Ваш заказ принят в работу',
        time: '2024-01-20 14:30',
        completed: true
      },
      {
        status: 'preparation',
        title: 'Изготовление торта',
        description: 'Наши кондитеры готовят ваш торт',
        time: '2024-01-21 09:00',
        completed: true
      },
      {
        status: 'ready',
        title: 'Торт готов',
        description: 'Торт изготовлен и упакован',
        time: '2024-01-22 12:00',
        completed: true
      },
      {
        status: 'in_delivery',
        title: 'В пути',
        description: 'Курьер направляется к вам',
        time: '2024-01-22 15:15',
        completed: false,
        current: true
      },
      {
        status: 'delivered',
        title: 'Доставлен',
        description: 'Заказ успешно доставлен',
        time: '',
        completed: false
      }
    ],
    total: 3300
  };

  const handleSearch = () => {
    if (orderNumber === 'ORD-2024-001') {
      setTrackingData(sampleOrder);
    } else {
      setTrackingData(null);
      alert('Заказ не найден. Проверьте номер заказа.');
    }
  };

  const getStatusIcon = (status, completed, current) => {
    if (completed) {
      return <CheckCircle className="h-6 w-6 text-green-600" />;
    } else if (current) {
      return <Clock className="h-6 w-6 text-blue-600 animate-pulse" />;
    } else {
      return <div className="w-6 h-6 rounded-full border-2 border-gray-300" />;
    }
  };

  const getStatusColor = (status) => {
    const colors = {
      confirmed: 'bg-blue-600',
      preparation: 'bg-yellow-600',
      ready: 'bg-purple-600',
      in_delivery: 'bg-orange-600',
      delivered: 'bg-green-600'
    };
    return colors[status] || 'bg-gray-600';
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
              <Link to="/order-tracking" className="text-pink-600 font-semibold">Отслеживание</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Package className="h-16 w-16 text-blue-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Отслеживание заказа</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Следите за статусом вашего заказа в режиме реального времени. 
            Введите номер заказа для получения актуальной информации.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Поиск заказа */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Найти заказ</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4">
              <div className="flex-1">
                <Input 
                  placeholder="Введите номер заказа (например: ORD-2024-001)"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                />
              </div>
              <Button onClick={handleSearch} className="bg-blue-600 hover:bg-blue-700">
                <Search className="h-4 w-4 mr-2" />
                Найти
              </Button>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Номер заказа указан в SMS и email подтверждении
            </p>
          </CardContent>
        </Card>

        {trackingData ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Основная информация */}
            <div className="lg:col-span-2 space-y-6">
              {/* Статус заказа */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Заказ {trackingData.id}</CardTitle>
                    <Badge className={getStatusColor(trackingData.status)}>
                      {trackingData.status === 'in_delivery' ? 'В пути' : 'В работе'}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Прогресс выполнения</span>
                      <span className="text-sm font-medium">{trackingData.progress}%</span>
                    </div>
                    <Progress value={trackingData.progress} className="h-2" />
                  </div>
                  
                  {trackingData.status === 'in_delivery' && (
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Truck className="h-5 w-5 text-blue-600" />
                        <span className="font-semibold">Ваш заказ в пути!</span>
                      </div>
                      <p className="text-sm text-gray-700">
                        Ожидаемое время доставки: <strong>{trackingData.delivery.estimatedTime}</strong>
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Временная шкала */}
              <Card>
                <CardHeader>
                  <CardTitle>История заказа</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {trackingData.timeline.map((event, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          {getStatusIcon(event.status, event.completed, event.current)}
                        </div>
                        <div className="flex-1">
                          <h4 className={`font-semibold ${event.current ? 'text-blue-600' : event.completed ? 'text-green-600' : 'text-gray-600'}`}>
                            {event.title}
                          </h4>
                          <p className="text-gray-600 text-sm">{event.description}</p>
                          {event.time && (
                            <p className="text-xs text-gray-500 mt-1">{event.time}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Информация о курьере */}
              {trackingData.status === 'in_delivery' && (
                <Card>
                  <CardHeader>
                    <CardTitle>Информация о курьере</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                        {trackingData.delivery.courier.photo}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{trackingData.delivery.courier.name}</h4>
                        <p className="text-gray-600 text-sm">Курьер службы доставки</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Phone className="h-4 w-4 mr-2" />
                        Позвонить
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Детали заказа */}
            <div className="space-y-6">
              {/* Товары */}
              <Card>
                <CardHeader>
                  <CardTitle>Состав заказа</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {trackingData.items.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold">{item.name}</h4>
                        <p className="text-gray-600 text-sm">{item.size}</p>
                        <p className="text-pink-600 font-medium">{item.price}₽</p>
                      </div>
                      <span className="text-gray-600">×{item.quantity}</span>
                    </div>
                  ))}
                  <hr />
                  <div className="flex justify-between font-semibold">
                    <span>Итого:</span>
                    <span>{trackingData.total}₽</span>
                  </div>
                </CardContent>
              </Card>

              {/* Доставка */}
              <Card>
                <CardHeader>
                  <CardTitle>Доставка</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium">Адрес доставки</p>
                      <p className="text-gray-600 text-sm">{trackingData.delivery.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Calendar className="h-4 w-4 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium">Дата и время</p>
                      <p className="text-gray-600 text-sm">
                        {trackingData.delivery.date}, {trackingData.delivery.timeSlot}
                      </p>
                    </div>
                  </div>
                  {trackingData.status === 'in_delivery' && (
                    <div className="flex items-start space-x-2">
                      <Clock className="h-4 w-4 text-orange-600 mt-1" />
                      <div>
                        <p className="font-medium">Ожидаемое время</p>
                        <p className="text-orange-600 text-sm font-medium">
                          {trackingData.delivery.estimatedTime}
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Контакты */}
              <Card>
                <CardHeader>
                  <CardTitle>Контакты</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-blue-600" />
                    <div>
                      <p className="font-medium">Служба поддержки</p>
                      <p className="text-gray-600 text-sm">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  {trackingData.status === 'in_delivery' && (
                    <div className="flex items-center space-x-2">
                      <Truck className="h-4 w-4 text-orange-600" />
                      <div>
                        <p className="font-medium">Курьер</p>
                        <p className="text-gray-600 text-sm">{trackingData.delivery.courier.phone}</p>
                      </div>
                    </div>
                  )}
                  <Button variant="outline" size="sm" className="w-full">
                    Связаться с поддержкой
                  </Button>
                </CardContent>
              </Card>

              {/* Полезная информация */}
              <Card>
                <CardHeader>
                  <CardTitle>Полезная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-gray-600">
                  <p>• Торт доставляется в специальном термоконтейнере</p>
                  <p>• Курьер ожидает не более 15 минут</p>
                  <p>• При отсутствии возможна доставка соседям</p>
                  <p>• Оплата возможна картой или наличными</p>
                </CardContent>
              </Card>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <Package className="h-24 w-24 text-gray-300 mx-auto mb-6" />
            <h3 className="text-xl font-semibold text-gray-600 mb-4">
              Введите номер заказа для отслеживания
            </h3>
            <p className="text-gray-500">
              Номер заказа можно найти в SMS или email подтверждении
            </p>
          </div>
        )}

        {/* Часто задаваемые вопросы */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Часто задаваемые вопросы</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Как долго изготавливается торт?</h4>
                <p className="text-gray-600 text-sm">
                  Стандартные торты изготавливаются за 24 часа, сложные дизайны - 48-72 часа.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Можно ли изменить время доставки?</h4>
                <p className="text-gray-600 text-sm">
                  Да, свяжитесь с нами не позднее чем за 4 часа до запланированной доставки.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Что делать, если меня не будет дома?</h4>
                <p className="text-gray-600 text-sm">
                  Курьер может передать заказ соседям или вернуться в удобное время.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Как связаться с курьером?</h4>
                <p className="text-gray-600 text-sm">
                  Номер телефона курьера появится в трекинге, когда заказ будет в пути.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Призыв к действию */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Нужна помощь с заказом?</h3>
          <p className="mb-6 opacity-90">
            Наша служба поддержки работает ежедневно с 9:00 до 21:00
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Phone className="h-4 w-4 mr-2" />
              Позвонить в поддержку
            </Button>
            <Link to="/contacts">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                Написать нам
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;