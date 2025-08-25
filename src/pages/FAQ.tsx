import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Cake, Search, HelpCircle, Phone, Mail, MessageCircle, Clock } from 'lucide-react';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqData = [
    {
      id: 1,
      question: 'Как быстро можно получить торт?',
      answer: 'Минимальное время изготовления торта составляет 24 часа. Для сложных дизайнов и многоярусных тортов требуется 48-72 часа. В праздничные дни рекомендуем заказывать заранее.',
      category: 'Заказ',
      popular: true
    },
    {
      id: 2,
      question: 'Можно ли изменить или отменить заказ?',
      answer: 'Изменения в заказе возможны до начала изготовления торта. Отмена заказа возможна не позднее чем за 12 часов до начала изготовления. При отмене менее чем за 12 часов взимается 50% стоимости.',
      category: 'Заказ',
      popular: true
    },
    {
      id: 3,
      question: 'Какие способы оплаты вы принимаете?',
      answer: 'Мы принимаем: наличные при получении, банковские карты (Visa, MasterCard, МИР), онлайн-оплату на сайте, банковский перевод для юридических лиц.',
      category: 'Оплата',
      popular: true
    },
    {
      id: 4,
      question: 'Доставляете ли вы торты?',
      answer: 'Да, мы доставляем торты по Москве и ближайшему Подмосковью. Стоимость доставки от 500₽, бесплатная доставка при заказе от 3000₽. Доставка осуществляется в специальных термоконтейнерах.',
      category: 'Доставка',
      popular: true
    },
    {
      id: 5,
      question: 'Есть ли торты для людей с аллергией?',
      answer: 'Да, мы можем приготовить торты без глютена, без молочных продуктов, без яиц, без орехов. Обязательно сообщите о ваших ограничениях при заказе.',
      category: 'Ингредиенты',
      popular: false
    },
    {
      id: 6,
      question: 'Можно ли заказать торт с индивидуальным дизайном?',
      answer: 'Конечно! Мы специализируемся на индивидуальных заказах. Вы можете предоставить свой эскиз или описать желаемый дизайн, и наши кондитеры воплотят вашу идею в жизнь.',
      category: 'Дизайн',
      popular: true
    },
    {
      id: 7,
      question: 'Сколько хранится торт?',
      answer: 'Торты с масляным кремом хранятся в холодильнике до 3 дней, с творожным кремом - до 2 дней, бисквитные торты - до 5 дней. Рекомендуем употреблять торт в день получения для лучшего вкуса.',
      category: 'Хранение',
      popular: false
    },
    {
      id: 8,
      question: 'Можно ли попробовать торт перед заказом?',
      answer: 'Да, мы проводим дегустации по предварительной записи. Дегустация включает 3-5 видов бисквитов и кремов. Стоимость дегустации засчитывается при оформлении заказа.',
      category: 'Дегустация',
      popular: false
    },
    {
      id: 9,
      question: 'Какие размеры тортов вы делаете?',
      answer: 'Мы изготавливаем торты любых размеров: от мини-тортов на 2-4 человека до больших тортов на 100+ человек. Стандартные размеры: маленький (6-8 порций), средний (10-15 порций), большой (20-30 порций).',
      category: 'Размеры',
      popular: false
    },
    {
      id: 10,
      question: 'Работаете ли вы с корпоративными клиентами?',
      answer: 'Да, у нас есть специальные условия для корпоративных клиентов: скидки при больших заказах, работа с договорами, отсрочка платежа, персональный менеджер.',
      category: 'Корпоративные клиенты',
      popular: false
    },
    {
      id: 11,
      question: 'Можно ли заказать торт на определенное время?',
      answer: 'Да, мы доставляем торты к определенному времени с точностью до 30 минут. Для этого необходимо указать желаемое время при оформлении заказа.',
      category: 'Доставка',
      popular: false
    },
    {
      id: 12,
      question: 'Что делать, если торт не понравился?',
      answer: 'Если торт не соответствует заказу или имеет дефекты, мы бесплатно изготовим новый торт или вернем деньги. Обратитесь к нам в течение 2 часов после получения.',
      category: 'Гарантии',
      popular: false
    }
  ];

  const categories = [
    { value: 'all', label: 'Все вопросы', count: faqData.length },
    { value: 'Заказ', label: 'Заказ', count: faqData.filter(item => item.category === 'Заказ').length },
    { value: 'Доставка', label: 'Доставка', count: faqData.filter(item => item.category === 'Доставка').length },
    { value: 'Оплата', label: 'Оплата', count: faqData.filter(item => item.category === 'Оплата').length },
    { value: 'Дизайн', label: 'Дизайн', count: faqData.filter(item => item.category === 'Дизайн').length },
    { value: 'Ингредиенты', label: 'Ингредиенты', count: faqData.filter(item => item.category === 'Ингредиенты').length }
  ];

  const filteredFAQ = faqData.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const popularFAQ = faqData.filter(item => item.popular);

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
              <Link to="/faq" className="text-pink-600 font-semibold">FAQ</Link>
              <Link to="/contacts" className="text-gray-600 hover:text-pink-600 transition-colors">Контакты</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-6">
            <HelpCircle className="h-16 w-16 text-blue-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Часто задаваемые вопросы</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Найдите ответы на самые популярные вопросы о наших тортах, заказе и доставке. 
            Если не нашли ответ, свяжитесь с нами!
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Поиск */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Поиск по вопросам..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 text-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Основной контент */}
          <div className="lg:col-span-3">
            {/* Популярные вопросы */}
            {searchTerm === '' && selectedCategory === 'all' && (
              <section className="mb-12">
                <h3 className="text-2xl font-bold mb-6">Популярные вопросы</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {popularFAQ.map(item => (
                    <Card key={item.id} className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                      <div className="flex items-start space-x-3">
                        <HelpCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-sm mb-1">{item.question}</h4>
                          <Badge variant="outline" className="text-xs">{item.category}</Badge>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </section>
            )}

            {/* Все вопросы */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">
                  {selectedCategory === 'all' ? 'Все вопросы' : `Вопросы: ${selectedCategory}`}
                </h3>
                <Badge variant="secondary">
                  {filteredFAQ.length} {filteredFAQ.length === 1 ? 'вопрос' : 'вопросов'}
                </Badge>
              </div>

              {filteredFAQ.length > 0 ? (
                <Accordion type="single" collapsible className="space-y-4">
                  {filteredFAQ.map(item => (
                    <AccordionItem key={item.id} value={item.id.toString()}>
                      <Card>
                        <AccordionTrigger className="px-6 py-4 hover:no-underline">
                          <div className="flex items-start space-x-3 text-left">
                            <HelpCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold">{item.question}</h4>
                              <div className="flex items-center space-x-2 mt-1">
                                <Badge variant="outline" className="text-xs">{item.category}</Badge>
                                {item.popular && <Badge className="text-xs bg-orange-600">Популярный</Badge>}
                              </div>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          <div className="pl-8">
                            <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                          </div>
                        </AccordionContent>
                      </Card>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <div className="text-center py-12">
                  <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">Вопросы не найдены</p>
                  <p className="text-gray-400">Попробуйте изменить параметры поиска</p>
                </div>
              )}
            </section>
          </div>

          {/* Боковая панель */}
          <div className="space-y-6">
            {/* Категории */}
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Категории</h4>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.value}
                      onClick={() => setSelectedCategory(category.value)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.value 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{category.label}</span>
                        <Badge variant="secondary" className="text-xs">{category.count}</Badge>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Быстрые ссылки */}
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Быстрые ссылки</h4>
                <div className="space-y-3">
                  <Link to="/order" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                    <Cake className="h-4 w-4" />
                    <span>Оформить заказ</span>
                  </Link>
                  <Link to="/delivery" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                    <Clock className="h-4 w-4" />
                    <span>Условия доставки</span>
                  </Link>
                  <Link to="/custom-order" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                    <HelpCircle className="h-4 w-4" />
                    <span>Индивидуальный заказ</span>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Контакты */}
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Не нашли ответ?</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Свяжитесь с нами любым удобным способом
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <Phone className="h-4 w-4 text-blue-600" />
                    <span>+7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Mail className="h-4 w-4 text-blue-600" />
                    <span>info@sladkiemechty.ru</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <MessageCircle className="h-4 w-4 text-blue-600" />
                    <span>Telegram: @sladkiemechty</span>
                  </div>
                </div>
                <Link to="/contacts">
                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                    Связаться с нами
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Время работы */}
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Время работы</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Понедельник - Воскресенье</span>
                    <span className="font-medium">9:00 - 21:00</span>
                  </div>
                  <p className="text-gray-600 text-xs mt-2">
                    Работаем без выходных и праздников
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Призыв к действию */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Остались вопросы?</h3>
          <p className="mb-6 opacity-90">
            Наши консультанты с радостью помогут вам с выбором торта
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Phone className="h-4 w-4 mr-2" />
              Позвонить сейчас
            </Button>
            <Link to="/contacts">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                <MessageCircle className="h-4 w-4 mr-2" />
                Написать нам
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;