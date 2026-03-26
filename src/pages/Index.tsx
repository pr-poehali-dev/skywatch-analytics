import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-slate-900">Экспресс Молд</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">
                О компании
              </a>
              <a href="#services" className="text-slate-600 hover:text-slate-900 transition-colors">
                Услуги
              </a>
              <a href="#projects" className="text-slate-600 hover:text-slate-900 transition-colors">
                Выполненные работы
              </a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">
                Контакты
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Мелкосерийное производство</Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Литьё пластика под давлением — от <span className="text-blue-600">500 штук</span> до серии
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Проектируем малоресурсную оснастку и изготавливаем пластиковые изделия на термопластавтоматах.
                Воплощаем вашу идею от тестового образца до серийного выпуска.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Обсудить проект
                  <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Наши работы
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Factory" className="h-6 w-6" />
                    <span className="font-semibold">ТПА 130, 160 и 250 тонн</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Layers" className="h-6 w-6" />
                    <span className="font-semibold">Оснастка от 500 до 3000 изделий</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="ShieldCheck" className="h-6 w-6" />
                    <span className="font-semibold">Только штатные специалисты</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Wrench" className="h-6 w-6" />
                    <span className="font-semibold">Полный цикл: разработка → производство</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">О компании</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              ООО «Экспресс Молд» — производство мелкосерийных партий пластиковых изделий методом литья под давлением
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Решение для запуска новых изделий</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Стоимость оснастки для серийного производства — значительный барьер при запуске нового продукта.
                Экспресс Молд предлагает малоресурсную оснастку, которая позволяет запустить партию от 500 штук
                и проверить рынок без многомиллионных вложений.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Все работы выполняются исключительно штатными специалистами предприятия — от 3D-проектирования
                до серийного производства на термопластавтоматах.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Отрасли</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Нефтегаз</Badge>
                    <Badge variant="secondary">Приборостроение</Badge>
                    <Badge variant="secondary">Электроника</Badge>
                    <Badge variant="secondary">Игрушки</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Оборудование</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">ТПА 250т</Badge>
                    <Badge variant="secondary">ТПА 160т</Badge>
                    <Badge variant="secondary">ТПА 130т</Badge>
                    <Badge variant="secondary">ЧПУ-станки</Badge>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/574fd804-9934-4f8b-8800-16aec8a014fe/files/1c9811a5-3a14-4e55-bc1d-7f98d1ecdc7f.jpg"
                alt="Производственный цех Экспресс Молд"
                className="rounded-2xl shadow-lg w-full max-w-[400px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Услуги</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Полный спектр услуг в области проектирования и производства пластиковых изделий
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Layers" className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Малоресурсная оснастка</CardTitle>
                <CardDescription>
                  Проектирование и изготовление пресс-форм для партий от 500 до 3000 изделий. Оптимальный выбор при запуске нового продукта.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>* Проектирование пресс-форм</li>
                  <li>* Изготовление оснастки</li>
                  <li>* Литьё на ТПА 130–250 тонн</li>
                  <li>* Партии от 500 штук</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="RefreshCw" className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Реинжиниринг изделий</CardTitle>
                <CardDescription>Разработка или реинжиниринг перспективных изделий с последующим серийным производством.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>* 3D-моделирование</li>
                  <li>* Промышленный дизайн</li>
                  <li>* Математическое моделирование потока</li>
                  <li>* Серийный выпуск</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Cpu" className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Электроника и механика</CardTitle>
                <CardDescription>Разработка электронных устройств, токарно-фрезерная обработка, холодная штамповка и пайка SMD/DIP.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>* Разработка электронных устройств</li>
                  <li>* ЧПУ-обработка</li>
                  <li>* Штамповка (прессы 25т)</li>
                  <li>* Автоматизированная пайка SMD/DIP</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Выполненные работы</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Примеры реализованных проектов в различных отраслях промышленности
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-600">
                <img
                  src="https://cdn.poehali.dev/projects/574fd804-9934-4f8b-8800-16aec8a014fe/files/7909ac41-b1fa-4a0f-b9ff-0befd617af3c.jpg"
                  alt="Сигнализирующие и управляющие приборы"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Приборы для нефтегазового комплекса</CardTitle>
                    <CardDescription>
                      Корпуса и элементы сигнализирующих и управляющих приборов. Изготовлено литьём под давлением на ТПА 160т.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Нефтегаз</Badge>
                  <Badge variant="outline">ТПА 160т</Badge>
                  <Badge variant="outline">Серия 1500 шт</Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Icon name="CheckCircle" className="h-4 w-4 text-green-500" />
                  <span>Производство в срок</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-48 bg-gradient-to-r from-green-500 to-blue-600">
                <img
                  src="https://cdn.poehali.dev/projects/574fd804-9934-4f8b-8800-16aec8a014fe/files/1c9811a5-3a14-4e55-bc1d-7f98d1ecdc7f.jpg"
                  alt="Запорная арматура"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Запорная арматура и бытовая электроника</CardTitle>
                    <CardDescription>
                      Пластиковые элементы запорной арматуры и корпуса бытовых электронных изделий. Полный цикл от оснастки до партии.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Арматура</Badge>
                  <Badge variant="outline">Электроника</Badge>
                  <Badge variant="outline">ТПА 250т</Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Icon name="CheckCircle" className="h-4 w-4 text-green-500" />
                  <span>Реализован полный цикл</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Обсудим ваш проект</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Готовы воплотить вашу идею от тестового образца до крупносерийного выпуска
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Свяжитесь с нами</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Планируете запуск нового изделия? Нужна мелкосерийная партия? Расскажите о задаче —
                мы подберём оптимальное решение и рассчитаем стоимость оснастки.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-slate-300">info@express-mold.ru</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Icon name="Phone" className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-slate-300">+7 (___) ___-__-__</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Icon name="MapPin" className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-slate-300">Россия</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Оставить заявку</CardTitle>
                <CardDescription className="text-slate-300">
                  Опишите задачу — мы свяжемся и рассчитаем стоимость.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Имя</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Иван"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Компания</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="ООО Ромашка"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email или телефон</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="ivan@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Описание задачи</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Расскажите об изделии, нужном тираже и сроках..."
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Отправить заявку
                  <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-bold text-xl text-white mb-4 md:mb-0">Экспресс Молд</div>
            <p className="text-center md:text-right">
              © 2024 ООО «Экспресс Молд». Литьё пластика под давлением — от идеи до серийного производства.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
