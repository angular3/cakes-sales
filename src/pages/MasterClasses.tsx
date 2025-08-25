import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Cake, Users, Clock, Calendar, Star, ChefHat, Award, BookOpen } from 'lucide-react';

const MasterClasses = () => {
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const masterClasses = [
    {
      id: 1,
      title: 'Основы кондитерского искусства',
      description: 'Изучите базовые техники приготовления бисквитов, кремов и простого декора',
      instructor: 'Анна Петрова',
      duration: '3 часа',
      participants: '6-8 человек',
      price: 3500,
      level: 'beginner',
      type: 'group',
      image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      reviews: 45,
      nextDate: '2024-02-15',
      includes: ['Все ингредиенты', 'Рецепты', 'Готовый торт с собой', 'Сертификат'],
      popular: true
    },
    {
      id: 2,
      title: 'Декорирование тортов мастикой',
      description: 'Научитесь работать с мастикой, создавать фигурки и сложные декоративные элементы',
      instructor: 'Михаил Иванов',
      duration: '4 часа',
      participants: '4-6 человек',
      price: 4500,
      level: 'intermediate',
      type: 'group',
      image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      reviews: 32,
      nextDate: '2024-02-18',
      includes: ['Мастика разных цветов', 'Инструменты', 'Готовый торт', 'Видеоурок'],
      popular: false
    },
    {
      id: 3,
      title: 'Свадебные торты: от эскиза до воплощения',
      description: 'Полный курс по созданию многоярусных свадебных тортов с профессиональным декором',
      instructor: 'Елена Сидорова',
      duration: '6 часов',
      participants: '3-4 человека',
      price: 7500,
      level: 'advanced',
      type: 'group',
      image: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5.0,
      reviews: 28,
      nextDate: '2024-02-22',
      includes: ['Все материалы', 'Профессиональные инструменты', '3-ярусный торт', 'Мастер-класс по упаковке'],
      popular: true
    },
    {
      id: 4,
      title: 'Детские торты: яркие и веселые',
      description: 'Создание ярких детских тортов с мультяшными персонажами и игрушками',
      instructor: 'Ольга Морозова',
      duration: '3.5 часа',
      participants: '5-7 человек',
      price: 4000,
      level: 'beginner',
      type: 'group',
      image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.7,
      reviews: 38,
      nextDate: '2024-02-20',
      includes: ['Цветные кремы', 'Съедобные украшения', 'Готовый торт', 'Идеи для дома'],
      popular: false
    },
    {
      id: 5,
      title: 'Индивидуальный мастер-класс',
      description: 'Персональное обучение по выбранной теме с профессиональным кондитером',
      instructor: 'По выбору',
      duration: '2-4 часа',
      participants: '1-2 человека',
      price: 8000,
      level: 'any',
      type: 'individual',
      image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5.0,
      reviews: 15,
      nextDate: 'По договоренности',
      includes: ['Индивидуальная программа', 'Все материалы', 'Персональные рекомендации', 'Поддержка после курса'],
      popular: true
    },
    {
      id: 6,
      title: 'Французские десерты и пирожные',
      description: 'Изучение классических французских техник: макаронс, эклеры, тарты',
      instructor: 'Дмитрий Козлов',
      duration: '5 часов',
      participants: '4-6 человек',
      price: 5500,
      level: 'intermediate',
      type: 'group',
      image: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      reviews: 22,
      nextDate: '2024-02-25',
      includes: ['Французские ингредиенты', 'Профессиональные формы', 'Набор десертов', 'Рецептурник'],
      popular: false
    }
  ];

  const levels = [
    { value: 'all', label: 'Все уровни' },
    { value: 'beginner', label: 'Начинающий' },
    { value: 'intermediate', label: 'Средний' },
    { value: 'advanced', label: 'Продвинутый' },
    { value: 'any', label: 'Любой уровень' }
  ];

  const types = [
    { value: 'all', label: 'Все типы' },
    { value: 'group', label: 'Групповые' },
    { value: 'individual', label: 'Индивидуальные' }
  ];

  const instructors = [
    {
      name: 'Анна Петрова',
      specialization: 'Классические торты',
      experience: '15 лет',
      image: 'AP'
    },
    {
      name: 'Михаил Иванов',
      specialization: 'Декорирование',
      experience: '10 лет',
      image: 'МИ'
    },
    {
      name: 'Елена Сидорова',
      specialization: 'Свадебные торты',
      experience: '12 лет',
      image: 'ЕС'
    }
  ];

  const filteredClasses = masterClasses.filter(masterClass => {
    const matchesLevel = selectedLevel === 'all' || masterClass.level === selectedLevel;
    const matchesType = selectedType === 'all' || masterClass.type === selectedType;
    return matchesLevel && matchesType;
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
              <Link to="/master-classes" className="text-pink-600 font-semibold">Мастер-классы</Link>
              <Link to="/contacts" className="text-gray-600 hover:text-pink-600 transition-colors">Контакты</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-6">
            <ChefHat className="h-16 w-16 text-indigo-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Мастер-классы по кондитерскому искусству</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Научитесь создавать профессиональные торты под руководством опытных кондитеров. 
            От базовых навыков до сложных техник декорирования.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Фильтры */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Уровень сложности</label>
              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {levels.map(level => (
                    <SelectItem key={level.value} value={level.value}>
                      {level.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Тип занятия</label>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {types.map(type => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button variant="outline" className="w-full">
                Сбросить фильтры
              </Button>
            </div>
          </div>
        </div>

        {/* Мастер-классы */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredClasses.map(masterClass => (
            <Card key={masterClass.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={masterClass.image} 
                  alt={masterClass.title}
                  className="w-full h-full object-cover"
                />
                {masterClass.popular && (
                  <Badge className="absolute top-2 left-2 bg-indigo-600">Популярный</Badge>
                )}
                <div className="absolute top-2 right-2">
                  <Badge variant="secondary">{masterClass.type === 'group' ? 'Групповой' : 'Индивидуальный'}</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">{masterClass.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{masterClass.description}</p>
                
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <ChefHat className="h-4 w-4 text-indigo-600" />
                    <span>{masterClass.instructor}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-indigo-600" />
                    <span>{masterClass.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-indigo-600" />
                    <span>{masterClass.participants}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-indigo-600" />
                    <span>{masterClass.nextDate}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex">
                    {renderStars(Math.round(masterClass.rating))}
                  </div>
                  <span className="text-sm text-gray-600">({masterClass.reviews})</span>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-gray-600 mb-2">В стоимость включено:</p>
                  <div className="flex flex-wrap gap-1">
                    {masterClass.includes.slice(0, 2).map((item, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                    {masterClass.includes.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{masterClass.includes.length - 2} еще
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-indigo-600">{masterClass.price}₽</span>
                  <Button className="bg-indigo-600 hover:bg-indigo-700">
                    Записаться
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Наши инструкторы */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Наши инструкторы</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <Card key={index} className="text-center p-6">
                <div className="w-24 h-24 bg-indigo-100 rounded-full mx-auto mb-4 flex items-center justify-center text-indigo-600 text-xl font-bold">
                  {instructor.image}
                </div>
                <h4 className="font-semibold text-lg mb-2">{instructor.name}</h4>
                <p className="text-indigo-600 mb-2">{instructor.specialization}</p>
                <p className="text-gray-600 text-sm">Опыт: {instructor.experience}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Преимущества наших мастер-классов */}
        <section className="mb-16 bg-white rounded-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Почему выбирают наши мастер-классы</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Award className="h-8 w-8" />,
                title: 'Профессиональные инструкторы',
                description: 'Опытные кондитеры с многолетним стажем'
              },
              {
                icon: <BookOpen className="h-8 w-8" />,
                title: 'Полная программа',
                description: 'От теории до практики с готовым результатом'
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: 'Малые группы',
                description: 'Индивидуальный подход к каждому участнику'
              },
              {
                icon: <Cake className="h-8 w-8" />,
                title: 'Все включено',
                description: 'Ингредиенты, инструменты и готовый торт с собой'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600">
                  {benefit.icon}
                </div>
                <h4 className="font-semibold mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Форма записи */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Записаться на мастер-класс</h3>
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
                <div>
                  <label className="block text-sm font-medium mb-2">Выберите мастер-класс *</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите мастер-класс" />
                    </SelectTrigger>
                    <SelectContent>
                      {masterClasses.map(masterClass => (
                        <SelectItem key={masterClass.id} value={masterClass.id.toString()}>
                          {masterClass.title} - {masterClass.price}₽
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Комментарий</label>
                  <Textarea 
                    placeholder="Ваши пожелания или вопросы..."
                    className="min-h-[100px]"
                  />
                </div>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700" size="lg">
                  Записаться на мастер-класс
                </Button>
              </form>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Что вас ждет</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-100 p-2 rounded-lg">
                    <BookOpen className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Теоретическая часть</h4>
                    <p className="text-gray-600 text-sm">
                      Изучение основ, секретов и профессиональных хитростей
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-100 p-2 rounded-lg">
                    <ChefHat className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Практическая работа</h4>
                    <p className="text-gray-600 text-sm">
                      Создание торта под руководством опытного кондитера
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-100 p-2 rounded-lg">
                    <Cake className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Готовый результат</h4>
                    <p className="text-gray-600 text-sm">
                      Красивый торт, который вы заберете с собой
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-100 p-2 rounded-lg">
                    <Award className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Сертификат</h4>
                    <p className="text-gray-600 text-sm">
                      Именной сертификат о прохождении мастер-класса
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Призыв к действию */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Начните свой путь в кондитерском искусстве!</h3>
          <p className="mb-6 opacity-90">
            Присоединяйтесь к нашим мастер-классам и откройте для себя мир профессионального кондитерского мастерства
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Выбрать мастер-класс
            </Button>
            <Link to="/contacts">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-indigo-600">
                Задать вопрос
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterClasses;