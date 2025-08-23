import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Cake, 
  Truck, 
  Clock, 
  MapPin, 
  Phone, 
  Shield,
  CreditCard,
  Calendar,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const Delivery = () => {
  const deliveryZones = [
    { zone: 'Центральный округ', minOrder: 2000, deliveryFee: 0, time: '2-4 часа' },
    { zone: 'Северный округ', minOrder: 3000, deliveryFee: 0, time: '3-5 часов' },
    { zone: 'Южный округ', minOrder: 3000, deliveryFee: 0, time: '3-5 часов' },
    { zone: 'Восточный округ', minOrder: 3500, deliveryFee: 0, time: '4-6 часов' },
    { zone: 'Западный округ', minOrder: 3500, deliveryFee: 0, time: '4-6 часов' },
    { zone: 'Северо-Восточный округ', minOrder: 4000, deliveryFee: 300, time: '5-7 часов' },
    { zone: 'Северо-Западный округ', minOrder: 4000, deliveryFee: 300, time: '5-7 часов' },
    { zone: 'Юго-Восточный округ', minOrder: 4000, deliveryFee: 300, time: '5-7 часов' },
    { zone: 'Юго-Западный округ', minOrder: 4000, deliveryFee: 300, time: '5-7 часов' },
    { zone: 'Зеленоградский округ', minOrder: 5000, deliveryFee: 500, time: '6-8 часов' },
    { zone: 'Троицкий округ', minOrder: 5000, deliveryFee: 500, time: '6-8 часов' },
    { zone: 'Новомосковский округ', minOrder: 5000, deliveryFee: 500, time: '6-8 часов' }
  ];

  const deliveryRules = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Время доставки',
      description: 'Доставляем ежедневно с 9:00 до 21:00. Точное время согласовывается при заказе.'
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: 'Предварительный заказ',
      description: 'Минимальное время изготовления торта - 24 часа. Сложные заказы - от 48 часов.'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Гарантия качества',
      description: 'Торты доставляются в специальных термоконтейнерах для сохранения свежести.'
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: 'Способы оплаты',
      description: 'Наличными курьеру, картой при получении или онлайн-оплата на сайте.'
    }
  ];

  const deliverySteps = [
    {
      step: '1',
      title: 'Оформление заказа',
      description: 'Выберите торт и укажите адрес доставки'
    },
    {
      step: '2',
      title: 'Подтверждение',
      description: 'Мы свяжемся с вами для уточнения деталей'
    },
    {
      step: '3',
      title: 'Изготовление',
      description: 'Наши кондитеры создают ваш торт'
    },
    {
      step: '4',
      title: 'Доставка',
      description: 'Курьер доставит торт в указанное время'
    }
  ];

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
              <Link to="/about" className="text-gray-600 hover:text-pink-600 transition-colors">О нас</Link>
              <Link to="/delivery" className="text-pink-600 font-semibold">Доставка</Link>
              <Link to="/contacts" className="text-gray-600 hover:text-pink-600 transition-colors">Контакты</Link>
            </nav>
            <Link to="/order">
              <Button className="bg-pink-600 hover:bg-pink-700">Заказать торт</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto text-center">
          <Truck className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Доставка тортов по Москве</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Быстрая и надежная доставка свежих тортов прямо к вашему порогу. 
            Работаем ежедневно с 9:00 до 21:00.
          </p>
        </div>
      </section>

      {/* Зоны доставки */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Зоны доставки</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliveryZones.map((zone, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                    {zone.zone}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Минимальный заказ:</span>
                      <Badge variant="secondary">{zone.minOrder}₽</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Стоимость доставки:</span>
                      <Badge variant={zone.deliveryFee === 0 ? "default" : "outline"}>
                        {zone.deliveryFee === 0 ? 'Бесплатно' : `${zone.deliveryFee}₽`}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Время доставки:</span>
                      <span className="text-sm font-medium">{zone.time}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Условия доставки */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Условия доставки</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deliveryRules.map((rule, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {rule.icon}
                </div>
                <h4 className="font-semibold mb-3">{rule.title}</h4>
                <p className="text-gray-600 text-sm">{rule.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Процесс доставки */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Как происходит доставка</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {deliverySteps.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Важная информация */}
      <section className="py-16 px-4 bg-yellow-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Важная информация</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Что входит в доставку</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Бережная транспортировка в термоконтейнере</li>
                    <li>• Подъем на этаж (до 5 этажа без лифта)</li>
                    <li>• Установка торта на место</li>
                    <li>• Инструкции по хранению</li>
                    <li>• Одноразовая посуда (по запросу)</li>
                  </ul>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <AlertCircle className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Обратите внимание</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Доставка только по предварительному заказу</li>
                    <li>• Точное время доставки согласовывается заранее</li>
                    <li>• При отсутствии клиента торт хранится у курьера 30 минут</li>
                    <li>• Возможна доставка в офисы и на мероприятия</li>
                    <li>• Специальные условия для корпоративных клиентов</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Контакты службы доставки */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Служба доставки</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <Phone className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Горячая линия</h4>
              <p className="text-gray-600 mb-2">+7 (495) 123-45-67</p>
              <p className="text-sm text-gray-500">Ежедневно с 9:00 до 21:00</p>
            </Card>
            <Card className="p-6 text-center">
              <Clock className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Время работы</h4>
              <p className="text-gray-600 mb-2">9:00 - 21:00</p>
              <p className="text-sm text-gray-500">Без выходных и праздников</p>
            </Card>
            <Card className="p-6 text-center">
              <Truck className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Автопарк</h4>
              <p className="text-gray-600 mb-2">5 автомобилей</p>
              <p className="text-sm text-gray-500">Специально оборудованных</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Самовывоз */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Самовывоз</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-xl font-semibold mb-4">Забирайте заказы сами и экономьте</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Скидка 5% при самовывозе</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Удобная парковка рядом с кондитерской</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Возможность посмотреть торт перед получением</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Консультация кондитера при получении</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h5 className="font-semibold mb-2">Адрес кондитерской:</h5>
                <p className="text-gray-600">г. Москва, ул. Кондитерская, 15</p>
                <p className="text-gray-600">Режим работы: Пн-Вс 9:00-21:00</p>
              </div>
            </div>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Карта проезда к кондитерской</p>
            </div>
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Готовы оформить заказ?</h3>
          <p className="text-xl mb-8 opacity-90">
            Выберите торт и мы доставим его в удобное для вас время
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/catalog">
              <Button size="lg" variant="secondary" className="px-8">
                Выбрать торт
              </Button>
            </Link>
            <Link to="/order">
              <Button size="lg" variant="outline" className="px-8 text-white border-white hover:bg-white hover:text-blue-600">
                Оформить заказ
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Delivery;