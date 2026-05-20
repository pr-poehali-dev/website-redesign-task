import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/cdd4c5b4-bcdb-42e8-9626-9645b0de00b0/files/3ea100f7-65ba-4d8a-9a7c-ad98009d5644.jpg";

const SERVICES = [
  {
    icon: "Flower2",
    title: "Авторские букеты",
    desc: "Создаём уникальные kompoziции из свежих сезонных цветов под ваш запрос и настроение",
    price: "от 2 500 ₽",
    color: "bg-rose-50",
    iconColor: "text-rose-400",
  },
  {
    icon: "Leaf",
    title: "Комнатные растения",
    desc: "Подберём зелёного питомца под ваш интерьер и уровень заботы — от суккулентов до пальм",
    price: "от 800 ₽",
    color: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: "Gift",
    title: "Подарочные корзины",
    desc: "Флористические корзины и боксы с цветами, сладостями и памятными мелочами",
    price: "от 4 000 ₽",
    color: "bg-amber-50",
    iconColor: "text-amber-500",
  },
  {
    icon: "Sparkles",
    title: "Оформление событий",
    desc: "Свадьбы, дни рождения, корпоративы — украшаем пространство живыми цветами",
    price: "от 15 000 ₽",
    color: "bg-purple-50",
    iconColor: "text-purple-400",
  },
];

const WHY_ITEMS = [
  { icon: "Scissors", title: "Только свежие цветы", desc: "Доставка от проверенных поставщиков 3 раза в неделю" },
  { icon: "Clock", title: "Быстрая доставка", desc: "Привезём букет за 2–3 часа по всему городу" },
  { icon: "Heart", title: "С душой", desc: "Каждый букет собирает флорист с 10-летним опытом" },
  { icon: "Star", title: "Гарантия свежести", desc: "Если цветы завянут — заменим бесплатно" },
];

const REVIEWS = [
  {
    name: "Анастасия М.",
    text: "Заказывала букет на годовщину свадьбы — получила именно то, что описала. Цветы простояли 12 дней!",
    stars: 5,
    date: "апрель 2024",
  },
  {
    name: "Дмитрий К.",
    text: "Оформляли свадьбу с Верой. Зал был невероятный — все гости в восторге, фотографии просто сказочные.",
    stars: 5,
    date: "август 2024",
  },
  {
    name: "Оксана Р.",
    text: "Лучший цветочный в городе. Всегда свежо, красиво и по хорошей цене. Беру подписку каждый месяц.",
    stars: 5,
    date: "октябрь 2024",
  },
];

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, visible };
}

function RevealSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${className}`}
    >
      {children}
    </div>
  );
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen font-body overflow-x-hidden" style={{ background: "hsl(38 30% 98%)" }}>

      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-display text-2xl font-semibold" style={{ color: "hsl(var(--green))" }}>
            🌿 ВераГарден
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {["Букеты", "Растения", "Оформление", "О нас", "Контакты"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium transition-colors hover:text-green-700"
                style={{ color: scrolled ? "hsl(var(--warm-dark))" : "hsl(38 30% 96%)" }}
              >
                {item}
              </a>
            ))}
          </div>

          <a
            href="tel:+7"
            className="hidden md:flex items-center gap-2 btn-primary text-sm"
          >
            <Icon name="Phone" size={15} />
            Заказать букет
          </a>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} style={{ color: scrolled ? "hsl(var(--warm-dark))" : "white" }} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
            {["Букеты", "Растения", "Оформление", "О нас", "Контакты"].map((item) => (
              <a key={item} href="#" className="text-sm font-medium text-gray-700 py-1" onClick={() => setMenuOpen(false)}>
                {item}
              </a>
            ))}
            <a href="tel:+7" className="btn-primary text-sm text-center mt-2">
              Заказать букет
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        {/* Overlay gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, hsl(142 28% 18% / 0.85) 0%, hsl(30 15% 10% / 0.5) 60%, hsl(348 60% 30% / 0.2) 100%)",
          }}
        />

        {/* Floating decorative circles */}
        <div
          className="absolute top-24 right-16 w-64 h-64 rounded-full opacity-10 animate-float"
          style={{ background: "hsl(var(--rose))", filter: "blur(40px)" }}
        />
        <div
          className="absolute bottom-32 left-12 w-48 h-48 rounded-full opacity-15 animate-float delay-300"
          style={{ background: "hsl(var(--green-light))", filter: "blur(30px)", animationDelay: "2s" }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <div className="animate-fade-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            <span className="section-tag" style={{ color: "hsl(var(--rose-light))" }}>
              <span>✦</span> Авторская флористика
            </span>
          </div>

          <h1
            className="font-display mt-6 mb-6 animate-fade-up opacity-0"
            style={{
              fontSize: "clamp(3rem, 8vw, 7rem)",
              lineHeight: 1.05,
              fontWeight: 400,
              letterSpacing: "-0.01em",
              animationDelay: "0.25s",
              animationFillMode: "forwards",
            }}
          >
            Цветы,<br />
            <em style={{ color: "hsl(var(--rose-light))", fontStyle: "italic" }}>говорящие</em>
            <br />за вас
          </h1>

          <p
            className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto mb-10 animate-fade-up opacity-0"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards", fontWeight: 300, lineHeight: 1.7 }}
          >
            Создаём авторские букеты, комнатные сады и оформляем самые важные моменты вашей жизни
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0"
            style={{ animationDelay: "0.55s", animationFillMode: "forwards" }}
          >
            <button className="btn-primary text-base px-10 py-4">
              Выбрать букет
            </button>
            <button
              className="border-2 border-white/60 text-white px-10 py-4 rounded-full font-medium transition-all duration-300 hover:bg-white/10"
            >
              Смотреть каталог
            </button>
          </div>

          {/* Stats row */}
          <div
            className="flex flex-wrap justify-center gap-8 mt-16 animate-fade-up opacity-0"
            style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
          >
            {[
              { value: "10+", label: "лет работы" },
              { value: "5 000+", label: "довольных клиентов" },
              { value: "500+", label: "видов цветов" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-4xl font-semibold" style={{ color: "hsl(var(--rose-light))" }}>{s.value}</div>
                <div className="text-sm opacity-70 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-xs animate-float">
          <span>листайте вниз</span>
          <Icon name="ChevronDown" size={20} />
        </div>
      </section>

      {/* SERVICES */}
      <section id="букеты" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <RevealSection className="text-center mb-16">
            <span className="section-tag">✦ Что мы предлагаем</span>
            <h2
              className="font-display mt-4"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 400, color: "hsl(var(--warm-dark))" }}
            >
              Наши услуги
            </h2>
            <p className="text-base mt-4 max-w-xl mx-auto" style={{ color: "hsl(var(--muted-foreground))", lineHeight: 1.7 }}>
              От нежного букета до грандиозного оформления — всё с любовью к деталям
            </p>
          </RevealSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s, i) => (
              <RevealSection key={s.title}>
                <div
                  className={`card-hover rounded-2xl p-7 ${s.color} border border-white/80 cursor-pointer h-full flex flex-col`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-white shadow-sm`}>
                    <Icon name={s.icon} size={22} className={s.iconColor} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2" style={{ color: "hsl(var(--warm-dark))" }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: "hsl(var(--muted-foreground))" }}>{s.desc}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="font-semibold text-sm" style={{ color: "hsl(var(--green))" }}>{s.price}</span>
                    <Icon name="ArrowRight" size={16} style={{ color: "hsl(var(--green))" }} />
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT BANNER */}
      <section
        id="о нас"
        className="py-24 px-6 relative overflow-hidden"
        style={{ background: "hsl(142 28% 28%)" }}
      >
        {/* Decorative blobs */}
        <div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-10"
          style={{ background: "hsl(var(--rose))", filter: "blur(60px)" }}
        />
        <div
          className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full opacity-10"
          style={{ background: "hsl(var(--green-light))", filter: "blur(50px)" }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <RevealSection>
              <span className="section-tag" style={{ color: "hsl(var(--rose-light))" }}>✦ О нас</span>
              <h2
                className="font-display mt-4 text-white"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 400, lineHeight: 1.15 }}
              >
                Флористика — это<br />
                <em style={{ color: "hsl(var(--rose-light))" }}>искусство эмоций</em>
              </h2>
              <p className="mt-6 text-base leading-relaxed" style={{ color: "hsl(0 0% 100% / 0.75)" }}>
                ВераГарден — авторская цветочная мастерская с 2014 года. Мы верим, что каждый цветок несёт особый смысл, а правильно составленный букет может сказать то, для чего не хватает слов.
              </p>
              <p className="mt-4 text-base leading-relaxed" style={{ color: "hsl(0 0% 100% / 0.75)" }}>
                Наши флористы регулярно проходят обучение в Европе, следят за трендами и создают композиции, которые становятся частью ваших историй.
              </p>
              <button className="mt-8 border-2 border-white/50 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:bg-white hover:text-green-800">
                Познакомиться ближе
              </button>
            </RevealSection>

            <RevealSection>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "Award", value: "10 лет", label: "на рынке флористики" },
                  { icon: "Users", value: "5 000+", label: "счастливых клиентов" },
                  { icon: "MapPin", value: "2 магазина", label: "в вашем городе" },
                  { icon: "Truck", value: "2–3 часа", label: "доставка по городу" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl p-6 text-center"
                    style={{ background: "hsl(0 0% 100% / 0.06)", border: "1px solid hsl(0 0% 100% / 0.1)" }}
                  >
                    <Icon name={item.icon} size={28} style={{ color: "hsl(var(--rose-light))" }} className="mx-auto mb-3" />
                    <div className="font-display text-2xl text-white font-medium">{item.value}</div>
                    <div className="text-xs mt-1" style={{ color: "hsl(0 0% 100% / 0.55)" }}>{item.label}</div>
                  </div>
                ))}
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 px-6" style={{ background: "hsl(var(--cream))" }}>
        <div className="max-w-7xl mx-auto">
          <RevealSection className="text-center mb-16">
            <span className="section-tag">✦ Почему мы</span>
            <h2
              className="font-display mt-4"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 400, color: "hsl(var(--warm-dark))" }}
            >
              Ценим каждую деталь
            </h2>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_ITEMS.map((item, i) => (
              <RevealSection key={item.title}>
                <div
                  className="text-center p-8 rounded-2xl bg-white card-hover"
                  style={{ boxShadow: "0 2px 20px hsl(142 28% 28% / 0.06)", transitionDelay: `${i * 100}ms` }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                    style={{ background: "hsl(var(--green-pale))" }}
                  >
                    <Icon name={item.icon} size={24} style={{ color: "hsl(var(--green))" }} />
                  </div>
                  <h3 className="font-semibold mb-2" style={{ color: "hsl(var(--warm-dark))" }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>{item.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <RevealSection className="text-center mb-16">
            <span className="section-tag">✦ Отзывы</span>
            <h2
              className="font-display mt-4"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 400, color: "hsl(var(--warm-dark))" }}
            >
              Говорят клиенты
            </h2>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <RevealSection key={r.name}>
                <div
                  className="p-8 rounded-2xl card-hover"
                  style={{
                    background: i % 2 === 1 ? "hsl(142 28% 28%)" : "hsl(var(--cream))",
                    transitionDelay: `${i * 100}ms`,
                  }}
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: r.stars }).map((_, j) => (
                      <span key={j} style={{ color: "hsl(var(--rose))" }}>★</span>
                    ))}
                  </div>
                  <p
                    className="text-base leading-relaxed mb-6 font-display italic"
                    style={{
                      color: i % 2 === 1 ? "hsl(0 0% 100% / 0.85)" : "hsl(var(--warm-dark))",
                      fontSize: "1.1rem",
                    }}
                  >
                    «{r.text}»
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm" style={{ color: i % 2 === 1 ? "hsl(0 0% 100% / 0.9)" : "hsl(var(--warm-dark))" }}>
                      {r.name}
                    </span>
                    <span className="text-xs" style={{ color: i % 2 === 1 ? "hsl(0 0% 100% / 0.4)" : "hsl(var(--muted-foreground))" }}>
                      {r.date}
                    </span>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        className="py-24 px-6 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, hsl(348 60% 60%) 0%, hsl(348 50% 45%) 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }}
        />
        <RevealSection className="max-w-3xl mx-auto text-center relative z-10">
          <h2
            className="font-display text-white mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 400 }}
          >
            Готовы удивить кого-то важного?
          </h2>
          <p className="text-white/80 text-lg mb-10 leading-relaxed">
            Позвоните нам или напишите — и мы создадим букет, который запомнят надолго
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+7"
              className="flex items-center justify-center gap-2 bg-white px-10 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{ color: "hsl(var(--rose))" }}
            >
              <Icon name="Phone" size={18} />
              Позвонить нам
            </a>
            <a
              href="https://wa.me/"
              className="flex items-center justify-center gap-2 border-2 border-white/60 text-white px-10 py-4 rounded-full font-medium transition-all duration-300 hover:bg-white/10"
            >
              <Icon name="MessageCircle" size={18} />
              Написать в WhatsApp
            </a>
          </div>
        </RevealSection>
      </section>

      {/* CONTACTS */}
      <section id="контакты" className="py-24 px-6" style={{ background: "hsl(var(--cream))" }}>
        <div className="max-w-7xl mx-auto">
          <RevealSection className="text-center mb-16">
            <span className="section-tag">✦ Контакты</span>
            <h2
              className="font-display mt-4"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 400, color: "hsl(var(--warm-dark))" }}
            >
              Найдите нас
            </h2>
          </RevealSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "Phone",
                title: "Телефон",
                lines: ["+7 (___) ___-__-__", "Ежедневно 9:00–21:00"],
                action: "Позвонить",
                href: "tel:+7",
              },
              {
                icon: "MapPin",
                title: "Адрес магазина",
                lines: ["ул. Цветочная, д. 1", "Ваш город"],
                action: "Построить маршрут",
                href: "#",
              },
              {
                icon: "Instagram",
                title: "Соцсети",
                lines: ["@veragarden", "Смотрите наши работы"],
                action: "Перейти",
                href: "https://instagram.com/veragarden",
              },
            ].map((c) => (
              <RevealSection key={c.title}>
                <div className="bg-white rounded-2xl p-8 text-center card-hover" style={{ boxShadow: "0 2px 20px hsl(142 28% 28% / 0.06)" }}>
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                    style={{ background: "hsl(var(--green-pale))" }}
                  >
                    <Icon name={c.icon} size={24} style={{ color: "hsl(var(--green))" }} />
                  </div>
                  <h3 className="font-semibold mb-3" style={{ color: "hsl(var(--warm-dark))" }}>{c.title}</h3>
                  {c.lines.map((l) => (
                    <p key={l} className="text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>{l}</p>
                  ))}
                  <a
                    href={c.href}
                    className="inline-block mt-5 text-sm font-medium"
                    style={{ color: "hsl(var(--green))" }}
                  >
                    {c.action} →
                  </a>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "hsl(var(--warm-dark))" }} className="py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-display text-2xl font-semibold text-white">
            🌿 ВераГарден
          </div>
          <p className="text-sm text-center" style={{ color: "hsl(0 0% 100% / 0.4)" }}>
            © 2024 ВераГарден. Авторская флористика с 2014 года.
          </p>
          <div className="flex gap-4">
            {["Instagram", "MessageCircle", "Phone"].map((icon) => (
              <button
                key={icon}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                style={{ background: "hsl(0 0% 100% / 0.08)" }}
              >
                <Icon name={icon} size={16} style={{ color: "hsl(0 0% 100% / 0.6)" }} />
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}