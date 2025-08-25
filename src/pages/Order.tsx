import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Cake, CreditCard, Truck, MapPin, Calendar, Clock, User, Phone, Mail } from 'lucide-react';

const Order = () => {
  const [step, setStep] = useState(1);
  const [orderData, setOrderData] = useState({
    // Данные о торте
    cakeId: '',
    cakeName: 'Красный бархат',
    cakePrice: 2800,
    quantity: 1,
    size: 'medium',
    message: '',
    
    // Данные о доставке
    deliveryType: 'delivery',
    deliveryDate: '',
    deliveryTime: '',
    address: '',
    floor: '',
    apartment: '',
    entrance: '',
    comment: '',
    
    // Контактные данные
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    
    // Оплата
    paymentMethod: 'card',
    promoCode: '',
    
    // Дополнительные услуги
    additionalServices: []
  });

  const deliveryTimes = [
    '09:00 - 12:00',
    '12:00 - 15:00',
    '15:00 - 18:00',
    '18:00 - 21:00'
  ];

  const additionalServices = [
    { id: 'candles', name: 'Свечи и декор', price: 200 },
    { id: 'setup', name: 'Установка торта', price: 300 },
    { id: 'photo', name: 'Фотосъемка', price: 1000 },
    { id: 'utensils', name: 'Одноразовая посуда', price: 150 }
  ];

  const calculateTotal = () => {
    let total = orderData.cakePrice * orderData.quantity;
    
    // Добавляем стоимость дополнительных услуг
    orderData.additionalServices.forEach(serviceId => {
      const service = additionalServices.find(s => s.id === serviceId);
      if (service) total += service.price;
    });
    
    // Добавляем стоимость доставки
    if (orderData.deliveryType === 'delivery') {
      total += 500; // Стоимость доставки
    }
    
    return total;
  };

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleServiceChange = (serviceId, checked) => {
    setOrderData(prev => ({
      ...prev,
      additionalServices: checked 
        ? [...prev.additionalServices, serviceId]
        : prev.additionalServices.filter(id => id !== serviceId)
    }));
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
              <Link to="/order" className="text-pink-600 font-semibold">Оформление заказа</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Прогресс заказа */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            {[
              { number: 1, title: 'Торт' },
              { number: 2, title: 'Доставка' },
              { number: 3, title: 'Контакты' },
              { number: 4, title: 'Оплата' }
            ].map((stepItem) => (
              <div key={stepItem.number} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= stepItem.number ? 'bg-pink-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {stepItem.number}
                </div>
                <span className={`ml-2 text-sm ${step >= stepItem.number ? 'text-pink-600' : 'text-gray-600'}`}>
                  {stepItem.title}
                </span>
                {stepItem.number < 4 && (
                  <div className={`w-16 h-1 mx-4 ${step > stepItem.number ? 'bg-pink-600' : 'bg-gray-200'}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Основная форма */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>
                  {step === 1 && 'Детали торта'}
                  {step === 2 && 'Доставка'}
                  {step === 3 && 'Контактная информация'}
                  {step === 4 && 'Способ оплаты'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Шаг 1: Детали торта */}
                {step === 1 && (
                  <>
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <img 
                        src="https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=100" 
                        alt={orderData.cakeName}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold">{orderData.cakeName}</h3>
                        <p className="text-gray-600">{orderData.cakePrice}₽</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>Размер торта</Label>
                        <Select value={orderData.size} onValueChange={(value) => setOrderData({...orderData, size: value})}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="small">Маленький (6-8 порций)</SelectItem>
                            <SelectItem value="medium">Средний (10-12 порций)</SelectItem>
                            <SelectItem value="large">Большой (15-20 порций)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Количество</Label>
                        <Input 
                          type="number" 
                          min="1" 
                          value={orderData.quantity}
                          onChange={(e) => setOrderData({...orderData, quantity: parseInt(e.target.value)})}
                        />
                      </div>
                    </div>

                    <div>
                      <Label>Надпись на торте (необязательно)</Label>
                      <Input 
                        placeholder="С днем рождения, Анна!"
                        value={orderData.message}
                        onChange={(e) => setOrderData({...orderData, message: e.target.value})}
                      />
                    </div>

                    <div>
                      <Label className="text-base font-semibold mb-4 block">Дополнительные услуги</Label>
                      <div className="space-y-3">
                        {additionalServices.map(service => (
                          <div key={service.id} className="flex items-center space-x-3">
                            <Checkbox 
                              id={service.id}
                              checked={orderData.additionalServices.includes(service.id)}
                              onCheckedChange={(checked) => handleServiceChange(service.id, checked)}
                            />
                            <Label htmlFor={service.id} className="flex-1">
                              {service.name} <span className="text-gray-500">+{service.price}₽</span>
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* Шаг 2: Доставка */}
                {step === 2 && (
                  <>
                    <RadioGroup 
                      value={orderData.deliveryType} 
                      onValueChange={(value) => setOrderData({...orderData, deliveryType: value})}
                    >
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="delivery" id="delivery" />
                        <Label htmlFor="delivery" className="flex-1">
                          <div className="flex items-center space-x-2">
                            <Truck className="h-5 w-5" />
                            <div>
                              <div className="font-medium">Доставка</div>
                              <div className="text-sm text-gray-600">+500₽</div>
                            </div>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="pickup" id="pickup" />
                        <Label htmlFor="pickup" className="flex-1">
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-5 w-5" />
                            <div>
                              <div className="font-medium">Самовывоз</div>
                              <div className="text-sm text-gray-600">Бесплатно</div>
                            </div>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>Дата получения *</Label>
                        <Input 
                          type="date" 
                          value={orderData.deliveryDate}
                          onChange={(e) => setOrderData({...orderData, deliveryDate: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label>Время получения *</Label>
                        <Select value={orderData.deliveryTime} onValueChange={(value) => setOrderData({...orderData, deliveryTime: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите время" />
                          </SelectTrigger>
                          <SelectContent>
                            {deliveryTimes.map(time => (
                              <SelectItem key={time} value={time}>{time}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {orderData.deliveryType === 'delivery' && (
                      <>
                        <div>
                          <Label>Адрес доставки *</Label>
                          <Input 
                            placeholder="Улица, дом"
                            value={orderData.address}
                            onChange={(e) => setOrderData({...orderData, address: e.target.value})}
                          />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          <div>
                            <Label>Подъезд</Label>
                            <Input 
                              placeholder="1"
                              value={orderData.entrance}
                              onChange={(e) => setOrderData({...orderData, entrance: e.target.value})}
                            />
                          </div>
                          <div>
                            <Label>Этаж</Label>
                            <Input 
                              placeholder="5"
                              value={orderData.floor}
                              onChange={(e) => setOrderData({...orderData, floor: e.target.value})}
                            />
                          </div>
                          <div>
                            <Label>Квартира</Label>
                            <Input 
                              placeholder="25"
                              value={orderData.apartment}
                              onChange={(e) => setOrderData({...orderData, apartment: e.target.value})}
                            />
                          </div>
                        </div>
                        <div>
                          <Label>Комментарий для курьера</Label>
                          <Textarea 
                            placeholder="Домофон не работает, звонить по телефону..."
                            value={orderData.comment}
                            onChange={(e) => setOrderData({...orderData, comment: e.target.value})}
                          />
                        </div>
                      </>
                    )}

                    {orderData.deliveryType === 'pickup' && (
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold mb-2">Адрес кондитерской:</h4>
                        <p className="text-gray-700">г. Москва, ул. Кондитерская, 15</p>
                        <p className="text-gray-700">Режим работы: Пн-Вс 9:00-21:00</p>
                        <p className="text-sm text-gray-600 mt-2">
                          При самовывозе действует скидка 5%
                        </p>
                      </div>
                    )}
                  </>
                )}

                {/* Шаг 3: Контакты */}
                {step === 3 && (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>Имя *</Label>
                        <Input 
                          placeholder="Анна"
                          value={orderData.firstName}
                          onChange={(e) => setOrderData({...orderData, firstName: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label>Фамилия *</Label>
                        <Input 
                          placeholder="Иванова"
                          value={orderData.lastName}
                          onChange={(e) => setOrderData({...orderData, lastName: e.target.value})}
                        />
                      </div>
                    </div>

                    <div>
                      <Label>Телефон *</Label>
                      <Input 
                        placeholder="+7 (___) ___-__-__"
                        value={orderData.phone}
                        onChange={(e) => setOrderData({...orderData, phone: e.target.value})}
                      />
                    </div>

                    <div>
                      <Label>Email</Label>
                      <Input 
                        type="email"
                        placeholder="anna@example.com"
                        value={orderData.email}
                        onChange={(e) => setOrderData({...orderData, email: e.target.value})}
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        На email будет отправлено подтверждение заказа
                      </p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="agreement" />
                      <Label htmlFor="agreement" className="text-sm">
                        Я согласен с <Link to="/privacy" className="text-pink-600 underline">политикой конфиденциальности</Link> 
                        и <Link to="/terms" className="text-pink-600 underline">условиями обслуживания</Link>
                      </Label>
                    </div>
                  </>
                )}

                {/* Шаг 4: Оплата */}
                {step === 4 && (
                  <>
                    <RadioGroup 
                      value={orderData.paymentMethod} 
                      onValueChange={(value) => setOrderData({...orderData, paymentMethod: value})}
                    >
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="flex-1">
                          <div className="flex items-center space-x-2">
                            <CreditCard className="h-5 w-5" />
                            <div>
                              <div className="font-medium">Банковской картой</div>
                              <div className="text-sm text-gray-600">Visa, MasterCard, МИР</div>
                            </div>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="cash" id="cash" />
                        <Label htmlFor="cash" className="flex-1">
                          <div className="flex items-center space-x-2">
                            <div className="w-5 h-5 bg-green-500 rounded flex items-center justify-center text-white text-xs">₽</div>
                            <div>
                              <div className="font-medium">Наличными при получении</div>
                              <div className="text-sm text-gray-600">Только для доставки</div>
                            </div>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>

                    <div>
                      <Label>Промокод</Label>
                      <div className="flex space-x-2">
                        <Input 
                          placeholder="Введите промокод"
                          value={orderData.promoCode}
                          onChange={(e) => setOrderData({...orderData, promoCode: e.target.value})}
                        />
                        <Button variant="outline">Применить</Button>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-3">Подтверждение заказа</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Торт:</span>
                          <span>{orderData.cakeName}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Количество:</span>
                          <span>{orderData.quantity} шт.</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Дата получения:</span>
                          <span>{orderData.deliveryDate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Способ получения:</span>
                          <span>{orderData.deliveryType === 'delivery' ? 'Доставка' : 'Самовывоз'}</span>
                        </div>
                        {orderData.deliveryType === 'delivery' && (
                          <div className="flex justify-between">
                            <span>Адрес:</span>
                            <span>{orderData.address}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}

                {/* Кнопки навигации */}
                <div className="flex justify-between pt-6">
                  <Button 
                    variant="outline" 
                    onClick={prevStep}
                    disabled={step === 1}
                  >
                    Назад
                  </Button>
                  {step < 4 ? (
                    <Button onClick={nextStep} className="bg-pink-600 hover:bg-pink-700">
                      Далее
                    </Button>
                  ) : (
                    <Button className="bg-pink-600 hover:bg-pink-700">
                      Оформить заказ
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Сводка заказа */}
          <div>
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Ваш заказ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>{orderData.cakeName} × {orderData.quantity}</span>
                  <span>{orderData.cakePrice * orderData.quantity}₽</span>
                </div>

                {orderData.additionalServices.map(serviceId => {
                  const service = additionalServices.find(s => s.id === serviceId);
                  return service ? (
                    <div key={serviceId} className="flex justify-between text-sm">
                      <span>{service.name}</span>
                      <span>+{service.price}₽</span>
                    </div>
                  ) : null;
                })}

                {orderData.deliveryType === 'delivery' && (
                  <div className="flex justify-between text-sm">
                    <span>Доставка</span>
                    <span>+500₽</span>
                  </div>
                )}

                {orderData.deliveryType === 'pickup' && (
                  <div className="flex justify-between text-sm text-green-600">
                    <span>Скидка за самовывоз (5%)</span>
                    <span>-{Math.round(orderData.cakePrice * orderData.quantity * 0.05)}₽</span>
                  </div>
                )}

                <hr />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Итого:</span>
                  <span>{calculateTotal()}₽</span>
                </div>

                <div className="text-xs text-gray-500 space-y-1">
                  <p>• Минимальное время изготовления: 24 часа</p>
                  <p>• Возможна оплата картой или наличными</p>
                  <p>• Бесплатная доставка от 3000₽</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;