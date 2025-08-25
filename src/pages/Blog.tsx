import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Cake, Search, Calendar, User, Tag, ArrowRight, Clock, Eye } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'Секреты идеального бисквита: советы от профессионального кондитера',
      excerpt: 'Узнайте, как приготовить воздушный и нежный бисквит, который станет основой для любого торта. Делимся профессиональными секретами.',
      content: 'Полный текст статьи о приготовлении бисквита...',
      author: 'Анна Петрова',
      date: '2024-01-20',
      category: 'Рецепты',
      tags: ['бисквит', 'основы', 'советы'],
      image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400',
      readTime: '5 мин',
      views: 1250,
      featured: true
    },
    {
      id: 2,
      title: 'Тренды в дизайне свадебных тортов 2024',
      excerpt: 'Обзор самых актуальных трендов в оформлении свадебных тортов: от минимализма до ярких акцентов.',
      content: 'Полный текст статьи о трендах...',
      author: 'Михаил Иванов',
      date: '2024-01-18',
      category: 'Дизайн',
      tags: ['свадьба', 'тренды', 'дизайн'],
      image: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=400',
      readTime: '7 мин',
      views: 890,
      featured: false
    },
    {
      id: 3,
      title: 'Как выбрать торт для детского праздника',
      excerpt: 'Практические советы по выбору торта для детского дня рождения: размер, вкус, дизайн и безопасность.',
      content: 'Полный текст статьи о детских тортах...',
      author: 'Елена Сидорова',
      date: '2024-01-15',
      category: 'Советы',
      tags: ['дети', 'праздник', 'выбор'],
      image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400',
      readTime: '4 мин',
      views: 1100,
      featured: false
    },
    {
      id: 4,
      title: 'История торта "Наполеон": от Франции до России',
      excerpt: 'Увлекательная история одного из самых популярных тортов и секреты его приготовления.',
      content: 'Полный текст статьи об истории торта...',
      author: 'Дмитрий Козлов',
      date: '2024-01-12',
      category: 'История',
      tags: ['наполеон', 'история', 'классика'],
      image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400',
      readTime: '6 мин',
      views: 750,
      featured: false
    },
    {
      id: 5,
      title: 'Сезонные ингредиенты: как использовать фрукты и ягоды в тортах',
      excerpt: 'Гид по использованию сезонных фруктов и ягод в кондитерских изделиях для максимального вкуса.',
      content: 'Полный текст статьи о сезонных ингредиентах...',
      author: 'Ольга Морозова',
      date: '2024-01-10',
      category: 'Ингредиенты',
      tags: ['фрукты', 'ягоды', 'сезон'],
      image: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=400',
      readTime: '8 мин',
      views: 920,
      featured: true
    },
    {
      id: 6,
      title: 'Мастер-класс: украшение торта живыми цветами',
      excerpt: 'Пошаговое руководство по безопасному использованию живых цветов в декоре тортов.',
      content: 'Полный текст мастер-класса...',
      author: 'Анна Петрова',
      date: '2024-01-08',
      category: 'Мастер-классы',
      tags: ['цветы', 'декор', 'мастер-класс'],
      image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400',
      readTime: '10 мин',
      views: 1350,
      featured: false
    }
  ];

  const categories = [
    { value: 'all', label: 'Все статьи', count: blogPosts.length },
    { value: 'Рецепты', label: 'Рецепты', count: 1 },
    { value: 'Дизайн', label: 'Дизайн', count: 1 },
    { value: 'Советы', label: 'Советы', count: 1 },
    { value: 'История', label: 'История', count: 1 },
    { value: 'Ингредиенты', label: 'Ингредиенты', count: 1 },
    { value: 'Мастер-классы', label: 'Мастер-классы', count: 1 }
  ];

  const popularTags = [
    'бисквит', 'свадьба', 'дети', 'дизайн', 'рецепты', 'советы', 'тренды', 'декор'
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

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
              <Link to="/blog" className="text-pink-600 font-semibold">Блог</Link>
              <Link to="/contacts" className="text-gray-600 hover:text-pink-600 transition-colors">Контакты</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Блог о кондитерском искусстве</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Секреты мастерства, интересные рецепты, тренды в дизайне тортов и многое другое 
            от профессиональных кондитеров СладкиеМечты.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Рекомендуемые статьи */}
        {featuredPosts.length > 0 && (
          <section className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Рекомендуем прочитать</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map(post => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <Badge variant="secondary">{post.category}</Badge>
                      <Badge className="bg-orange-600">Рекомендуем</Badge>
                    </div>
                    <h3 className="font-bold text-xl mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>{post.views}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      Читать далее
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Основной контент */}
          <div className="lg:col-span-3">
            {/* Поиск */}
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Поиск статей..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 py-3"
                />
              </div>
            </div>

            {/* Список статей */}
            <div className="space-y-8">
              {filteredPosts.map(post => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <Badge variant="outline">{post.category}</Badge>
                        {post.featured && <Badge className="bg-orange-600">Рекомендуем</Badge>}
                      </div>
                      <h3 className="font-bold text-xl mb-3 hover:text-pink-600 cursor-pointer">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="h-4 w-4" />
                            <span>{post.views}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {post.tags.slice(0, 3).map(tag => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              #{tag}
                            </Badge>
                          ))}
                        </div>
                        <Button variant="outline" size="sm">
                          Читать далее
                          <ArrowRight className="h-3 w-3 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">Статьи не найдены</p>
                <p className="text-gray-400">Попробуйте изменить параметры поиска</p>
              </div>
            )}
          </div>

          {/* Боковая панель */}
          <div className="space-y-6">
            {/* Категории */}
            <Card>
              <CardHeader>
                <CardTitle>Категории</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category.value 
                        ? 'bg-pink-100 text-pink-700' 
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{category.label}</span>
                      <Badge variant="secondary" className="text-xs">{category.count}</Badge>
                    </div>
                  </button>
                ))}
              </CardContent>
            </Card>

            {/* Популярные теги */}
            <Card>
              <CardHeader>
                <CardTitle>Популярные теги</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map(tag => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="cursor-pointer hover:bg-pink-100"
                      onClick={() => setSearchTerm(tag)}
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Популярные статьи */}
            <Card>
              <CardHeader>
                <CardTitle>Популярные статьи</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {blogPosts
                  .sort((a, b) => b.views - a.views)
                  .slice(0, 3)
                  .map(post => (
                    <div key={post.id} className="flex space-x-3">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm line-clamp-2 hover:text-pink-600 cursor-pointer">
                          {post.title}
                        </h4>
                        <div className="flex items-center space-x-2 mt-1 text-xs text-gray-500">
                          <Eye className="h-3 w-3" />
                          <span>{post.views}</span>
                        </div>
                      </div>
                    </div>
                  ))}
              </CardContent>
            </Card>

            {/* Подписка на новости */}
            <Card>
              <CardHeader>
                <CardTitle>Подписка на новости</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600">
                  Получайте новые статьи и рецепты на email
                </p>
                <Input placeholder="Ваш email" type="email" />
                <Button className="w-full bg-pink-600 hover:bg-pink-700">
                  Подписаться
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Призыв к действию */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Хотите попробовать наши торты?</h3>
          <p className="mb-6 opacity-90">
            Переходите в каталог и выбирайте торт по душе
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/catalog">
              <Button size="lg" variant="secondary">
                Посмотреть каталог
              </Button>
            </Link>
            <Link to="/custom-order">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-purple-600">
                Индивидуальный заказ
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;