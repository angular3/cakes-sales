import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Cake, Heart, ShoppingCart, Users, Star, Filter } from 'lucide-react';

const WeddingCakes = () => {
  const [sortBy, setSortBy] = useState('popular');
  const [filterBy, setFilterBy] = useState('all');

  const weddingCakes = [
    {
      id: 1,
      name: 'Классический трёхъярусный',
      price: 8500,
      image: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Элегантный белый торт с розами из крема',
      serves: '80-100 человек',
      rating: 4.9,
      reviews: 45,
      style: 'classic',
      popular: true
    },
    {
      id: 2,
      name: 'Рустик с живыми цветами',
      price: 6200,
      image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Торт в стиле рустик с натуральными цветами',
      serves: '60-80 человек',
      rating: 4.8,
      reviews: 32,
      style: 'rustic',
      popular: false
    },
    {
      id: 3,
      name: 'Минималистичный двухъярусный',
      price: 5800,
      image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Современный дизайн в стиле минимализм',
      serves: '50-70 человек',
      rating: 4.7,
      reviews: 28,
      style: 'modern',
      popular: true
    },
    {
      id: 4,
      name: 'Винтажный с кружевом',
      price: 7200,
      image: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Романтичный торт с кружевными узорами',
      serves: '70-90 человек',
      rating: 4.9,
      reviews: 38,
      style: 'vintage',
      popular: false
    },
    {
      id: 5,
      name: 'Голый торт с ягодами',
      price: 4800,
      image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Модный "голый" торт со свежими ягодами',
      serves: '40-60 человек',
      rating: 4.6,
      reviews: 25,
      style: 'naked',
      popular: true
    },
    {
      id: 6,
      name: 'Золотой гламур',
      price: 9500,
      image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Роскошный торт с золотыми элементами',
      serves: '90-120 человек',
      rating: 5.0,
      reviews: 15,
      style: 'luxury',
      popular: false
    }
  ];

  const styles = [
    { value: 'all', label: 'Все стили' },
    { value: 'classic', label: 'Классический' },
    { value: 'rustic', label: 'Рустик' },
    { value: 'modern', label: 'Современный' },
    { value: 'vintage', label: 'Винтажный' },
    { value: 'naked', label: 'Голый торт' },
    { value: 'luxury', label: 'Люкс' }
  ];

  const filteredCakes = weddingCakes
    .filter(cake => filterBy === 'all' || cake.style === filterBy)
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
              <Link to="/wedding-cakes" className="text-pink-600 font-semibold">Свадебные торты</Link>
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
      <section className="py-16 px-4 bg-gradient-to-r from-pink-50 to-rose-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Свадебные торты</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Создаем незабываемые свадебные торты, которые станут украшением вашего особенного дня. 
            Каждый торт - это произведение искусства, созданное с любовью.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Фильтры */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-400" />
              <Select value={filterBy} onValueChange={setFilterBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Стиль торта" />
                </SelectTrigger>
                <SelectContent>
                  {styles.map(style => (
                    <SelectItem key={style.value} value={style.value}>
                      {style.label}
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

        {/* Каталог свадебных тортов */}
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
                  <Badge className="absolute top-2 left-2 bg-pink-600">Популярный</Badge>
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

                <div className="flex items-center space-x-2 mb-4">
                  <Users className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{cake.serves}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-pink-600">{cake.price}₽</span>
                  <div className="flex space-x-2">
                    <Link to={`/cake/${cake.id}`}>
                      <Button size="sm" variant="outline">Подробнее</Button>
                    </Link>
                    <Button size="sm" className="bg-pink-600 hover:bg-pink-700">
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Информация о свадебных тортах */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Особенности наших свадебных тортов</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-pink-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Индивидуальный дизайн</h4>
                  <p className="text-gray-600 text-sm">Каждый торт создается по вашим пожеланиям и стилю свадьбы</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-pink-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Натуральные ингредиенты</h4>
                  <p className="text-gray-600 text-sm">Используем только свежие и качественные продукты</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-pink-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Профессиональная доставка</h4>
                  <p className="text-gray-600 text-sm">Бережно доставляем и устанавливаем торт на месте</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-pink-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold">Дегустация</h4>
                  <p className="text-gray-600 text-sm">Возможность попробовать вкусы перед заказом</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Популярные вкусы</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Ванильный бисквит',
                'Шоколадный',
                'Красный бархат',
                'Морковный',
                'Лимонный',
                'Кокосовый',
                'Фруктовый',
                'Тирамису'
              ].map((flavor, index) => (
                <div key={index} className="bg-pink-50 p-3 rounded-lg text-center">
                  <span className="text-sm font-medium">{flavor}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Призыв к действию */}
        <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-lg p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Хотите уникальный свадебный торт?</h3>
          <p className="mb-6 opacity-90">
            Наши кондитеры создадут торт вашей мечты. Консультация и дегустация бесплатно!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/custom-order">
              <Button size="lg" variant="secondary">
                Индивидуальный заказ
              </Button>
            </Link>
            <Link to="/contacts">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-pink-600">
                Записаться на дегустацию
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingCakes;