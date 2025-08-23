import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Cake, 
  Heart, 
  Star, 
  Clock, 
  Truck, 
  Shield, 
  Users, 
  Award,
  ChefHat,
  Gift
} from 'lucide-react';

const Index = () => {
  const cakeCategories = [
    { name: 'Свадебные торты', image: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=400', price: 'от 5000₽' },
    { name: 'Детские торты', image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400', price: 'от 2500₽' },
    { name: 'Праздничные торты', image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400', price: 'от 3000₽' },
    { name: 'Корпоративные торты', image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400', price: 'от 4000₽' }
  ];

  const features = [
    { icon: <ChefHat className="h-8 w-8" />, title: 'Профессиональные кондитеры', desc: 'Опытные мастера с многолетним стажем' },
    { icon: <Clock className="h-8 w-8" />, title: 'Быстрое изготовление', desc: 'Готовим торты от 24 часов' },
    { icon: <Truck className="h-8 w-8" />, title: 'Доставка по городу', desc: 'Бесплатная доставка от 3000₽' },
    { icon: <Shield className="h-8 w-8" />, title: 'Качественные ингредиенты', desc: 'Только свежие и натуральные продукты' }
  ];

  const testimonials = [
    { name: 'Анна К.', rating: 5, text: 'Потрясающий торт на свадьбу! Гости были в восторге!' },
    { name: 'Михаил П.', rating: 5, text: 'Заказывали торт на день рождения дочки. Очень вкусно!' },
    { name: 'Елена С.', rating: 5, text: 'Профессиональный подход и отличное качество!' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Cake className="h-8 w-8 text-pink-600" />
              <h1 className="text-2xl font-bold text-gray-800">СладкиеМечты</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link to="/catalog" className="text-gray-600 hover:text-pink-600 transition-colors">Каталог</Link>
              <Link to="/about" className="text-gray-600 hover:text-pink-600 transition-colors">О нас</Link>
              <Link to="/delivery" className="text-gray-600 hover:text-pink-600 transition-colors">Доставка</Link>
              <Link to="/contacts" className="text-gray-600 hover:text-pink-600 transition-colors">Контакты</Link>
            </nav>
            <div className="flex space-x-2">
              <Link to="/cart">
                <Button variant="outline" size="sm">Корзина</Button>
              </Link>
              <Link to="/order">
                <Button size="sm" className="bg-pink-600 hover:bg-pink-700">Заказать</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Торты на заказ в Москве
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Создаем уникальные торты для ваших особенных моментов. 
            Индивидуальный дизайн, натуральные ингредиенты, доставка по городу.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/catalog">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700 px-8">
                Посмотреть каталог
              </Button>
            </Link>
            <Link to="/custom-order">
              <Button size="lg" variant="outline" className="px-8">
                Индивидуальный заказ
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 1. Категории тортов */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Наши категории</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cakeCategories.map((category, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">{category.name}</h4>
                  <Badge variant="secondary">{category.price}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Наши преимущества */}
      <section className="py-16 px-4 bg-pink-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-pink-600">
                  {feature.icon}
                </div>
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Популярные торты */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Популярные торты</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Красный бархат', price: '2800₽', image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400' },
              { name: 'Наполеон', price: '2200₽', image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400' },
              { name: 'Тирамису', price: '3200₽', image: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=400' }
            ].map((cake, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={cake.image} 
                    alt={cake.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">{cake.name}</h4>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-pink-600">{cake.price}</span>
                    <Button size="sm">В корзину</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Процесс заказа */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Как сделать заказ</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Выберите торт', desc: 'Из каталога или создайте индивидуальный дизайн' },
              { step: '2', title: 'Оформите заказ', desc: 'Укажите детали и контактную информацию' },
              { step: '3', title: 'Подтвердите заказ', desc: 'Мы свяжемся с вами для уточнения деталей' },
              { step: '4', title: 'Получите торт', desc: 'Доставим в указанное время или заберите сами' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-pink-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Отзывы клиентов */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Отзывы наших клиентов</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((review, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 font-semibold">{review.name}</span>
                </div>
                <p className="text-gray-600 italic">"{review.text}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Специальные предложения */}
      <section className="py-16 px-4 bg-pink-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Специальные предложения</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 bg-gradient-to-r from-pink-500 to-pink-600 text-white">
              <Gift className="h-12 w-12 mb-4" />
              <h4 className="text-xl font-bold mb-2">Скидка 15% на первый заказ</h4>
              <p className="mb-4">Для новых клиентов действует специальная скидка</p>
              <Button variant="secondary">Получить скидку</Button>
            </Card>
            <Card className="p-6 bg-gradient-to-r from-purple-500 to-purple-600 text-white">
              <Heart className="h-12 w-12 mb-4" />
              <h4 className="text-xl font-bold mb-2">Программа лояльности</h4>
              <p className="mb-4">Накапливайте баллы и получайте бонусы</p>
              <Button variant="secondary">Узнать больше</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* 7. Наша команда */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Наша команда</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Анна Петрова', role: 'Главный кондитер', experience: '15 лет опыта' },
              { name: 'Михаил Иванов', role: 'Декоратор тортов', experience: '10 лет опыта' },
              { name: 'Елена Сидорова', role: 'Технолог', experience: '12 лет опыта' }
            ].map((member, index) => (
              <Card key={index} className="text-center p-6">
                <div className="w-24 h-24 bg-pink-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-pink-600" />
                </div>
                <h4 className="font-semibold mb-1">{member.name}</h4>
                <p className="text-pink-600 mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.experience}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Сертификаты и награды */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Наши достижения</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: 'Лучшая кондитерская 2023', org: 'Гастрономический гид Москвы' },
              { title: 'Сертификат качества', org: 'Роспотребнадзор' },
              { title: 'Премия "Золотой торт"', org: 'Ассоциация кондитеров' },
              { title: 'ISO 22000', org: 'Международный стандарт' }
            ].map((award, index) => (
              <div key={index} className="text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-yellow-600" />
                </div>
                <h4 className="font-semibold mb-2">{award.title}</h4>
                <p className="text-gray-600 text-sm">{award.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Зона доставки */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Зона доставки</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold mb-4">Доставляем по всей Москве</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Центральный округ - бесплатно от 2000₽</li>
                <li>• Северный округ - бесплатно от 3000₽</li>
                <li>• Южный округ - бесплатно от 3000₽</li>
                <li>• Восточный округ - бесплатно от 3500₽</li>
                <li>• Западный округ - бесплатно от 3500₽</li>
              </ul>
              <Link to="/delivery">
                <Button className="mt-4">Подробнее о доставке</Button>
              </Link>
            </div>
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Карта зоны доставки</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Контакты и время работы */}
      <section className="py-16 px-4 bg-pink-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Контакты</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <Clock className="h-8 w-8 mx-auto mb-4 text-pink-600" />
              <h4 className="font-semibold mb-2">Время работы</h4>
              <p className="text-gray-600">Пн-Вс: 9:00 - 21:00</p>
              <p className="text-gray-600">Без выходных</p>
            </Card>
            <Card className="p-6 text-center">
              <Truck className="h-8 w-8 mx-auto mb-4 text-pink-600" />
              <h4 className="font-semibold mb-2">Телефон</h4>
              <p className="text-gray-600">+7 (495) 123-45-67</p>
              <p className="text-gray-600">+7 (926) 123-45-67</p>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="h-8 w-8 mx-auto mb-4 text-pink-600" />
              <h4 className="font-semibold mb-2">Адрес</h4>
              <p className="text-gray-600">г. Москва</p>
              <p className="text-gray-600">ул. Кондитерская, 15</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Cake className="h-6 w-6" />
                <h4 className="text-lg font-semibold">СладкиеМечты</h4>
              </div>
              <p className="text-gray-400 text-sm">
                Создаем незабываемые торты для ваших особенных моментов
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Каталог</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/wedding-cakes" className="hover:text-white">Свадебные торты</Link></li>
                <li><Link to="/birthday-cakes" className="hover:text-white">Детские торты</Link></li>
                <li><Link to="/holiday-cakes" className="hover:text-white">Праздничные торты</Link></li>
                <li><Link to="/corporate-cakes" className="hover:text-white">Корпоративные торты</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Услуги</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/custom-order" className="hover:text-white">Индивидуальный заказ</Link></li>
                <li><Link to="/delivery" className="hover:text-white">Доставка</Link></li>
                <li><Link to="/catering" className="hover:text-white">Кейтеринг</Link></li>
                <li><Link to="/master-classes" className="hover:text-white">Мастер-классы</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Информация</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/about" className="hover:text-white">О нас</Link></li>
                <li><Link to="/reviews" className="hover:text-white">Отзывы</Link></li>
                <li><Link to="/blog" className="hover:text-white">Блог</Link></li>
                <li><Link to="/contacts" className="hover:text-white">Контакты</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 СладкиеМечты. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;