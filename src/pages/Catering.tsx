import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Cake, Users, Calendar, MapPin, Utensils, Star, CheckCircle, Clock } from 'lucide-react';

const Catering = () => {
  const [eventType, setEventType] = useState('');
  const [guestCount, setGuestCount] = useState('');

  const cateringServices = [
    {
      id: 1,
      title: 'Корпоративные мероприятия',
      description: 'Полное кондитерское обслуживание корпоративных событий',
      image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Торты и пирожные', 'Кофе-брейк', 'Фуршетные десерты', 'Брендинг'],
      minGuests: 20,
      priceFrom: 800,
      popular: true
    },
    {
      id: 2,
      title: 'Свадебные торжества',
      description: 'Создание сладкого стола для самого важного дня',
      image: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Свадебный торт', 'Candy bar', 'Пирожные', 'Декор стола'],
      minGuests: 30,
      priceFrom: 1200,
      popular: true
    },
    {
      id: 3,
      title: 'Детские праздники',
      description: 'Яркие и вкусные десерты для детских мероприятий',
      image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Тематические торты', 'Капкейки', 'Леденцы', 'Анимация'],
      minGuests: 10,
      priceFrom: 600,
      popular: false
    },
    {
      id: 4,
      title: 'Частные мероприятия',
      description: 'Кейтеринг для домашних праздников и семейных торжеств',
      image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Домашние торты', 'Семейные рецепты', 'Индивидуальный подход'],
      minGuests: 5,
      priceFrom: 400,
      popular: false
    }
  ];

  const packages = [
    {
      name: 'Базовый',
      price: 800,
      guests: '20-30 человек',
      includes: [
        'Основной торт',
        '2 вида пирожных',
        'Сервировка стола',
        'Доставка и установка'
      ]
    },
    {
      name: 'Стандартный',
      price: 1500,
      guests: '30-50 человек',
      includes: [
        'Основной торт',
        '4 вида пирожных',
        'Candy bar',
        'Декор стола',
        'Доставка и установка',
        'Обслуживание 2 часа'
      ],
      popular: true
    },
    {
      name: 'Премиум',
      price: 2500,
      guests: '50-100 человек',
      includes: [
        'Многоярусный торт',
        '6 видов пирожных',
        'Полный candy bar',
        'Премиум декор',
        'Доставка и установка',
        'Обслуживание 4 часа',
        'Персональный кондитер'
      ]
    }
  ];

  const portfolio = [
    {
      event: 'Корпоратив IT-компании',
      guests: 80,
      image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Современный candy bar с брендингом компании'
    },
    {
      event: 'Свадьба в стиле прованс',
      guests: 120,
      image: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Нежный сладкий стол с живыми цветами'
    },
    {
      event: 'День рождения ребенка',
      guests: 25,
      image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Яркий праздничный стол с любимыми персонажами'
    }
  ];

  const advantages = [
    {
      icon: <Utensils className="h-8 w-8" />,
      title: 'Полный сервис',
      description: 'От планирования до уборки - мы берем все на себя'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Опытная команда',
      description: 'Профессиональные кондитеры и официанты'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Точность во времени',
      description: 'Всегда приезжаем вовремя и готовы к началу'
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: 'Гарантия качества',
      description: 'Только свежие продукты и проверенные рецепты'
    }
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
              <Link to="/catering" className="text-pink-600 font-semibold">Кейтеринг</Link>
              <Link to="/contacts" className="text-gray-600 hover:text-pink-600 transition-colors">Контакты</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Utensils className="h-16 w-16 text-emerald-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Кондитерский кейтеринг</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полное кондитерское обслуживание ваших мероприятий. От интимных семейных праздников 
            до крупных корпоративных событий - мы создадим незабываемый сладкий стол.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Услуги кейтеринга */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Наши услуги</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cateringServices.map(service => (
              <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  {service.popular && (
                    <Badge className="absolute top-2 left-2 bg-emerald-600">Популярно</Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <h4 className="font-bold text-xl mb-3">{service.title}</h4>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-emerald-600" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-600">От {service.minGuests} человек</p>
                      <p className="text-lg font-bold text-emerald-600">от {service.priceFrom}₽/чел</p>
                    </div>
                    <Button className="bg-emerald-600 hover:bg-emerald-700">
                      Узнать подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Пакеты услуг */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Пакеты услуг</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? 'ring-2 ring-emerald-600' : ''}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-emerald-600">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-emerald-600">от {pkg.price}₽</div>
                  <p className="text-gray-600">{pkg.guests}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  {pkg.includes.map((item, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                  <Button className={`w-full mt-6 ${pkg.popular ? 'bg-emerald-600 hover:bg-emerald-700' : ''}`}>
                    Выбрать пакет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Наши преимущества */}
        <section className="mb-16 bg-white rounded-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Почему выбирают нас</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600">
                  {advantage.icon}
                </div>
                <h4 className="font-semibold mb-2">{advantage.title}</h4>
                <p className="text-gray-600 text-sm">{advantage.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Портфолио */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Наши работы</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolio.map((work, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={work.image} 
                    alt={work.event}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">{work.event}</h4>
                  <p className="text-gray-600 text-sm mb-2">{work.description}</p>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Users className="h-4 w-4" />
                    <span>{work.guests} гостей</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Форма заказа */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Заказать кейтеринг</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя *</label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон *</label>
                    <Input placeholder="+7 (___) ___-__-__" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Тип мероприятия *</label>
                    <Select value={eventType} onValueChange={setEventType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите тип" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="corporate">Корпоративное</SelectItem>
                        <SelectItem value="wedding">Свадьба</SelectItem>
                        <SelectItem value="birthday">День рождения</SelectItem>
                        <SelectItem value="private">Частное мероприятие</SelectItem>
                        <SelectItem value="other">Другое</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Количество гостей *</label>
                    <Select value={guestCount} onValueChange={setGuestCount}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите количество" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10-20">10-20 человек</SelectItem>
                        <SelectItem value="20-50">20-50 человек</SelectItem>
                        <SelectItem value="50-100">50-100 человек</SelectItem>
                        <SelectItem value="100+">Более 100 человек</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Дата мероприятия *</label>
                    <Input type="date" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Время начала</label>
                    <Input type="time" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Адрес проведения</label>
                  <Input placeholder="Укажите адрес мероприятия" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Дополнительная информация</label>
                  <Textarea 
                    placeholder="Опишите ваши пожелания, особенности мероприятия..."
                    className="min-h-[100px]"
                  />
                </div>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700" size="lg">
                  Отправить заявку
                </Button>
              </form>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Как мы работаем</h3>
              <div className="space-y-6">
                {[
                  {
                    step: '1',
                    title: 'Консультация',
                    description: 'Обсуждаем детали мероприятия и ваши пожелания'
                  },
                  {
                    step: '2',
                    title: 'Планирование',
                    description: 'Составляем меню и план обслуживания'
                  },
                  {
                    step: '3',
                    title: 'Подготовка',
                    description: 'Изготавливаем все десерты и готовим оборудование'
                  },
                  {
                    step: '4',
                    title: 'Обслуживание',
                    description: 'Приезжаем, накрываем стол и обслуживаем гостей'
                  }
                ].map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{step.title}</h4>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-emerald-50 rounded-lg">
                <h4 className="font-semibold mb-3">Что входит в стоимость:</h4>
                <div className="space-y-2">
                  {[
                    'Изготовление всех десертов',
                    'Доставка и установка',
                    'Сервировка стола',
                    'Обслуживание в течение мероприятия',
                    'Уборка после окончания'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Призыв к действию */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Готовы сделать ваше мероприятие незабываемым?</h3>
          <p className="mb-6 opacity-90">
            Свяжитесь с нами для бесплатной консультации и расчета стоимости
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Calendar className="h-4 w-4 mr-2" />
              Заказать консультацию
            </Button>
            <Link to="/contacts">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-emerald-600">
                <MapPin className="h-4 w-4 mr-2" />
                Связаться с нами
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catering;