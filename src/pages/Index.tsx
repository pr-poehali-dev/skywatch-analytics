import { useState } from "react"
import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"
import { useInView } from "@/hooks/useInView"

const SEND_URL = "https://functions.poehali.dev/f03e75e1-3d35-4986-a049-0995ce2ea9f8"

export default function Portfolio() {
  const [form, setForm] = useState({ name: '', company: '', contact: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle')

  const about = useInView()
  const services = useInView()
  const projects = useInView()
  const reviews = useInView()
  const contact = useInView()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async () => {
    if (!form.name || !form.contact || !form.message) {
      setStatus('error')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(SEND_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('ok')
        setForm({ name: '', company: '', contact: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-slate-900">Экспресс Молд</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">О компании</a>
              <a href="#services" className="text-slate-600 hover:text-slate-900 transition-colors">Услуги</a>
              <a href="#projects" className="text-slate-600 hover:text-slate-900 transition-colors">Выполненные работы</a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/574fd804-9934-4f8b-8800-16aec8a014fe/files/40da4465-0be5-4b6e-a5d8-35e1db37c26c.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Мелкосерийное производство</Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Литьё пластика под давлением — от <span className="text-blue-600">500 штук</span> до серии
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Проектируем малоресурсную оснастку и изготавливаем пластиковые изделия на термопластавтоматах.
                Воплощаем вашу идею от тестового образца до серийного выпуска.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Обсудить проект
                  <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
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
      <section id="about" className="py-20 bg-white" ref={about.ref as React.RefObject<HTMLElement>}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 reveal ${about.inView ? 'visible' : ''}`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">О компании</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              ООО «Экспресс Молд» — производство мелкосерийных партий пластиковых изделий методом литья под давлением
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`reveal-left ${about.inView ? 'visible' : ''} reveal-delay-2`}>
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
            <div className={`relative reveal-right ${about.inView ? 'visible' : ''} reveal-delay-3`}>
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
      <section id="services" className="py-20 bg-slate-50" ref={services.ref as React.RefObject<HTMLElement>}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 reveal ${services.inView ? 'visible' : ''}`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Услуги</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Полный спектр услуг в области проектирования и производства пластиковых изделий
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className={`border-0 shadow-lg hover:shadow-xl transition-shadow reveal ${services.inView ? 'visible' : ''} reveal-delay-1`}>
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

            <Card className={`border-0 shadow-lg hover:shadow-xl transition-shadow reveal ${services.inView ? 'visible' : ''} reveal-delay-2`}>
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

            <Card className={`border-0 shadow-lg hover:shadow-xl transition-shadow reveal ${services.inView ? 'visible' : ''} reveal-delay-3`}>
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
      <section id="projects" className="py-20 bg-white" ref={projects.ref as React.RefObject<HTMLElement>}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 reveal ${projects.inView ? 'visible' : ''}`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Выполненные работы</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Примеры реализованных проектов в различных отраслях промышленности
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className={`border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden reveal ${projects.inView ? 'visible' : ''} reveal-delay-1`}>
              <div className="relative h-48 bg-gradient-to-r from-orange-400 to-pink-500">
                <img
                  src="https://cdn.poehali.dev/projects/574fd804-9934-4f8b-8800-16aec8a014fe/bucket/9cb0e658-a7c1-453e-8751-4ba3b696197e.jpg"
                  alt="Электронные изделия бытового назначения"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Электронные изделия бытового назначения</CardTitle>
                <CardDescription>
                  Корпус сигнализатора загазованности. Прибор предназначен для обнаружения довзрывоопасных концентраций метана и опасных для жизни уровней угарного газа в контролируемых помещениях. При разработке корпуса мы учли все технические требования заказчика, оптимизировали конструкцию для литья пластмасс под давлением и уделили особое внимание эргономике и промышленному дизайну.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Бытовая электроника</Badge>
                  <Badge variant="outline">ТПА 130т</Badge>
                  <Badge variant="outline">Серия 2000 шт</Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Icon name="CheckCircle" className="h-4 w-4 text-green-500" />
                  <span>Высокое качество поверхности</span>
                </div>
              </CardContent>
            </Card>

            <Card className={`border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden reveal ${projects.inView ? 'visible' : ''} reveal-delay-2`}>
              <div className="relative h-48 bg-gradient-to-r from-yellow-400 to-red-400">
                <img
                  src="https://cdn.poehali.dev/projects/574fd804-9934-4f8b-8800-16aec8a014fe/bucket/3fd8588a-aeb2-419b-a026-259ed1e16c77.jpg"
                  alt="Игрушки для детей"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Игрушки для детей</CardTitle>
                <CardDescription>
                  Интересный проект от нашего нового заказчика. Целью было реанимировать старую детскую игрушку. В результате детская забава переросла в реальный продукт для маркетплейсов. В настоящее время ведётся подготовка к мелкосерийному выпуску партии в 500 изделий для тестирования рынка. Расчётная стойкость комплекта пресс-форм — 3000 отливок.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Детские товары</Badge>
                  <Badge variant="outline">Безопасный пластик</Badge>
                  <Badge variant="outline">Серия 500 шт</Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Icon name="CheckCircle" className="h-4 w-4 text-green-500" />
                  <span>Подготовка к серийному выпуску</span>
                </div>
              </CardContent>
            </Card>

            <Card className={`border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden reveal ${projects.inView ? 'visible' : ''} reveal-delay-3`}>
              <div className="relative h-48 bg-gradient-to-r from-teal-500 to-cyan-600">
                <img
                  src="https://cdn.poehali.dev/projects/574fd804-9934-4f8b-8800-16aec8a014fe/bucket/5932ae3c-34b9-41cd-89ac-9c9a575298fd.jpg"
                  alt="Офисные принадлежности"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Офисные принадлежности</CardTitle>
                <CardDescription>
                  Подставки для канцелярии, органайзеры, корпуса степлеров, лотки для бумаги и другие офисные аксессуары. Оптимальное соотношение цены оснастки и тиража.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Канцелярия</Badge>
                  <Badge variant="outline">ТПА 160т</Badge>
                  <Badge variant="outline">Серия 1000 шт</Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Icon name="CheckCircle" className="h-4 w-4 text-green-500" />
                  <span>Выгодная стоимость оснастки</span>
                </div>
              </CardContent>
            </Card>

            <Card className={`border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden reveal ${projects.inView ? 'visible' : ''} reveal-delay-4`}>
              <div className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-600">
                <img
                  src="https://systemgaz.ru/f/services/2019/06/_5d0375fecffbd3.jpg"
                  alt="Блок диспетчеризации котельной"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Приборы для нефтегазового комплекса</CardTitle>
                <CardDescription>
                  Блок диспетчеризации котельной. Прибор позволяет осуществлять мониторинг аварийных параметров, управление исполнительными устройствами и передачу информации на удалённый пункт контроля различными способами. Был осуществлён полный цикл прибора начиная от составления технического задания до серийного выпуска изделия. При изготовлении прибора пайка SMD компонентов осуществляется автоматизированным способом.
                </CardDescription>
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

            <Card className={`border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden reveal ${projects.inView ? 'visible' : ''} reveal-delay-5`}>
              <div className="relative h-48 bg-gradient-to-r from-green-500 to-blue-600">
                <img
                  src="https://cdn.poehali.dev/projects/574fd804-9934-4f8b-8800-16aec8a014fe/bucket/9e02b37a-36c1-4966-8965-cc094009902f.jpg"
                  alt="Запорная арматура"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Реинжиниринг электромагнитного клапана</CardTitle>
                <CardDescription>
                  Разработана альтернативная конструкция, свободная от ограничений действующего патента. Гидродинамические параметры оптимизированы с помощью моделирования в ANSYS и подтверждены испытаниями на сертифицированном расходомерном стенде. Итог: повышены пропускная способность и надёжность изделия, получены новые патенты на полезную модель. Клапан выпускается серийно.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Реинжиниринг</Badge>
                  <Badge variant="outline">ANSYS</Badge>
                  <Badge variant="outline">Серийный выпуск</Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Icon name="CheckCircle" className="h-4 w-4 text-green-500" />
                  <span>Получены новые патенты</span>
                </div>
              </CardContent>
            </Card>

            <Card className={`border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden reveal ${projects.inView ? 'visible' : ''} reveal-delay-5`}>
              <div className="relative h-48 bg-gradient-to-r from-green-400 to-teal-500">
                <img
                  src="https://cdn.poehali.dev/projects/574fd804-9934-4f8b-8800-16aec8a014fe/bucket/462ab318-5600-462a-b59d-bbb180048bb8.jpg"
                  alt="Концепт зубных щёток для ВкусВилл"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Концепт зубных щёток для «ВкусВилл»</CardTitle>
                <CardDescription>
                  Разработка дизайн-концепции и визуальных материалов для потенциальной собственной линейки ритейлера. Выполнены: промышленный дизайн, эргономическая проработка, набор 3D-рендеров высокого качества. Проект закрыт на стадии концепта, все материалы переданы заказчику. Стоимость разработки: 30 000 ₽.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Промдизайн</Badge>
                  <Badge variant="outline">3D-рендеры</Badge>
                  <Badge variant="outline">ВкусВилл</Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Icon name="CheckCircle" className="h-4 w-4 text-green-500" />
                  <span>Разработан дизайн-концепт</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-slate-50" ref={reviews.ref as React.RefObject<HTMLElement>}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 reveal ${reviews.inView ? 'visible' : ''}`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Нам доверяют компании из разных отраслей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className={`border-0 shadow-lg reveal ${reviews.inView ? 'visible' : ''} reveal-delay-1`}>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[1,2,3,4,5].map(i => (
                    <Icon key={i} name="Star" className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed italic">
                  «Заказывали корпуса для датчиков давления. Оснастку сделали быстро, качество литья — отличное. Уже третий раз работаем с "Экспресс Молд" и всегда довольны результатом.»
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Icon name="User" className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Андрей Волков</p>
                    <p className="text-sm text-slate-500">ООО «НефтеПрибор», г. Саратов</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className={`border-0 shadow-lg reveal ${reviews.inView ? 'visible' : ''} reveal-delay-2`}>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[1,2,3,4,5].map(i => (
                    <Icon key={i} name="Star" className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed italic">
                  «Обратились с нестандартной задачей — мелкосерийные детали для детского конструктора. Ребята предложили оптимальную оснастку под наш тираж, уложились в сроки и бюджет.»
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon name="User" className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Марина Соколова</p>
                    <p className="text-sm text-slate-500">ТД «Игрушки Поволжья», г. Самара</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className={`border-0 shadow-lg reveal ${reviews.inView ? 'visible' : ''} reveal-delay-3`}>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[1,2,3,4,5].map(i => (
                    <Icon key={i} name="Star" className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed italic">
                  «Производим офисные органайзеры. "Экспресс Молд" — наш надёжный партнёр по пластиковым деталям. Цены честные, коммуникация быстрая, брака практически нет.»
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Icon name="User" className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Дмитрий Лебедев</p>
                    <p className="text-sm text-slate-500">ЗАО «ОфисКомплект», г. Москва</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white" ref={contact.ref as React.RefObject<HTMLElement>}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 reveal ${contact.inView ? 'visible' : ''}`}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Обсудим ваш проект</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Готовы воплотить вашу идею от тестового образца до крупносерийного выпуска
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className={`reveal-left ${contact.inView ? 'visible' : ''} reveal-delay-2`}>
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
                    <p className="text-slate-300">info@systemgaz.ru</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Icon name="Phone" className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-slate-300">+7 (8452) 740–850</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Icon name="MapPin" className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-slate-300">г. Саратов, ул. Кооперативная, 100литВ</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className={`bg-slate-800 border-slate-700 reveal-right ${contact.inView ? 'visible' : ''} reveal-delay-3`}>
              <CardHeader>
                <CardTitle className="text-white">Оставить заявку</CardTitle>
                <CardDescription className="text-slate-300">
                  Опишите задачу — мы свяжемся и рассчитаем стоимость.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {status === 'ok' ? (
                  <div className="flex flex-col items-center justify-center py-8 gap-4 text-center">
                    <Icon name="CheckCircle" className="h-12 w-12 text-green-400" />
                    <p className="text-white text-lg font-semibold">Заявка отправлена!</p>
                    <p className="text-slate-300">Мы свяжемся с вами в ближайшее время.</p>
                    <Button variant="outline" className="text-white border-slate-500" onClick={() => setStatus('idle')}>
                      Отправить ещё
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Имя *</label>
                        <input
                          name="name"
                          type="text"
                          value={form.name}
                          onChange={handleChange}
                          className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Иван"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Компания</label>
                        <input
                          name="company"
                          type="text"
                          value={form.company}
                          onChange={handleChange}
                          className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="ООО Ромашка"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Email или телефон *</label>
                      <input
                        name="contact"
                        type="text"
                        value={form.contact}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="ivan@example.com или +7 (___) ___-__-__"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Описание задачи *</label>
                      <textarea
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Расскажите об изделии, нужном тираже и сроках..."
                      />
                    </div>
                    {status === 'error' && (
                      <p className="text-red-400 text-sm">Заполните все обязательные поля или попробуйте позже.</p>
                    )}
                    <Button
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      onClick={handleSubmit}
                      disabled={status === 'sending'}
                    >
                      {status === 'sending' ? 'Отправляем...' : 'Отправить заявку'}
                      {status !== 'sending' && <Icon name="ArrowRight" className="ml-2 h-4 w-4" />}
                    </Button>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">Как нас найти</h2>
            <p className="text-slate-400">г. Саратов, ул. Кооперативная, 100литВ</p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-800" style={{ height: '450px' }}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=46.044785%2C51.552775&z=17&pt=46.044785%2C51.552775%2Cpm2rdm&text=%D0%A1%D0%B0%D1%80%D0%B0%D1%82%D0%BE%D0%B2%2C+%D1%83%D0%BB.+%D0%9A%D0%BE%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D0%B0%D1%8F%2C+100%D0%BB%D0%B8%D1%82%D0%92"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              style={{ border: 0, display: 'block' }}
              title="Карта — Экспресс Молд"
            />
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