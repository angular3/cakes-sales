import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Cake, Home, Search, Phone, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const popularPages = [
    { title: 'Каталог тортов', path: '/catalog', description: 'Посмотрите все наши торты' },
    { title: 'Индивидуальный заказ', path: '/custom-order', description: 'Создайте уникальный торт' },
    { title: 'О нас', path: '/about', description: 'Узнайте больше о нашей кондитерской' },
    { title: 'Контакты', path: '/contacts', description: 'Свяжитесь с нами' }
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
              <Link to="/contacts" className="text-gray-600 hover:text-pink-600 transition-colors">Контакты</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Иллюстрация */}
          <div className="mb-8">
            <div className="text-8xl font-bold text-pink-200 mb-4">404</div>
            <Cake className="h-24 w-24 text-pink-400 mx-auto" />
          </div>

          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Упс! Страница не найдена
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Похоже, что страница, которую вы ищете, не существует или была перемещена. 
            Но не расстраивайтесь - у нас есть много вкусных тортов!
          </p>
      </div>
    </div>
  );
};

export default NotFound;
