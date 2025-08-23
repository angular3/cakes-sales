import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Cake, 
  Users, 
  Award, 
  Clock, 
  Heart, 
  Star,
  ChefHat,
  Shield,
  Target,
  Lightbulb
} from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Анна Петрова',
      role: 'Главный кондитер и основатель',
      experience: '15 лет опыта',
      description: 'Выпускница Кулинарной академии, специализируется на авторских тортах',
      achievements: ['Лучший кондитер Москвы 2022', 'Автор 3 кулинарных книг']
    },
    {
      name: 'Михаил Иванов',
      role: 'Декоратор тортов',
      experience: '10 лет опыта',
      description: 'Художник по образованию, создает уникальные дизайны тортов',
      achievements: ['Победитель конкурса "Золотой торт"', 'Мастер сахарных цветов']
    },
    {
      name: 'Елена Сидорова',
      role: 'Технолог производства',
      experience: '12 лет опыта',
      description: 'Контролирует качество продукции и разрабатывает новые рецепты',
      achievements: ['Сертификат ISO 22000', 'Эксперт по пищевой безопасности']
    },
    {
      name: 'Дмитрий Козлов',
      role: 'Шеф-кондитер',
      experience: '8 лет опыта',
      description: 'Специалист по французской кондитерской школе',
      achievements: ['Стажировка в Париже', 'Мастер макаронс']
    }
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Любовь к делу',
      description: 'Каждый торт мы создаем с душой и вниманием к деталям'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Качество',
      description: 'Используем только натуральные ингредиенты высшего качества'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Индивидуальность',
      description: 'Каждый заказ уникален и создается под конкретного клиента'
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Инновации',
      description: 'Постоянно изучаем новые техники и следим за трендами'
    }
  ];

  const milestones = [
    { year: '2015', event: 'Основание кондитерской "СладкиеМечты"' },
    { year: '2017', event: 'Открытие собственного производства' },
    { year: '2019', event: 'Запуск службы доставки по Москве' },
    { year: '2021', event: 'Получение премии "Лучшая кондитерская года"' },
    { year: '2022', event: 'Расширение команды до 15 специалистов' },
    { year: '2023', event: 'Открытие мастер-классов для клиентов' },
    { year: '2024', event: 'Более 5000 довольных клиентов' }
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
              <Link to="/about" className="text-pink-600 font-semibold">О нас</Link>
              <Link to="/contacts" className="text-gray-600 hover:text-pink-600 transition-colors">Контакты</Link>
            </nav>
            <Link to="/order">
              <Button className="bg-pink-600 hover:bg-pink-700">Заказать торт</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">О нашей кондитерской</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            "СладкиеМечты" — это семейная кондитерская, которая уже 9 лет создает незабываемые торты 
            для особенных моментов в жизни наших клиентов. Мы верим, что каждый торт должен быть 
            не только вкусным, но и красивым произведением искусства.
          </p>
        </div>
      </section>

      {/* Наша история */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Наша история</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6">
                Все началось в 2015 году, когда Анна Петрова, выпускница Кулинарной академии, 
                решила воплотить свою мечту о создании идеальных тортов. Начав с небольшой домашней 
                кондитерской, она постепенно собрала команду единомышленников.
              </p>
              <p className="text-gray-600 mb-6">
                Сегодня "СладкиеМечты" — это современное производство с командой из 15 профессионалов, 
                собственной службой доставки и тысячами довольных клиентов по всей Москве.
              </p>
              <p className="text-gray-600">
                Мы гордимся тем, что каждый наш торт создается вручную с использованием только 
                натуральных ингредиентов высшего качества.
              </p>
            </div>
            <div className="bg-pink-50 p-8 rounded-lg">
              <h4 className="text-xl font-semibold mb-6">Ключевые вехи</h4>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <Badge variant="secondary" className="mt-1">{milestone.year}</Badge>
                    <p className="text-gray-600">{milestone.event}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Наши ценности */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Наши ценности</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-pink-600">
                  {value.icon}
                </div>
                <h4 className="font-semibold mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Наша команда */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Наша команда</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <ChefHat className="h-10 w-10 text-pink-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-1">{member.name}</h4>
                    <p className="text-pink-600 mb-2">{member.role}</p>
                    <Badge variant="outline" className="mb-3">{member.experience}</Badge>
                    <p className="text-gray-600 text-sm mb-3">{member.description}</p>
                    <div className="space-y-1">
                      {member.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <Star className="h-3 w-3 text-yellow-500" />
                          <span className="text-xs text-gray-500">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Наши достижения */}
      <section className="py-16 px-4 bg-pink-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Наши достижения</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-pink-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                5000+
              </div>
              <h4 className="font-semibold mb-2">Довольных клиентов</h4>
              <p className="text-gray-600 text-sm">За все время работы</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                15
              </div>
              <h4 className="font-semibold mb-2">Специалистов в команде</h4>
              <p className="text-gray-600 text-sm">Профессиональные кондитеры</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                9
              </div>
              <h4 className="font-semibold mb-2">Лет на рынке</h4>
              <p className="text-gray-600 text-sm">Опыт и надежность</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                100+
              </div>
              <h4 className="font-semibold mb-2">Видов тортов</h4>
              <p className="text-gray-600 text-sm">В нашем ассортименте</p>
            </div>
          </div>
        </div>
      </section>

      {/* Качество и сертификаты */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Качество и безопасность</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-xl font-semibold mb-4">Наши стандарты качества</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-pink-600 mt-0.5 flex-shrink-0" />
                  <span>Сертификат соответствия ГОСТ Р</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-pink-600 mt-0.5 flex-shrink-0" />
                  <span>Система менеджмента качества ISO 22000</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-pink-600 mt-0.5 flex-shrink-0" />
                  <span>Регулярные проверки Роспотребнадзора</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-pink-600 mt-0.5 flex-shrink-0" />
                  <span>Контроль качества на каждом этапе производства</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-pink-600 mt-0.5 flex-shrink-0" />
                  <span>Использование только натуральных ингредиентов</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Сертификат качества ГОСТ Р',
                'ISO 22000:2018',
                'Премия "Лучшая кондитерская"',
                'Сертификат пищевой безопасности'
              ].map((cert, index) => (
                <Card key={index} className="p-4 text-center">
                  <Award className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">{cert}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Готовы создать ваш идеальный торт?</h3>
          <p className="text-xl mb-8 opacity-90">
            Доверьте нам создание торта для вашего особенного события
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/catalog">
              <Button size="lg" variant="secondary" className="px-8">
                Посмотреть каталог
              </Button>
            </Link>
            <Link to="/custom-order">
              <Button size="lg" variant="outline" className="px-8 text-white border-white hover:bg-white hover:text-pink-600">
                Индивидуальный заказ
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;