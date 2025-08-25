import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Cake, Palette, Users, Calendar, Upload, CheckCircle, Star } from 'lucide-react';

const CustomOrder = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    cakeType: '',
    size: '',
    flavor: '',
    design: '',
    occasion: '',
    servings: '',
    date: '',
    budget: '',
    name: '',
    phone: '',
    email: '',
    description: '',
    additionalServices: []
  });

  const cakeTypes = [
    { value: 'classic', label: 'Классический торт' },
    { value: 'wedding', label: 'Свадебный торт' },
    { value: 'birthday', label: 'Торт на день рождения' },
    { value: 'corporate', label: 'Корпоративный торт' },
    { value: 'holiday', label: 'Праздничный торт' },
    { value: 'custom', label: 'Полностью индивидуальный' }
  ];

  const flavors = [
    'Ванильный бисквит',
    'Шоколадный',
    'Красный бархат',
    'Морковный',
    'Лимонный',
    'Кокосовый',
    'Тирамису',
    'Чизкейк',
    'Фруктовый',
    'Медовик'
  ];

  const designStyles = [
    'Минимализм',
    'Классический',
    'Современный',
    'Винтажный',
    'Рустик',
    'Гламур',
    'Детский',
    'Тематический'
  ];

  const additionalServices = [
    { id: 'delivery', label: 'Доставка', price: 500 },
    { id: 'setup', label: 'Установка на месте', price: 300 },
    { id: 'candles', label: 'Свечи и декор', price: 200 },
    { id: 'photo', label: 'Фотосъемка торта', price: 1000 },
    { id: 'tasting', label: 'Дегустация', price: 0 },
    { id: 'consultation', label: 'Консультация дизайнера', price: 0 }
  ];

  const portfolio = [
    {
      image: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Свадебный торт "Элегантность"',
      description: 'Трёхъярусный торт с живыми цветами'
    },
    {
      image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Детский торт "Единорог"',
      description: 'Яркий торт с фигуркой единорога'
    },
    {
      image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Корпоративный торт',
      description: 'Торт с логотипом компании'
    }
  ];

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleServiceChange = (serviceId, checked) => {
    setFormData(prev => ({
      ...prev,
      additionalServices: checked 
        ? [...prev.additionalServices, serviceId]
        : prev.additionalServices.filter(id => id !== serviceId)
    }));
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
              <Link to="/custom-order" className="text-pink-600 font-semibold">Индивидуальный заказ</Link>
              <Link to="/contacts" className="text-gray-600 hover:text-pink-600 transition-colors">Контакты</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Palette className="h-16 w-16 text-pink-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Индивидуальный заказ торта</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Создайте торт своей мечты! Наши кондитеры воплотят любую вашу идею в жизнь. 
            Уникальный дизайн, любимые вкусы, идеальный размер.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Прогресс */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= stepNumber ? 'bg-pink-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {step > stepNumber ? <CheckCircle className="h-5 w-5" /> : stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div className={`w-16 h-1 ${step > stepNumber ? 'bg-pink-600' : 'bg-gray-200'}`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Шаг {step} из 3: {
                  step === 1 ? 'Параметры торта' :
                  step === 2 ? 'Дизайн и детали' :
                  'Контактная информация'
                }
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Форма заказа */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold mb-6">Основные параметры торта</h3>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Тип торта *</label>
                    <Select value={formData.cakeType} onValueChange={(value) => setFormData({...formData, cakeType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите тип торта" />
                      </SelectTrigger>
                      <SelectContent>
                        {cakeTypes.map(type => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Количество порций *</label>
                      <Input 
                        type="number" 
                        placeholder="10" 
                        value={formData.servings}
                        onChange={(e) => setFormData({...formData, servings: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Дата мероприятия *</label>
                      <Input 
                        type="date" 
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Основной вкус *</label>
                    <Select value={formData.flavor} onValueChange={(value) => setFormData({...formData, flavor: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите вкус" />
                      </SelectTrigger>
                      <SelectContent>
                        {flavors.map(flavor => (
                          <SelectItem key={flavor} value={flavor}>
                            {flavor}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Повод для торта</label>
                    <Input 
                      placeholder="День рождения, свадьба, юбилей..." 
                      value={formData.occasion}
                      onChange={(e) => setFormData({...formData, occasion: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Примерный бюджет</label>
                    <Select value={formData.budget} onValueChange={(value) => setFormData({...formData, budget: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите диапазон" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3000-5000">3 000 - 5 000 ₽</SelectItem>
                        <SelectItem value="5000-8000">5 000 - 8 000 ₽</SelectItem>
                        <SelectItem value="8000-12000">8 000 - 12 000 ₽</SelectItem>
                        <SelectItem value="12000-20000">12 000 - 20 000 ₽</SelectItem>
                        <SelectItem value="20000+">Более 20 000 ₽</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold mb-6">Дизайн и дополнительные услуги</h3>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Стиль дизайна</label>
                    <Select value={formData.design} onValueChange={(value) => setFormData({...formData, design: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите стиль" />
                      </SelectTrigger>
                      <SelectContent>
                        {designStyles.map(style => (
                          <SelectItem key={style} value={style}>
                            {style}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Описание желаемого дизайна</label>
                    <Textarea 
                      placeholder="Опишите, как должен выглядеть ваш торт: цвета, декор, надписи, фигурки..."
                      className="min-h-[120px]"
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-4">Загрузить референсы</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600">Перетащите изображения сюда или нажмите для выбора</p>
                      <p className="text-xs text-gray-500 mt-1">PNG, JPG до 10MB</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-4">Дополнительные услуги</label>
                    <div className="space-y-3">
                      {additionalServices.map(service => (
                        <div key={service.id} className="flex items-center space-x-3">
                          <Checkbox 
                            id={service.id}
                            checked={formData.additionalServices.includes(service.id)}
                            onCheckedChange={(checked) => handleServiceChange(service.id, checked)}
                          />
                          <label htmlFor={service.id} className="flex-1 text-sm">
                            {service.label}
                            {service.price > 0 && (
                              <span className="text-gray-500 ml-2">+{service.price}₽</span>
                            )}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Имя *</label>
                      <Input 
                        placeholder="Ваше имя" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон *</label>
                      <Input 
                        placeholder="+7 (___) ___-__-__" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input 
                      type="email" 
                      placeholder="your@email.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-4">Сводка заказа</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Тип торта:</span>
                        <span>{cakeTypes.find(t => t.value === formData.cakeType)?.label || 'Не выбрано'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Количество порций:</span>
                        <span>{formData.servings || 'Не указано'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Вкус:</span>
                        <span>{formData.flavor || 'Не выбрано'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Дата:</span>
                        <span>{formData.date || 'Не указана'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Бюджет:</span>
                        <span>{formData.budget || 'Не указан'}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Что дальше?</strong> После отправки заявки наш менеджер свяжется с вами 
                      в течение 2 часов для уточнения деталей и расчета стоимости.
                    </p>
                  </div>
                </div>
              )}

              {/* Кнопки навигации */}
              <div className="flex justify-between mt-8">
                <Button 
                  variant="outline" 
                  onClick={prevStep}
                  disabled={step === 1}
                >
                  Назад
                </Button>
                {step < 3 ? (
                  <Button onClick={nextStep} className="bg-pink-600 hover:bg-pink-700">
                    Далее
                  </Button>
                ) : (
                  <Button className="bg-pink-600 hover:bg-pink-700">
                    Отправить заявку
                  </Button>
                )}
              </div>
            </Card>
          </div>

          {/* Боковая панель */}
          <div className="space-y-6">
            {/* Портфолио */}
            <Card className="p-6">
              <h4 className="font-semibold mb-4">Наши работы</h4>
              <div className="space-y-4">
                {portfolio.map((work, index) => (
                  <div key={index} className="flex space-x-3">
                    <img 
                      src={work.image} 
                      alt={work.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <h5 className="font-medium text-sm">{work.title}</h5>
                      <p className="text-xs text-gray-600">{work.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/reviews">
                <Button variant="outline" size="sm" className="w-full mt-4">
                  Посмотреть все работы
                </Button>
              </Link>
            </Card>

            {/* Гарантии */}
            <Card className="p-6">
              <h4 className="font-semibold mb-4">Наши гарантии</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span className="text-sm">Бесплатная консультация и эскиз</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span className="text-sm">Возможность внесения изменений</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span className="text-sm">Гарантия качества и свежести</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span className="text-sm">Точная доставка в срок</span>
                </div>
              </div>
            </Card>

            {/* Контакты */}
            <Card className="p-6">
              <h4 className="font-semibold mb-4">Нужна помощь?</h4>
              <p className="text-sm text-gray-600 mb-4">
                Наши консультанты помогут определиться с выбором
              </p>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full">
                  Позвонить: +7 (495) 123-45-67
                </Button>
                <Button variant="outline" size="sm" className="w-full">
                  Написать в WhatsApp
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomOrder;