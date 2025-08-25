import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Cake, Heart, ShoppingCart, Star, Calendar, Sparkles } from 'lucide-react';

const HolidayCakes = () => {
  const [holidayFilter, setHolidayFilter] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const holidayCakes = [
    {
      id: 1,
      name: 'Новогодний торт',
      price: 4200,
      image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Праздничный торт с зимним декором',
      holiday: 'new-year',
      rating: 4.9,
      reviews: 78,
      popular: true,
      serves: '15-20 человек'
    },
    {
      id: 2,
      name: 'Торт на 8 марта',
      price: 3800,
      image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Нежный торт с цветочным декором',
      holiday: 'march-8',
      rating: 4.8,
      reviews: 56,
      popular: true,
      serves: '12-15 человек'
    },
    {
      id: 3,
      name: 'Пасхальный торт',
      price: 3500,
      image: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Традиционный пасхальный торт',
      holiday: 'easter',
      rating: 4.7,
      reviews: 42,
      popular: false,
      serves: '10-12 человек'
    },
    {
      id: 4,
      name: 'Торт на 23 февраля',
      price: 3600,
      image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Мужской торт в военной тематике',
      holiday: 'february-23',
      rating: 4.6,
      reviews: 34,
      popular: false,
      serves: '12-15 человек'
    },
    {
      id: 5,
      name: 'Хэллоуин торт',
      price: 4000,
      image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Страшно вкусный торт на Хэллоуин',
      holiday: 'halloween',
      rating: 4.8,
      reviews: 29,
      popular: true,
      serves: '15-18 человек'
    },
    {
      id: 6,
      name: 'Торт на выпускной',
      price: 4500,
      image: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Торжественный торт для выпускников',
      holiday: 'graduation',
      rating: 4.9,
      reviews: 67,
      popular: true,
      serves: '20-25 человек'
    }
  ];

  const holidays = [
    { value: 'all', label: 'Все праздники' },
    { value: 'new-year', label: 'Новый год' },
    { value: 'march-8', label: '8 марта' },
    { value: 'february-23', label: '23 февраля' },
    { value: 'easter', label: 'Пасха' },
    { value: 'halloween', label: 'Хэллоуин' },
    { value: 'graduation', label: 'Выпускной' }
  ];

  const filteredCakes = holidayCakes
    .filter(cake => holidayFilter === 'all' || cake.holiday === holidayFilter)
    .sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'popular') return b.popular ? 1 : -1;
      return 0;
    });

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
              <Link to="/holiday-cakes" className="text-pink-600 font-semibold">Праздничные торты</Link>
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
      <section className="py-16 px-4 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Calendar className="h-16 w-16 text-purple-500" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Праздничные торты</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Сделайте любой праздник особенным с нашими тематическими тортами. 
            От Нового года до выпускного - у нас есть торт для каждого события.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Фильтры */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Sparkles className="h-5 w-5 text-purple-400" />
              <Select value={holidayFilter} onValueChange={setHolidayFilter}>
                <SelectTrigger className="w-56">
                  <SelectValue placeholder="Выберите праздник" />
                </SelectTrigger>
                <SelectContent>
                  {holidays.map(holiday => (
                    <SelectItem key={holiday.value} value={holiday.value}>
                      {holiday.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Сортировать по" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">По популярности</SelectItem>
                <SelectItem value="price">По цене</SelectItem>
                <SelectItem value="rating">По рейтингу</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Каталог тортов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCakes.map(cake => (
            <Card key={cake.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden relative group">
                <img 
                  src={cake.image} 
                  alt={cake.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                {cake.popular && (
                  <Badge className="absolute top-2 left-2 bg-purple-600">Популярный</Badge>
                )}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="sm" variant="secondary" className="rounded-full p-2">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">{cake.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{cake.description}</p>
                
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium ml-1">{cake.rating}</span>
                  </div>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-600">{cake.reviews} отзывов</span>
                </div>

                <p className="text-xs text-gray-500 mb-3">{cake.serves}</p>

                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-purple-600">{cake.price}₽</span>
                  <div className="flex space-x-2">
                    <Link to={`/cake/${cake.id}`}>
                      <Button size="sm" variant="outline">Подробнее</Button>
                    </Link>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Календарь праздников */}
        <section className="mt-16 bg-white rounded-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Календарь праздников</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { month: 'Январь', holidays: ['Новый год', 'Рождество', 'Старый Новый год'] },
              { month: 'Февраль', holidays: ['День влюбленных', '23 февраля', 'Масленица'] },
              { month: 'Март', holidays: ['8 марта', 'День рождения весны'] },
              { month: 'Апрель', holidays: ['Пасха', 'День смеха', 'День космонавтики'] },
              { month: 'Май', holidays: ['1 мая', '9 мая', 'Выпускные'] },
              { month: 'Июнь', holidays: ['День защиты детей', 'День России', 'Свадебный сезон'] }
            ].map((period, index) => (
              <Card key={index} className="p-4">
                <h4 className="font-semibold text-purple-600 mb-3">{period.month}</h4>
                <ul className="space-y-1">
                  {period.holidays.map((holiday, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-center">
                      <Calendar className="h-3 w-3 mr-2 text-purple-400" />
                      {holiday}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* Призыв к действию */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Готовимся к празднику заранее!</h3>
          <p className="mb-6 opacity-90">
            Закажите праздничный торт заблаговременно и получите скидку 10%
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/custom-order">
              <Button size="lg" variant="secondary">
                Индивидуальный заказ
              </Button>
            </Link>
            <Link to="/contacts">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-purple-600">
                Получить консультацию
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HolidayCakes;