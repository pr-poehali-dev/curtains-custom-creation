import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [calculatorData, setCalculatorData] = useState({
    width: '',
    height: '',
    fabric: 'standard',
    style: 'classic'
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const calculatePrice = () => {
    const width = parseFloat(calculatorData.width) || 0;
    const height = parseFloat(calculatorData.height) || 0;
    const area = width * height;
    
    const fabricPrices = {
      standard: 3000,
      premium: 5000,
      luxury: 8000
    };
    
    const stylePrices = {
      classic: 1.0,
      modern: 1.2,
      designer: 1.5
    };
    
    const basePrice = area * fabricPrices[calculatorData.fabric as keyof typeof fabricPrices];
    const finalPrice = basePrice * stylePrices[calculatorData.style as keyof typeof stylePrices];
    
    return Math.round(finalPrice);
  };

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Спасибо! Наш дизайнер свяжется с вами в ближайшее время');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/20">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Sparkles" size={28} className="text-primary" />
              <h1 className="text-2xl font-bold text-primary">Luxury Curtains</h1>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('catalog')} className="text-sm font-medium hover:text-primary transition-colors">Каталог</button>
              <button onClick={() => scrollToSection('materials')} className="text-sm font-medium hover:text-primary transition-colors">Материалы</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-sm font-medium hover:text-primary transition-colors">Портфолио</button>
              <button onClick={() => scrollToSection('calculator')} className="text-sm font-medium hover:text-primary transition-colors">Калькулятор</button>
              <button onClick={() => scrollToSection('consultation')} className="text-sm font-medium hover:text-primary transition-colors">Консультация</button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors">Контакты</button>
            </div>
            <Button onClick={() => scrollToSection('consultation')} size="sm" className="bg-secondary hover:bg-secondary/90">
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-secondary text-white">Премиум качество</Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight">
                Шторы по вашим меркам
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Индивидуальный пошив штор из премиальных тканей. Воплотим ваши идеи с идеальной точностью.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button onClick={() => scrollToSection('catalog')} size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="Layers" size={20} className="mr-2" />
                  Смотреть каталог
                </Button>
                <Button onClick={() => scrollToSection('calculator')} size="lg" variant="outline" className="border-2">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
              <div className="flex gap-8 mt-12">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Проектов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">100+</div>
                  <div className="text-sm text-muted-foreground">Видов тканей</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">10 лет</div>
                  <div className="text-sm text-muted-foreground">Опыт</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/05114210-1d21-45e0-944d-6f256572a4e3/files/435bb168-f492-492d-b615-5276fdf50063.jpg" 
                alt="Luxury curtains" 
                className="relative rounded-3xl shadow-2xl hover-lift w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Наши коллекции</Badge>
            <h2 className="text-4xl font-bold mb-4">Каталог штор</h2>
            <p className="text-muted-foreground text-lg">Выберите стиль, который подходит вашему интерьеру</p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="classic">Классика</TabsTrigger>
              <TabsTrigger value="modern">Модерн</TabsTrigger>
              <TabsTrigger value="minimalist">Минимализм</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'Классические портьеры', desc: 'Тяжелые ткани с драпировкой', price: 'от 25 000 ₽', style: 'classic' },
                  { title: 'Римские шторы', desc: 'Элегантный минимализм', price: 'от 15 000 ₽', style: 'minimalist' },
                  { title: 'Японские панели', desc: 'Современное решение', price: 'от 20 000 ₽', style: 'modern' },
                  { title: 'Французские шторы', desc: 'Роскошь и изящество', price: 'от 30 000 ₽', style: 'classic' },
                  { title: 'Австрийские шторы', desc: 'Волнообразные складки', price: 'от 28 000 ₽', style: 'classic' },
                  { title: 'Рулонные шторы', desc: 'Практичность и стиль', price: 'от 12 000 ₽', style: 'minimalist' }
                ].map((item, idx) => (
                  <Card key={idx} className="overflow-hidden hover-lift cursor-pointer group">
                    <div className="h-64 bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon name="Image" size={64} className="text-primary/20 group-hover:scale-110 transition-transform" />
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        {item.title}
                        <Badge variant="outline">{item.style}</Badge>
                      </CardTitle>
                      <CardDescription>{item.desc}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">{item.price}</span>
                        <Button variant="outline" size="sm">
                          <Icon name="Eye" size={16} className="mr-2" />
                          Подробнее
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="materials" className="py-20 px-4 bg-accent/10">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary text-white">Премиум ткани</Badge>
            <h2 className="text-4xl font-bold mb-4">Материалы</h2>
            <p className="text-muted-foreground text-lg">Только лучшие ткани от ведущих производителей</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Бархат', desc: 'Роскошная текстура', icon: 'Gem' },
              { name: 'Шелк', desc: 'Природный блеск', icon: 'Sparkles' },
              { name: 'Лен', desc: 'Экологичность', icon: 'Leaf' },
              { name: 'Жаккард', desc: 'Богатые узоры', icon: 'Palette' },
              { name: 'Органза', desc: 'Легкость и воздушность', icon: 'Wind' },
              { name: 'Тафта', desc: 'Изысканная драпировка', icon: 'Waves' },
              { name: 'Блэкаут', desc: 'Полное затемнение', icon: 'Moon' },
              { name: 'Димаут', desc: 'Мягкий свет', icon: 'Sun' }
            ].map((material, idx) => (
              <Card key={idx} className="text-center hover-lift cursor-pointer group">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name={material.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle>{material.name}</CardTitle>
                  <CardDescription>{material.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <img 
              src="https://cdn.poehali.dev/projects/05114210-1d21-45e0-944d-6f256572a4e3/files/28fec612-e2ae-468a-912c-f2326363a780.jpg"
              alt="Fabric samples"
              className="rounded-3xl shadow-2xl mx-auto max-w-4xl w-full h-80 object-cover hover-lift"
            />
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Наши работы</Badge>
            <h2 className="text-4xl font-bold mb-4">Портфолио</h2>
            <p className="text-muted-foreground text-lg">Реализованные проекты наших клиентов</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="overflow-hidden hover-lift cursor-pointer group">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/05114210-1d21-45e0-944d-6f256572a4e3/files/a8591636-ba2f-4754-91e2-1bb5329b8efc.jpg"
                    alt={`Portfolio ${item}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-xl font-bold mb-2">Проект {item}</h3>
                      <p className="text-sm opacity-90">Премиум интерьер • {2024 - item} год</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" variant="outline">
              <Icon name="Grid" size={20} className="mr-2" />
              Смотреть всё портфолио
            </Button>
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary text-white">Быстрый расчёт</Badge>
            <h2 className="text-4xl font-bold mb-4">Калькулятор стоимости</h2>
            <p className="text-muted-foreground text-lg">Узнайте примерную стоимость ваших штор</p>
          </div>

          <Card className="shadow-2xl">
            <CardHeader>
              <CardTitle>Параметры заказа</CardTitle>
              <CardDescription>Введите размеры окна и выберите материал</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="width">Ширина окна (метры)</Label>
                  <Input 
                    id="width" 
                    type="number" 
                    placeholder="2.5"
                    value={calculatorData.width}
                    onChange={(e) => setCalculatorData({...calculatorData, width: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="height">Высота окна (метры)</Label>
                  <Input 
                    id="height" 
                    type="number" 
                    placeholder="2.7"
                    value={calculatorData.height}
                    onChange={(e) => setCalculatorData({...calculatorData, height: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Класс ткани</Label>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: 'standard', label: 'Стандарт', price: '3000 ₽/м²' },
                    { value: 'premium', label: 'Премиум', price: '5000 ₽/м²' },
                    { value: 'luxury', label: 'Люкс', price: '8000 ₽/м²' }
                  ].map((fabric) => (
                    <Card 
                      key={fabric.value}
                      className={`cursor-pointer hover-scale ${calculatorData.fabric === fabric.value ? 'ring-2 ring-primary' : ''}`}
                      onClick={() => setCalculatorData({...calculatorData, fabric: fabric.value})}
                    >
                      <CardContent className="p-4 text-center">
                        <div className="font-semibold mb-1">{fabric.label}</div>
                        <div className="text-sm text-muted-foreground">{fabric.price}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Стиль исполнения</Label>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: 'classic', label: 'Классика', mult: '×1.0' },
                    { value: 'modern', label: 'Модерн', mult: '×1.2' },
                    { value: 'designer', label: 'Дизайнер', mult: '×1.5' }
                  ].map((style) => (
                    <Card 
                      key={style.value}
                      className={`cursor-pointer hover-scale ${calculatorData.style === style.value ? 'ring-2 ring-primary' : ''}`}
                      onClick={() => setCalculatorData({...calculatorData, style: style.value})}
                    >
                      <CardContent className="p-4 text-center">
                        <div className="font-semibold mb-1">{style.label}</div>
                        <div className="text-sm text-muted-foreground">{style.mult}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary to-secondary p-6 rounded-xl text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm opacity-90 mb-1">Примерная стоимость</div>
                    <div className="text-4xl font-bold">{calculatePrice().toLocaleString('ru-RU')} ₽</div>
                  </div>
                  <Icon name="TrendingUp" size={48} className="opacity-50" />
                </div>
              </div>

              <Button onClick={() => scrollToSection('consultation')} className="w-full" size="lg">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Заказать консультацию
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="consultation" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary text-white">Бесплатная консультация</Badge>
            <h2 className="text-4xl font-bold mb-4">Онлайн консультация</h2>
            <p className="text-muted-foreground text-lg">Наш дизайнер поможет подобрать идеальное решение</p>
          </div>

          <Card className="shadow-2xl">
            <CardHeader>
              <CardTitle>Оставьте заявку</CardTitle>
              <CardDescription>Мы свяжемся с вами в течение 30 минут</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleConsultationSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input id="name" placeholder="Иван Иванов" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="example@mail.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Опишите ваш проект</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Расскажите о своих пожеланиях: размеры окон, стиль интерьера, предпочтения по материалам..."
                    rows={5}
                  />
                </div>

                <div className="flex gap-4">
                  <Button type="submit" className="flex-1" size="lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                  <Button type="button" variant="outline" size="lg">
                    <Icon name="Phone" size={20} className="mr-2" />
                    Позвонить
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="mx-auto mb-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Clock" size={24} className="text-primary" />
                </div>
                <CardTitle className="text-lg">Быстрый ответ</CardTitle>
                <CardDescription>Свяжемся за 30 минут</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="mx-auto mb-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="UserCheck" size={24} className="text-primary" />
                </div>
                <CardTitle className="text-lg">Личный дизайнер</CardTitle>
                <CardDescription>Индивидуальный подход</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="mx-auto mb-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Gift" size={24} className="text-primary" />
                </div>
                <CardTitle className="text-lg">Бесплатно</CardTitle>
                <CardDescription>Консультация без оплаты</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-accent/10">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Свяжитесь с нами</Badge>
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-muted-foreground text-lg">Мы всегда рады ответить на ваши вопросы</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name="Phone" size={28} className="text-white" />
                </div>
                <CardTitle>Телефон</CardTitle>
                <CardDescription className="text-base">
                  +7 (999) 123-45-67<br/>
                  +7 (999) 765-43-21
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name="Mail" size={28} className="text-white" />
                </div>
                <CardTitle>Email</CardTitle>
                <CardDescription className="text-base">
                  info@luxury-curtains.ru<br/>
                  design@luxury-curtains.ru
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name="MapPin" size={28} className="text-white" />
                </div>
                <CardTitle>Адрес</CardTitle>
                <CardDescription className="text-base">
                  г. Москва, ул. Примерная, 123<br/>
                  Ежедневно 10:00 - 20:00
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Sparkles" size={24} />
                <span className="text-xl font-bold">Luxury Curtains</span>
              </div>
              <p className="text-sm opacity-80">
                Индивидуальный пошив штор премиум-класса с 2014 года
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Каталог</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Классические шторы</li>
                <li>Римские шторы</li>
                <li>Японские панели</li>
                <li>Рулонные шторы</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>О нас</li>
                <li>Портфолио</li>
                <li>Отзывы</li>
                <li>Гарантии</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Социальные сети</h3>
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer transition-colors">
                  <Icon name="Instagram" size={20} />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer transition-colors">
                  <Icon name="Facebook" size={20} />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer transition-colors">
                  <Icon name="MessageCircle" size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm opacity-80">
            © 2024 Luxury Curtains. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
