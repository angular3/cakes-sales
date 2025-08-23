import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Cake, Search, Filter, Heart, ShoppingCart } from 'lucide-react';

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const cakes = [
    { id: 1, name: 'Красный бархат', category: 'classic', price: 2800, image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Нежный торт с кремом из сливочного сыра' },
    { id: 2, name: 'Наполеон', category: 'classic', price: 2200, image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Классический торт с заварным кремом' },
    { id: 3, name: 'Тирамису', category: 'classic', price: 3200, image: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Итальянский десерт с маскарпоне' },
    { id: 4, name: 'Единорог', category: 'kids', price: 3500, image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Яркий детский торт с декором' },
    { id: 5, name: 'Принцесса', category: 'kids', price: 3200, image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Розовый торт для маленькой принцессы' },
    { id: 6, name: 'Супергерой', category: 'kids', price: 3400, image: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Торт в стиле супергероев' },
    { id: 7, name: 'Трёхъярусный свадебный', category: 'wedding', price: 8500, image: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Элегантный свадебный торт' },
    { id: 8, name: 'Рустик свадебный', category: 'wedding', price: 6200, image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Свадебный торт в стиле рустик' },
    { id: 9, name: 'Корпоративный логотип', category: 'corporate', price: 4500, image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Торт с логотипом компании' },
    { id: 10, name: 'Юбилейный', category: 'holiday', price: 3800, image: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Торт для юбилея' },
    { id: 11, name: 'Новогодний', category: 'holiday', price: 4200, image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Праздничный новогодний торт' },
    { id: 12, name: 'День Святого Валентина', category: 'holiday', price: 2900, image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400', description: 'Романтический торт в форме сердца' }
  ];

  const categories = [
    { value: 'all', label: 'Все категории' },
    { value: 'classic', label: 'Классические' },
    { value: 'kids', label: 'Детские' },
    { value: 'wedding', label: 'Свадебные' },
    { value: 'corporate', label: 'Корпоративные' },
    { value: 'holiday', label: 'Праздничные' }
  ];

  const filteredCakes = cakes
    .filter(cake => 
      (selectedCategory === 'all' || cake.category === selectedCategory) &&
      cake.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
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
              <Link to="/catalog" className="text-pink-600 font-semibold">Каталог</Link>
              <Link to="/about" className="text-gray-600 hover:text-pink-600 transition-colors">О нас</Link>
              <Link to="/contacts" className="text-gray-600 hover:text-pink-600 transition-colors">Контакты</Link>
            </nav>
            <div className="flex space-x-2">
              <Link to="/cart">
                <Button variant="outline" size="sm">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Корзина
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Каталог тортов</h1>
          <p className="text-gray-600">Выберите идеальный торт для вашего праздника</p>
        </div>

        {/* Фильтры */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Поиск тортов..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите категорию" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Сортировать по" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">По названию</SelectItem>
                <SelectItem value="price">По цене</SelectItem>
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
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="sm" variant="secondary" className="rounded-full p-2">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {categories.find(c => c.value === cake.category)?.label}
                  </Badge>
                </div>
                <h3 className="font-semibold mb-2">{cake.name}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{cake.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-pink-600">{cake.price}₽</span>
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

        {filteredCakes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Торты не найдены</p>
            <p className="text-gray-400">Попробуйте изменить параметры поиска</p>
          </div>
        )}

        {/* Призыв к действию */}
        <div className="bg-pink-50 rounded-lg p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Не нашли подходящий торт?</h3>
          <p className="text-gray-600 mb-6">Мы создадим уникальный торт специально для вас</p>
          <Link to="/custom-order">
            <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
              Индивидуальный заказ
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Catalog;