import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Cake, Heart, ShoppingCart, Star, Gift, Sparkles } from 'lucide-react';

const BirthdayCakes = () => {
  const [ageFilter, setAgeFilter] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const birthdayCakes = [
    {
      id: 1,
      name: 'Единорог',
      price: 3500,
      image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Яркий торт с единорогом из мастики',
      ageGroup: 'kids',
      rating: 4.9,
      reviews: 67,
      popular: true,
      serves: '12-15 человек'
    },
    {
      id: 2,
      name: 'Принцесса',
      price: 3200,
      image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Розовый торт для маленькой принцессы',
      ageGroup: 'kids',
      rating: 4.8,
      reviews: 45,
      popular: true,
      serves: '10-12 человек'
    },
    {
      id: 3,
      name: 'Супергерой',
      price: 3400,
      image: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Торт в стиле любимого супергероя',
      ageGroup: 'kids',
      rating: 4.7,
      reviews: 38,
      popular: false,
      serves: '12-15 человек'
    },
    {
      id: 4,
      name: 'Элегантный юбилейный',
      price: 4200,
      image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Торт для взрослого юбилея',
      ageGroup: 'adult',
      rating: 4.9,
      reviews: 52,
      popular: true,
      serves: '15-20 человек'
    },
    {
      id: 5,
      name: 'Фото-торт',
      price: 2800,
      image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Торт с вашей фотографией',
      ageGroup: 'all',
      rating: 4.6,
      reviews: 29,
      popular: false,
      serves: '8-10 человек'
    },
    {
      id: 6,
      name: 'Подростковый тренд',
      price: 3800,
      image: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Современный дизайн для подростков',
      ageGroup: 'teen',
      rating: 4.8,
      reviews: 33,
      popular: true,
      serves: '12-15 человек'
    },
    {
      id: 7,
      name: 'Машинка',
      price: 3600,
      image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Торт в виде автомобиля',
      ageGroup: 'kids',
      rating: 4.7,
      reviews: 41,
      popular: false,
      serves: '12-15 человек'
    },
    {
      id: 8,
      name: 'Цифра-торт',
      price: 2500,
      image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Торт в виде цифры возраста',
      ageGroup: 'all',
      rating: 4.5,
      reviews: 25,
      popular: true,
      serves: '8-12 человек'
    }
  ];

  const ageGroups = [
    { value: 'all', label: 'Все возрасты' },
    { value: 'kids', label: 'Детские (3-10 лет)' },
    { value: 'teen', label: 'Подростковые (11-17 лет)' },
    { value: 'adult', label: 'Взрослые (18+ лет)' }
  ];

  const filteredCakes = birthdayCakes
    .filter(cake => ageFilter === 'all' || cake.ageGroup === ageFilter || cake.ageGroup === 'all')
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
              <Link to="/birthday-cakes" className="text-pink-600 font-semibold">Детские торты</Link>
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
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Gift className="h-16 w-16 text-orange-500" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Торты на день рождения</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Сделайте день рождения незабываемым с нашими яркими и вкусными тортами. 
            Для детей и взрослых, с любимыми персонажами и уникальным дизайном.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Фильтры */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Sparkles className="h-5 w-5 text-orange-400" />
              <Select value={ageFilter} onValueChange={setAgeFilter}>
                <SelectTrigger className="w-56">
                  <SelectValue placeholder="Возрастная категория" />
                </SelectTrigger>
                <SelectContent>
                  {ageGroups.map(group => (
                    <SelectItem key={group.value} value={group.value}>
                      {group.label}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCakes.map(cake => (
            <Card key={cake.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden relative group">
                <img 
                  src={cake.image} 
                  alt={cake.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                {cake.popular && (
                  <Badge className="absolute top-2 left-2 bg-orange-500">Хит продаж</Badge>
                )}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="sm" variant="secondary" className="rounded-full p-2">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">{cake.name}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{cake.description}</p>
                
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium ml-1">{cake.rating}</span>
                  </div>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-600">{cake.reviews} отзывов</span>
                </div>

                <p className="text-xs text-gray-500 mb-3">{cake.serves}</p>

                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-orange-600">{cake.price}₽</span>
                  <div className="flex space-x-2">
                    <Link to={`/cake/${cake.id}`}>
                      <Button size="sm" variant="outline">Подробнее</Button>
                    </Link>
                    <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Популярные темы */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Популярные темы для детских тортов</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Единороги',
              'Принцессы',
              'Супергерои',
              'Машинки',
              'Животные',
              'Мультфильмы',
              'Спорт',
              'Космос',
              'Пираты',
              'Феи',
              'Динозавры',
              'Роботы'
            ].map((theme, index) => (
              <div key={index} className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-lg text-center hover:shadow-md transition-shadow cursor-pointer">
                <span className="text-sm font-medium text-gray-700">{theme}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Советы по выбору */}
        <section className="mt-16 bg-white rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6">Как выбрать идеальный торт на день рождения</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4 text-orange-600">Для детей (3-10 лет)</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Яркие цвета и любимые персонажи</li>
                <li>• Не слишком сладкие кремы</li>
                <li>• Безопасные украшения</li>
                <li>• Размер по количеству гостей</li>
                <li>• Учитывайте аллергии</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-orange-600">Для подростков и взрослых</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Стильный современный дизайн</li>
                <li>• Качественные ингредиенты</li>
                <li>• Фото-торты с памятными снимками</li>
                <li>• Торты по хобби и интересам</li>
                <li>• Элегантное оформление</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Дополнительные услуги */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Дополнительные услуги</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <Gift className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Свечи и украшения</h4>
              <p className="text-gray-600 text-sm">Праздничные свечи, топперы и декор в подарок</p>
            </Card>
            <Card className="p-6 text-center">
              <Sparkles className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Персонализация</h4>
              <p className="text-gray-600 text-sm">Имя именинника и поздравления на торте</p>
            </Card>
            <Card className="p-6 text-center">
              <Heart className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Упаковка</h4>
              <p className="text-gray-600 text-sm">Красивая коробка и пакет для подарка</p>
            </Card>
          </div>
        </section>

        {/* Призыв к действию */}
        <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Создадим торт мечты для вашего ребенка!</h3>
          <p className="mb-6 opacity-90">
            Наши кондитеры воплотят любую идею в жизнь. Консультация бесплатно!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/custom-order">
              <Button size="lg" variant="secondary">
                Индивидуальный заказ
              </Button>
            </Link>
            <Link to="/contacts">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-orange-600">
                Получить консультацию
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthdayCakes;