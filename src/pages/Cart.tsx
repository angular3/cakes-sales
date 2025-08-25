import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Cake, Minus, Plus, Trash2, ShoppingCart, ArrowLeft, Gift } from 'lucide-react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Красный бархат',
      price: 2800,
      quantity: 1,
      size: 'Средний (10-12 порций)',
      image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=200',
      category: 'Классические торты'
    },
    {
      id: 2,
      name: 'Единорог',
      price: 3500,
      quantity: 2,
      size: 'Большой (15-20 порций)',
      image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=200',
      category: 'Детские торты'
    }
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyPromoCode = () => {
    // Простая логика промокодов
    const promoCodes = {
      'FIRST10': { discount: 10, type: 'percent', description: 'Скидка 10% на первый заказ' },
      'BIRTHDAY': { discount: 15, type: 'percent', description: 'Скидка 15% на день рождения' },
      'SAVE500': { discount: 500, type: 'fixed', description: 'Скидка 500₽' }
    };

    if (promoCodes[promoCode]) {
      setAppliedPromo(promoCodes[promoCode]);
    } else {
      alert('Промокод не найден');
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = subtotal >= 3000 ? 0 : 500;
  
  let discount = 0;
  if (appliedPromo) {
    discount = appliedPromo.type === 'percent' 
      ? Math.round(subtotal * appliedPromo.discount / 100)
      : appliedPromo.discount;
  }
  
  const total = subtotal + deliveryFee - discount;

  const recommendedCakes = [
    {
      id: 3,
      name: 'Наполеон',
      price: 2200,
      image: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      id: 4,
      name: 'Тирамису',
      price: 3200,
      image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=200'
    }
  ];

  if (cartItems.length === 0) {
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
                <Link to="/cart" className="text-pink-600 font-semibold">Корзина</Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Пустая корзина */}
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-md mx-auto">
            <ShoppingCart className="h-24 w-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Корзина пуста</h2>
            <p className="text-gray-600 mb-8">
              Добавьте торты в корзину, чтобы оформить заказ
            </p>
            <Link to="/catalog">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                Перейти к каталогу
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

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
              <Link to="/cart" className="text-pink-600 font-semibold">Корзина</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Link to="/catalog">
            <Button variant="ghost" size="sm" className="mr-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Продолжить покупки
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Корзина</h1>
          <Badge variant="secondary" className="ml-3">
            {cartItems.reduce((sum, item) => sum + item.quantity, 0)} товаров
          </Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Товары в корзине */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map(item => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p className="text-gray-600 text-sm">{item.category}</p>
                      <p className="text-gray-600 text-sm">{item.size}</p>
                      <p className="text-pink-600 font-semibold">{item.price}₽</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-lg">{item.price * item.quantity}₽</p>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Промокод */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Промокод</h3>
                <div className="flex space-x-2">
                  <Input 
                    placeholder="Введите промокод"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                  />
                  <Button onClick={applyPromoCode} variant="outline">
                    Применить
                  </Button>
                </div>
                {appliedPromo && (
                  <div className="mt-3 p-3 bg-green-50 rounded-lg">
                    <p className="text-green-800 text-sm">
                      <Gift className="h-4 w-4 inline mr-1" />
                      {appliedPromo.description}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Сводка заказа */}
          <div>
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Итого</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Товары ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} шт.)</span>
                  <span>{subtotal}₽</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Доставка</span>
                  <span>{deliveryFee === 0 ? 'Бесплатно' : `${deliveryFee}₽`}</span>
                </div>

                {appliedPromo && (
                  <div className="flex justify-between text-green-600">
                    <span>Скидка ({promoCode})</span>
                    <span>-{discount}₽</span>
                  </div>
                )}

                <hr />
                
                <div className="flex justify-between font-semibold text-lg">
                  <span>К оплате:</span>
                  <span>{total}₽</span>
                </div>

                <Link to="/order">
                  <Button className="w-full bg-pink-600 hover:bg-pink-700" size="lg">
                    Оформить заказ
                  </Button>
                </Link>

                <div className="text-xs text-gray-500 space-y-1">
                  <p>• Бесплатная доставка от 3000₽</p>
                  <p>• Минимальное время изготовления: 24 часа</p>
                  <p>• Возможна оплата при получении</p>
                </div>
              </CardContent>
            </Card>

            {/* Рекомендации */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Рекомендуем также</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recommendedCakes.map(cake => (
                  <div key={cake.id} className="flex items-center space-x-3">
                    <img 
                      src={cake.image} 
                      alt={cake.name}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{cake.name}</h4>
                      <p className="text-pink-600 text-sm">{cake.price}₽</p>
                    </div>
                    <Button size="sm" variant="outline">
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;