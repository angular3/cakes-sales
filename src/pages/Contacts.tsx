import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Cake, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Instagram,
  Facebook,
  Send
} from 'lucide-react';

const Contacts = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Телефоны',
      details: ['+7 (495) 123-45-67', '+7 (926) 123-45-67'],
      description: 'Звоните ежедневно с 9:00 до 21:00'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      details: ['info@sladkiemechty.ru', 'orders@sladkiemechty.ru'],
      description: 'Отвечаем в течение 2 часов'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Адрес',
      details: ['г. Москва, ул. Кондитерская, 15'],
      description: 'Метро "Кондитерская", 3 минуты пешком'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Режим работы',
      details: ['Пн-Вс: 9:00 - 21:00'],
      description: 'Работаем без выходных и праздников'
    }
  ];

  const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, name: 'Instagram', handle: '@sladkiemechty', followers: '15.2K' },
    { icon: <Facebook className="h-5 w-5" />, name: 'Facebook', handle: 'СладкиеМечты', followers: '8.5K' },
    { icon: <MessageCircle className="h-5 w-5" />, name: 'Telegram', handle: '@sladkiemechty_bot', followers: '3.2K' }
  ];

  const departments = [
    {
      name: 'Отдел заказов',
      phone: '+7 (495) 123-45-67',
      email: 'orders@sladkiemechty.ru',
      description: 'Оформление заказов, консультации по тортам'
    },
    {
      name: 'Служба доставки',
      phone: '+7 (495) 123-45-68',
      email: 'delivery@sladkiemechty.ru',
      description: 'Вопросы по доставке, изменение адреса'
    },
    {
      name: 'Индивидуальные заказы',
      phone: '+7 (495) 123-45-69',
      email: 'custom@sladkiemechty.ru',
      description: 'Эксклюзивные торты, сложные дизайны'
    },
    {
      name: 'Корпоративные клиенты',
      phone: '+7 (495) 123-45-70',
      email: 'corporate@sladkiemechty.ru',
      description: 'Оптовые заказы, корпоративные мероприятия'
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
              <Link to="/delivery" className="text-gray-600 hover:text-pink-600 transition-colors">Доставка</Link>
              <Link to="/contacts" className="text-pink-600 font-semibold">Контакты</Link>
            </nav>
            <Link to="/order">
              <Button className="bg-pink-600 hover:bg-pink-700">Заказать торт</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Свяжитесь с нами</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы всегда готовы ответить на ваши вопросы и помочь с выбором идеального торта. 
            Свяжитесь с нами удобным способом.
          </p>
        </div>
      </section>

      {/* Основные контакты */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Основные контакты</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-pink-600">
                  {contact.icon}
                </div>
                <h4 className="font-semibold mb-3">{contact.title}</h4>
                <div className="space-y-1 mb-3">
                  {contact.details.map((detail, i) => (
                    <p key={i} className="text-gray-800 font-medium">{detail}</p>
                  ))}
                </div>
                <p className="text-gray-600 text-sm">{contact.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Отделы */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Специализированные отделы</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{dept.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-pink-600" />
                      <span className="font-medium">{dept.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-pink-600" />
                      <span className="font-medium">{dept.email}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{dept.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Форма обратной связи */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-6">Напишите нам</h3>
              <p className="text-gray-600 mb-8">
                Заполните форму, и мы свяжемся с вами в течение 2 часов. 
                Или позвоните нам прямо сейчас для быстрой консультации.
              </p>
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
                  <label className="block text-sm font-medium mb-2">Тема обращения</label>
                  <Input placeholder="Например: Вопрос по заказу торта" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение *</label>
                  <Textarea 
                    placeholder="Опишите ваш вопрос или пожелания..."
                    className="min-h-[120px]"
                  />
                </div>
                <Button className="w-full bg-pink-600 hover:bg-pink-700">
                  <Send className="h-4 w-4 mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6">Как нас найти</h3>
              <div className="bg-gray-200 h-64 rounded-lg mb-6 flex items-center justify-center">
                <p className="text-gray-500">Интерактивная карта</p>
              </div>
              <Card className="p-6">
                <h4 className="font-semibold mb-4">Проезд к кондитерской</h4>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-pink-600 mt-0.5 flex-shrink-0" />
                    <span>г. Москва, ул. Кондитерская, 15</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-pink-600 font-medium">Метро:</span>
                    <span>"Кондитерская" (3 минуты пешком)</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-pink-600 font-medium">Автобус:</span>
                    <span>№15, 32, 45 (остановка "Сладкая улица")</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-pink-600 font-medium">Парковка:</span>
                    <span>Бесплатная парковка рядом со зданием</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Социальные сети */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Мы в социальных сетях</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialLinks.map((social, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-pink-600">
                  {social.icon}
                </div>
                <h4 className="font-semibold mb-2">{social.name}</h4>
                <p className="text-gray-600 mb-2">{social.handle}</p>
                <p className="text-sm text-gray-500">{social.followers} подписчиков</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Подписывайтесь на наши социальные сети, чтобы быть в курсе новинок и акций!
            </p>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="sm">Подписаться в Instagram</Button>
              <Button variant="outline" size="sm">Подписаться в Facebook</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Часто задаваемые вопросы */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Часто задаваемые вопросы</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="p-6">
                <h4 className="font-semibold mb-2">Как быстро можно получить торт?</h4>
                <p className="text-gray-600 text-sm">
                  Минимальное время изготовления - 24 часа. Сложные торты требуют 48-72 часа.
                </p>
              </Card>
              <Card className="p-6">
                <h4 className="font-semibold mb-2">Можно ли изменить заказ?</h4>
                <p className="text-gray-600 text-sm">
                  Изменения возможны до начала изготовления торта. Свяжитесь с нами как можно раньше.
                </p>
              </Card>
              <Card className="p-6">
                <h4 className="font-semibold mb-2">Есть ли торты для диабетиков?</h4>
                <p className="text-gray-600 text-sm">
                  Да, у нас есть специальная линейка тортов без сахара и с натуральными подсластителями.
                </p>
              </Card>
            </div>
            <div className="space-y-6">
              <Card className="p-6">
                <h4 className="font-semibold mb-2">Какие способы оплаты доступны?</h4>
                <p className="text-gray-600 text-sm">
                  Наличными, картой при получении, онлайн-оплата на сайте, банковский перевод.
                </p>
              </Card>
              <Card className="p-6">
                <h4 className="font-semibold mb-2">Доставляете ли в область?</h4>
                <p className="text-gray-600 text-sm">
                  Доставка в ближайшее Подмосковье возможна. Стоимость рассчитывается индивидуально.
                </p>
              </Card>
              <Card className="p-6">
                <h4 className="font-semibold mb-2">Можно ли посмотреть производство?</h4>
                <p className="text-gray-600 text-sm">
                  Мы проводим экскурсии по производству по предварительной записи.
                </p>
              </Card>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Не нашли ответ на свой вопрос?</p>
            <Link to="/faq">
              <Button variant="outline">Посмотреть все вопросы</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Готовы сделать заказ?</h3>
          <p className="text-xl mb-8 opacity-90">
            Свяжитесь с нами любым удобным способом или оформите заказ онлайн
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8">
              <Phone className="h-4 w-4 mr-2" />
              Позвонить сейчас
            </Button>
            <Link to="/order">
              <Button size="lg" variant="outline" className="px-8 text-white border-white hover:bg-white hover:text-pink-600">
                Заказать онлайн
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;