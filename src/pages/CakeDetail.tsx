import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Cake, Star, Heart, ShoppingCart, Users, Clock, Truck, Shield, Plus, Minus, ArrowLeft } from 'lucide-react';

const CakeDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('medium');
  const [selectedFlavor, setSelectedFlavor] = useState('');

  // Данные торта (в реальном приложении загружались бы по ID)
  const cake = {
    id: 1,
    name: 'Красный бархат',
    price: 2800,
    originalPrice: 3200,
    discount: 13,
    rating: 4.8,
    reviews: 156,
    category: 'Классические торты',
    description: 'Нежный бисквит насыщенного красного цвета с кремом из сливочного сыра. Классический американский десерт, который покорил сердца сладкоежек по всему миру.',
    images: [
      'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    ingredients: [
      'Мука пшеничная высшего сорта',
      'Сливочное масло 82%',
      'Сливочный сыр Philadelphia',
      'Яйца куриные категории С1',
      'Сахар-песок',
      'Какао-порошок',
      'Натуральный краситель',
      'Ванильный экстракт'
    ],
    nutritionPer100g: {
      calories: 385,
      proteins: 5.2,
      fats: 18.5,
      carbs: 48.3
    },
    sizes: [
      { value: 'small', label: 'Маленький (6-8 порций)', price: 2800, weight: '1.2 кг' },
      { value: 'medium', label: 'Средний (10-12 порций)', price: 3800, weight: '1.8 кг' },
      { value: 'large', label: 'Большой (15-20 порций)', price: 5200, weight: '2.5 кг' }
    ],
    flavors: [
      'Классический красный бархат',
      'С добавлением вишни',
      'С кремом из маскарпоне',
      'Без глютена'
    ],
    features: [
      'Ручная работа',
      'Натуральные ингредиенты',
      'Свежее изготовление',
      'Возможна персонализация'
    ],
    deliveryInfo: {
      time: '24-48 часов',
      cost: 'Бесплатно от 3000₽',
      area: 'Москва и область'
    },
    inStock: true,
    popular: true
  };

  const reviews = [
    {
      id: 1,
      author: 'Анна К.',
      rating: 5,
      date: '2024-01-15',
      text: 'Потрясающий торт! Очень нежный и вкусный. Заказывала на день рождения мужа - все гости были в восторге.',
      verified: true
    },
    {
      id: 2,
      author: 'Михаил П.',
      rating: 5,
      date: '2024-01-10',
      text: 'Классический красный бархат на высшем уровне. Крем идеально сбалансирован, не приторный.',
      verified: true
    },
    {
      id: 3,
      author: 'Елена С.',
      rating: 4,
      date: '2024-01-08',
      text: 'Хороший торт, но хотелось бы чуть больше крема между слоями. В целом рекомендую!',
      verified: false
    }
  ];

  const relatedCakes = [
    {
      id: 2,
      name: 'Наполеон',
      price: 2200,
      image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.7
    },
    {
      id: 3,
      name: 'Тирамису',
      price: 3200,
      image: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.9
    },
    {
      id: 4,
      name: 'Чизкейк Нью-Йорк',
      price: 2900,
      image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.6
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isInWishlist, setIsInWishlist] = useState(false);

  const selectedSizeData = cake.sizes.find(size => size.value === selectedSize);
  const totalPrice = selectedSizeData ? selectedSizeData.price * quantity : cake.price * quantity;

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

      <div className="container mx-auto px-4 py-8">
        {/* Хлебные крошки */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-pink-600">Главная</Link>
          <span>/</span>
          <Link to="/catalog" className="hover:text-pink-600">Каталог</Link>
          <span>/</span>
          <Link to="/catalog" className="hover:text-pink-600">{cake.category}</Link>
          <span>/</span>
          <span className="text-gray-800">{cake.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Изображения */}
          <div>
            <div className="aspect-square overflow-hidden rounded-lg mb-4">
              <img 
                src={cake.images[currentImageIndex]} 
                alt={cake.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex space-x-2">
              {cake.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    currentImageIndex === index ? 'border-pink-600' : 'border-gray-200'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${cake.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Информация о торте */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <Badge variant="secondary">{cake.category}</Badge>
              {cake.popular && <Badge className="bg-orange-600">Популярный</Badge>}
              {cake.discount && <Badge variant="destructive">-{cake.discount}%</Badge>}
            </div>

            <h1 className="text-3xl font-bold text-gray-800 mb-4">{cake.name}</h1>

            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-1">
                <div className="flex">
                  {renderStars(Math.round(cake.rating))}
                </div>
                <span className="font-medium">{cake.rating}</span>
              </div>
              <span className="text-gray-600">({cake.reviews} отзывов)</span>
              {cake.inStock ? (
                <Badge variant="secondary" className="text-green-600">В наличии</Badge>
              ) : (
                <Badge variant="destructive">Нет в наличии</Badge>
              )}
            </div>

            <p className="text-gray-600 mb-6">{cake.description}</p>

            {/* Размер */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Размер торта</label>
              <Select value={selectedSize} onValueChange={setSelectedSize}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {cake.sizes.map(size => (
                    <SelectItem key={size.value} value={size.value}>
                      {size.label} - {size.price}₽ ({size.weight})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Вкус */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Вариант вкуса</label>
              <Select value={selectedFlavor} onValueChange={setSelectedFlavor}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите вариант" />
                </SelectTrigger>
                <SelectContent>
                  {cake.flavors.map((flavor, index) => (
                    <SelectItem key={index} value={flavor}>
                      {flavor}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Цена и количество */}
            <div className="mb-6">
              <div className="flex items-center space-x-4 mb-4">
                {cake.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">
                    {selectedSizeData ? Math.round(selectedSizeData.price * 1.15) : cake.originalPrice}₽
                  </span>
                )}
                <span className="text-3xl font-bold text-pink-600">
                  {selectedSizeData ? selectedSizeData.price : cake.price}₽
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <span className="text-lg font-semibold">Итого: {totalPrice}₽</span>
              </div>
            </div>

            {/* Кнопки действий */}
            <div className="flex space-x-4 mb-6">
              <Button 
                className="flex-1 bg-pink-600 hover:bg-pink-700" 
                size="lg"
                disabled={!cake.inStock}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                В корзину
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setIsInWishlist(!isInWishlist)}
              >
                <Heart className={`h-5 w-5 ${isInWishlist ? 'fill-current text-red-500' : ''}`} />
              </Button>
            </div>

            {/* Особенности */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {cake.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* Информация о доставке */}
            <Card>
              <CardContent className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-blue-600" />
                    <div>
                      <div className="font-medium">Изготовление</div>
                      <div className="text-gray-600">{cake.deliveryInfo.time}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Truck className="h-4 w-4 text-blue-600" />
                    <div>
                      <div className="font-medium">Доставка</div>
                      <div className="text-gray-600">{cake.deliveryInfo.cost}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-blue-600" />
                    <div>
                      <div className="font-medium">Зона доставки</div>
                      <div className="text-gray-600">{cake.deliveryInfo.area}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Дополнительная информация */}
        <Tabs defaultValue="description" className="mb-12">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="description">Описание</TabsTrigger>
            <TabsTrigger value="ingredients">Состав</TabsTrigger>
            <TabsTrigger value="nutrition">Пищевая ценность</TabsTrigger>
            <TabsTrigger value="reviews">Отзывы ({reviews.length})</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">О торте "{cake.name}"</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {cake.description} Этот торт идеально подходит для особых случаев и станет 
                  украшением любого праздничного стола.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Наши кондитеры используют только качественные ингредиенты и традиционные 
                  рецепты, что гарантирует неповторимый вкус и свежесть каждого торта.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="ingredients" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Состав</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {cake.ingredients.map((ingredient, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                      <span>{ingredient}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Внимание:</strong> Торт содержит глютен, яйца, молочные продукты. 
                    При наличии аллергии обязательно сообщите при заказе.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="nutrition" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Пищевая ценность на 100г</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-600">{cake.nutritionPer100g.calories}</div>
                    <div className="text-sm text-gray-600">ккал</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{cake.nutritionPer100g.proteins}</div>
                    <div className="text-sm text-gray-600">белки, г</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-600">{cake.nutritionPer100g.fats}</div>
                    <div className="text-sm text-gray-600">жиры, г</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{cake.nutritionPer100g.carbs}</div>
                    <div className="text-sm text-gray-600">углеводы, г</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              {reviews.map(review => (
                <Card key={review.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Avatar>
                        <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold">{review.author}</h4>
                          {review.verified && (
                            <Badge variant="secondary" className="text-xs">Проверенный отзыв</Badge>
                          )}
                          <span className="text-gray-500 text-sm">{review.date}</span>
                        </div>
                        <div className="flex items-center mb-2">
                          {renderStars(review.rating)}
                        </div>
                        <p className="text-gray-700">{review.text}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <Card>
                <CardHeader>
                  <CardTitle>Оставить отзыв</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваша оценка</label>
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
                    <label className="block text-sm font-medium mb-2">Ваш отзыв</label>
                    <Textarea placeholder="Поделитесь впечатлениями о торте..." />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="Ваше имя" />
                    <Input type="email" placeholder="Email (не публикуется)" />
                  </div>
                  <Button className="bg-pink-600 hover:bg-pink-700">
                    Опубликовать отзыв
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Похожие торты */}
        <section>
          <h3 className="text-2xl font-bold mb-6">Похожие торты</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedCakes.map(relatedCake => (
              <Card key={relatedCake.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={relatedCake.image} 
                    alt={relatedCake.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">{relatedCake.name}</h4>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex">
                      {renderStars(Math.round(relatedCake.rating))}
                    </div>
                    <span className="text-sm text-gray-600">({relatedCake.rating})</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-pink-600">{relatedCake.price}₽</span>
                    <Link to={`/cake/${relatedCake.id}`}>
                      <Button size="sm">Подробнее</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CakeDetail;