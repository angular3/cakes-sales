import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Cake, Building, Users, Award, ShoppingCart, Star, CheckCircle } from 'lucide-react';

const CorporateCakes = () => {
  const [orderType, setOrderType] = useState('single');

  const corporateCakes = [
    {
      id: 1,
      name: 'Корпоративный с логотипом',
      price: 4500,
      image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Торт с логотипом вашей компании',
      serves: '20-25 человек',
      rating: 4.9,
      reviews: 45,
      features: ['Съедобная печать логотипа', 'Корпоративные цвета', 'Индивидуальный дизайн']
    },
    {
      id: 2,
      name: 'Юбилейный корпоративный',
      price: 6200,
      image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Торт для юбилея компании',
      serves: '30-40 человек',
      rating: 4.8,
      reviews: 32,
      features: ['Многоярусный дизайн', 'Золотые элементы', 'Памятная надпись']
    },
    {
      id: 3,
      name: 'Презентационный торт',
      price: 5800,
      image: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Элегантный торт для презентаций',
      serves: '25-30 человек',
      rating: 4.7,
      reviews: 28,
      features: ['Минималистичный дизайн', 'Премиум ингредиенты', 'Быстрая доставка']
    }
  ];

  const services = [
    {
      icon: <Building className="h-8 w-8" />,
      title: 'Корпоративные мероприятия',
      description: 'Торты для конференций, презентаций, корпоративов'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Командные праздники',
      description: 'Торты для дней рождения сотрудников, достижений команды'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Награждения',
      description: 'Торты для церемоний награждения и признания заслуг'
    }
  ];

  const benefits = [
    'Скидки от 15% при заказе от 10 тортов',
    'Бесплатная доставка по Москве',
    'Индивидуальный менеджер',
    'Гибкая система оплаты',
    'Договор с юридическими лицами',
    'Отчетные документы'
  ];

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
              <Link to="/corporate-cakes" className="text-pink-600 font-semibold">Корпоративные торты</Link>
              <Link to="/contacts" className="text-gray-600 hover:text-pink-600 transition-colors">Контакты</Link>
            </nav>
            <Link to="/cart">
              <Button variant="outline" size="sm">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Корзина
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Building className="h-16 w-16 text-blue-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Корпоративные торты</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Профессиональные торты для бизнеса. Подчеркните статус вашей компании 
            с нашими корпоративными тортами с логотипом и индивидуальным дизайном.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Услуги */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Наши услуги</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {service.icon}
                </div>
                <h4 className="font-semibold mb-3">{service.title}</h4>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Каталог корпоративных тортов */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Популярные корпоративные торты</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corporateCakes.map(cake => (
              <Card key={cake.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={cake.image} 
                    alt={cake.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-2">{cake.name}</h4>
                  <p className="text-gray-600 text-sm mb-3">{cake.description}</p>
                  
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium ml-1">{cake.rating}</span>
                    </div>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-600">{cake.reviews} отзывов</span>
                  </div>

                  <p className="text-xs text-gray-500 mb-4">{cake.serves}</p>

                  <div className="space-y-2 mb-4">
                    {cake.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-blue-600">{cake.price}₽</span>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Преимущества для бизнеса */}
        <section className="mb-16 bg-white rounded-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Преимущества для бизнеса</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Форма заказа */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Оформить корпоративный заказ</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Название компании *</label>
                    <Input placeholder="ООО 'Ваша компания'" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Контактное лицо *</label>
                    <Input placeholder="Иван Иванов" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон *</label>
                    <Input placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input type="email" placeholder="company@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Тип заказа</label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="orderType" 
                        value="single" 
                        checked={orderType === 'single'}
                        onChange={(e) => setOrderType(e.target.value)}
                        className="mr-2"
                      />
                      Разовый заказ
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="orderType" 
                        value="regular" 
                        checked={orderType === 'regular'}
                        onChange={(e) => setOrderType(e.target.value)}
                        className="mr-2"
                      />
                      Регулярные поставки
                    </label>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Количество тортов</label>
                    <Input type="number" placeholder="1" min="1" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Дата мероприятия</label>
                    <Input type="date" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Особые пожелания</label>
                  <Textarea 
                    placeholder="Опишите ваши требования к дизайну, размеру, вкусу..."
                    className="min-h-[100px]"
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                  Отправить заявку
                </Button>
              </form>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Почему выбирают нас</h3>
              <div className="space-y-6">
                <Card className="p-6">
                  <h4 className="font-semibold mb-2">Опыт работы с крупными компаниями</h4>
                  <p className="text-gray-600 text-sm">
                    Более 500 успешных корпоративных заказов для компаний различных сфер деятельности.
                  </p>
                </Card>
                <Card className="p-6">
                  <h4 className="font-semibold mb-2">Индивидуальный подход</h4>
                  <p className="text-gray-600 text-sm">
                    Персональный менеджер, учет всех пожеланий и корпоративного стиля.
                  </p>
                </Card>
                <Card className="p-6">
                  <h4 className="font-semibold mb-2">Гарантия качества</h4>
                  <p className="text-gray-600 text-sm">
                    Все торты изготавливаются из премиальных ингредиентов с соблюдением стандартов качества.
                  </p>
                </Card>
                <Card className="p-6">
                  <h4 className="font-semibold mb-2">Удобная логистика</h4>
                  <p className="text-gray-600 text-sm">
                    Доставка точно в срок, установка на месте, полное сопровождение мероприятия.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Призыв к действию */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Готовы обсудить ваш корпоративный заказ?</h3>
          <p className="mb-6 opacity-90">
            Свяжитесь с нашим менеджером для получения персонального предложения
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Позвонить менеджеру
            </Button>
            <Link to="/contacts">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                Написать в WhatsApp
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateCakes;