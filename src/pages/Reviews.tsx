import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Cake, Star, ThumbsUp, MessageCircle, Filter, Search, Camera } from 'lucide-react';

const Reviews = () => {
  const [filterRating, setFilterRating] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showReviewForm, setShowReviewForm] = useState(false);

  const reviews = [
    {
      id: 1,
      author: 'Анна Петрова',
      avatar: 'AP',
      rating: 5,
      date: '2024-01-15',
      category: 'Свадебные торты',
      cakeName: 'Трёхъярусный свадебный торт',
      text: 'Потрясающий торт! Превзошел все наши ожидания. Гости были в восторге от вкуса и внешнего вида. Доставка точно в срок, упаковка идеальная. Обязательно обратимся снова!',
      images: ['https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=300'],
      likes: 24,
      helpful: true,
      verified: true
    },
    {
      id: 2,
      author: 'Михаил Иванов',
      avatar: 'МИ',
      rating: 5,
      date: '2024-01-12',
      category: 'Детские торты',
      cakeName: 'Торт "Единорог"',
      text: 'Заказывали торт на день рождения дочки. Ребенок был в полном восторге! Торт не только красивый, но и очень вкусный. Все детали выполнены идеально.',
      images: ['https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=300'],
      likes: 18,
      helpful: true,
      verified: true
    },
    {
      id: 3,
      author: 'Елена Сидорова',
      avatar: 'ЕС',
      rating: 4,
      date: '2024-01-10',
      category: 'Корпоративные торты',
      cakeName: 'Корпоративный торт с логотипом',
      text: 'Отличный торт для корпоративного мероприятия. Логотип компании выполнен очень качественно. Единственный минус - немного сладковат для моего вкуса, но коллегам понравился.',
      images: [],
      likes: 12,
      helpful: false,
      verified: true
    },
    {
      id: 4,
      author: 'Дмитрий Козлов',
      avatar: 'ДК',
      rating: 5,
      date: '2024-01-08',
      category: 'Праздничные торты',
      cakeName: 'Новогодний торт',
      text: 'Заказывали на Новый год. Торт был центром праздничного стола! Красивое оформление, отличный вкус. Доставили точно в срок, несмотря на праздничную загруженность.',
      images: ['https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=300'],
      likes: 31,
      helpful: true,
      verified: true
    },
    {
      id: 5,
      author: 'Ольга Морозова',
      avatar: 'ОМ',
      rating: 5,
      date: '2024-01-05',
      category: 'Классические торты',
      cakeName: 'Красный бархат',
      text: 'Мой любимый торт! Заказываю уже не первый раз. Всегда свежий, вкусный, красиво оформленный. Персонал очень вежливый и профессиональный.',
      images: [],
      likes: 15,
      helpful: true,
      verified: true
    },
    {
      id: 6,
      author: 'Александр Волков',
      avatar: 'АВ',
      rating: 4,
      date: '2024-01-03',
      category: 'Индивидуальные торты',
      cakeName: 'Торт по индивидуальному эскизу',
      text: 'Сделали торт точно по нашему эскизу. Работа кондитеров на высшем уровне. Немного дороговато, но результат того стоит. Рекомендую для особых случаев.',
      images: ['https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=300'],
      likes: 9,
      helpful: false,
      verified: true
    }
  ];

  const stats = {
    totalReviews: reviews.length,
    averageRating: 4.8,
    ratingDistribution: {
      5: 83,
      4: 12,
      3: 3,
      2: 1,
      1: 1
    }
  };

  const categories = [
    { value: 'all', label: 'Все категории' },
    { value: 'Свадебные торты', label: 'Свадебные торты' },
    { value: 'Детские торты', label: 'Детские торты' },
    { value: 'Корпоративные торты', label: 'Корпоративные торты' },
    { value: 'Праздничные торты', label: 'Праздничные торты' },
    { value: 'Классические торты', label: 'Классические торты' },
    { value: 'Индивидуальные торты', label: 'Индивидуальные торты' }
  ];

  const filteredReviews = reviews.filter(review => {
    const matchesRating = filterRating === 'all' || review.rating.toString() === filterRating;
    const matchesCategory = filterCategory === 'all' || review.category === filterCategory;
    const matchesSearch = review.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         review.cakeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         review.author.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesRating && matchesCategory && matchesSearch;
  });

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
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
              <Link to="/reviews" className="text-pink-600 font-semibold">Отзывы</Link>
              <Link to="/contacts" className="text-gray-600 hover:text-pink-600 transition-colors">Контакты</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Отзывы наших клиентов</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Более 1000 довольных клиентов уже оценили качество наших тортов. 
            Читайте реальные отзывы и делитесь своими впечатлениями.
          </p>
          <Button 
            onClick={() => setShowReviewForm(true)}
            className="bg-orange-600 hover:bg-orange-700"
          >
            Оставить отзыв
          </Button>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Статистика */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-orange-600 mb-2">{stats.averageRating}</div>
            <div className="flex justify-center mb-2">
              {renderStars(Math.round(stats.averageRating))}
            </div>
            <p className="text-gray-600">Средняя оценка</p>
          </Card>
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-orange-600 mb-2">{stats.totalReviews}</div>
            <p className="text-gray-600">Всего отзывов</p>
          </Card>
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-orange-600 mb-2">{stats.ratingDistribution[5]}%</div>
            <p className="text-gray-600">5-звездочных отзывов</p>
          </Card>
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
            <p className="text-gray-600">Рекомендуют нас</p>
          </Card>
        </div>

        {/* Распределение оценок */}
        <Card className="mb-8 p-6">
          <h3 className="text-xl font-semibold mb-4">Распределение оценок</h3>
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map(rating => (
              <div key={rating} className="flex items-center space-x-4">
                <div className="flex items-center space-x-1 w-16">
                  <span>{rating}</span>
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                </div>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-orange-600 h-2 rounded-full" 
                    style={{ width: `${stats.ratingDistribution[rating]}%` }}
                  />
                </div>
                <span className="text-sm text-gray-600 w-12">{stats.ratingDistribution[rating]}%</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Фильтры */}
        <Card className="mb-8 p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Поиск по отзывам..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterRating} onValueChange={setFilterRating}>
              <SelectTrigger>
                <SelectValue placeholder="Оценка" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все оценки</SelectItem>
                <SelectItem value="5">5 звезд</SelectItem>
                <SelectItem value="4">4 звезды</SelectItem>
                <SelectItem value="3">3 звезды</SelectItem>
                <SelectItem value="2">2 звезды</SelectItem>
                <SelectItem value="1">1 звезда</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Категория" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Сбросить фильтры
            </Button>
          </div>
        </Card>

        {/* Отзывы */}
        <div className="space-y-6">
          {filteredReviews.map(review => (
            <Card key={review.id}>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Avatar>
                    <AvatarFallback>{review.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-semibold">{review.author}</h4>
                      {review.verified && (
                        <Badge variant="secondary" className="text-xs">Проверенный отзыв</Badge>
                      )}
                      <span className="text-gray-500 text-sm">{review.date}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex">
                        {renderStars(review.rating)}
                      </div>
                      <Badge variant="outline" className="text-xs">{review.category}</Badge>
                    </div>
                    
                    <h5 className="font-medium text-gray-800 mb-2">{review.cakeName}</h5>
                    
                    <p className="text-gray-700 mb-4">{review.text}</p>
                    
                    {review.images.length > 0 && (
                      <div className="flex space-x-2 mb-4">
                        {review.images.map((image, index) => (
                          <img 
                            key={index}
                            src={image} 
                            alt="Фото торта"
                            className="w-20 h-20 object-cover rounded-lg cursor-pointer hover:opacity-80"
                          />
                        ))}
                      </div>
                    )}
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <button className="flex items-center space-x-1 hover:text-gray-700">
                        <ThumbsUp className="h-4 w-4" />
                        <span>Полезно ({review.likes})</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-gray-700">
                        <MessageCircle className="h-4 w-4" />
                        <span>Ответить</span>
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Форма отзыва */}
        {showReviewForm && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Оставить отзыв</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя *</label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Оценка *</label>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map(rating => (
                    <Star 
                      key={rating}
                      className="h-6 w-6 text-gray-300 hover:text-yellow-400 cursor-pointer"
                    />
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Категория торта</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите категорию" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.slice(1).map(category => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Название торта</label>
                <Input placeholder="Например: Красный бархат" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Ваш отзыв *</label>
                <Textarea 
                  placeholder="Поделитесь впечатлениями о торте..."
                  className="min-h-[120px]"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Фото торта</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Camera className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">Добавьте фото торта</p>
                  <p className="text-xs text-gray-500 mt-1">PNG, JPG до 5MB</p>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <Button className="bg-orange-600 hover:bg-orange-700">
                  Опубликовать отзыв
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => setShowReviewForm(false)}
                >
                  Отмена
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Призыв к действию */}
        <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Попробуйте наши торты сами!</h3>
          <p className="mb-6 opacity-90">
            Присоединяйтесь к тысячам довольных клиентов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/catalog">
              <Button size="lg" variant="secondary">
                Посмотреть каталог
              </Button>
            </Link>
            <Link to="/custom-order">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-orange-600">
                Индивидуальный заказ
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;