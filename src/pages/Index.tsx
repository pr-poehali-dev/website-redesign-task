import { useState } from "react";
import Icon from "@/components/ui/icon";

const BANNERS = [
  {
    img: "https://cdn.poehali.dev/projects/cdd4c5b4-bcdb-42e8-9626-9645b0de00b0/files/37674fb1-341b-4100-b630-8b3dd692fce2.jpg",
    tag: "Новое поступление",
    title: "Весенние луковичные",
    subtitle: "Ирисы, пионы, бегонии, георгины, гладиолусы",
    cta: "Смотреть",
    bg: "hsl(101 50% 22%)",
    accent: "hsl(35 90% 52%)",
    wide: true,
  },
  {
    img: "https://cdn.poehali.dev/projects/cdd4c5b4-bcdb-42e8-9626-9645b0de00b0/files/225eb839-5671-40da-ad96-9104a04fa5ad.jpg",
    tag: "Сезон посадки",
    title: "Семена овощей",
    subtitle: "Более 500 сортов от ведущих производителей",
    cta: "В каталог",
    bg: "hsl(200 55% 22%)",
    accent: "hsl(101 50% 48%)",
    wide: false,
  },
  {
    img: "https://cdn.poehali.dev/projects/cdd4c5b4-bcdb-42e8-9626-9645b0de00b0/files/22f64ce1-7087-4cc4-b666-b3cf737d3d11.jpg",
    tag: "Всё для рассады",
    title: "Грунты и удобрения",
    subtitle: "Грунт для рассады, торф, стимуляторы роста",
    cta: "Выбрать",
    bg: "hsl(35 60% 25%)",
    accent: "hsl(35 90% 58%)",
    wide: false,
  },
];

// ── Sidebar categories ──────────────────────────────────────────
const SIDEBAR = [
  {
    group: "Семена",
    items: ["Овощи", "Цветы", "Газоны, сидераты", "Грибы (мицелий)", "Пряные и лекарственные травы", "Семена картофеля", "Ягоды"],
  },
  {
    group: "Системы посадки",
    items: ["Горшки", "Кассеты", "Кашпо", "Наборы"],
  },
  {
    group: "Луковичные",
    items: ["Гиацинты", "Крокусы", "Лилии", "Нарциссы", "Разнолуковичные цветы", "Тюльпаны", "Георгины", "Пионы", "Гладиолусы", "Земляника садовая", "Бегонии, глоксинии", "Ирисы", "Канны", "Клематисы", "Лилейник", "Каллы"],
  },
  {
    group: "Грунты",
    items: ["Грунт для рассады", "Грунт специализированный", "Грунт универсальный", "Дренаж", "Торф"],
  },
  {
    group: "Удобрения, стимуляторы",
    items: ["Стимуляторы роста", "Удобрения жидкие", "Удобрения сухие"],
  },
  {
    group: "Укрывной материал",
    items: ["Пленка", "Спанбонд", "Дуги для парников", "Распылители"],
  },
  {
    group: "Защита растений",
    items: ["Средства от болезней", "Средства от вредителей", "Средства от сорняков"],
  },
  {
    group: "Средства защиты дома",
    items: ["Средства защиты от летающих насекомых", "Средства защиты от грызунов и насекомых", "Септики"],
  },
  {
    group: "Перчатки",
    items: ["Перчатки нейлоновые", "Перчатки х/б", "Перчатки хозяйственные"],
  },
  {
    group: "Шпагат",
    items: ["Шпагат полипропиленовый", "Шпагат лен", "Шпагат джутовый"],
  },
];

// ── Main categories grid ─────────────────────────────────────────
const CATEGORIES = [
  { emoji: "🌱", label: "Семена", color: "#e8f5e9" },
  { emoji: "🪴", label: "Системы посадки", color: "#e3f2fd" },
  { emoji: "🌷", label: "Луковичные", color: "#fce4ec" },
  { emoji: "🪣", label: "Грунты", color: "#fff3e0" },
  { emoji: "💧", label: "Удобрения, стимуляторы", color: "#e0f7fa" },
  { emoji: "🛡️", label: "Укрывной материал", color: "#f3e5f5" },
  { emoji: "🐛", label: "Защита растений", color: "#fff9c4" },
  { emoji: "🏠", label: "Средства защиты дома", color: "#fbe9e7" },
  { emoji: "🧤", label: "Перчатки", color: "#e8eaf6" },
  { emoji: "🧵", label: "Шпагат", color: "#f1f8e9" },
];

// ── Cassette sub-categories ──────────────────────────────────────
const CASSETTES = [
  { label: "серии XD" }, { label: "серии XS" }, { label: "серии XT" }, { label: "серии XQ" },
];
const SETS = [
  { label: "крышки" }, { label: "наборы" }, { label: "поддоны" },
];

// ── Seeds sub-categories ─────────────────────────────────────────
const SEED_SUBS = ["Овощи", "Цветы", "Газоны, сидераты", "Грибы (мицелий)", "Пряные и лекарственные травы", "Семена картофеля", "Ягоды"];
const SEED_CATS = [
  { emoji: "🥦", label: "Овощи" },
  { emoji: "🌿", label: "Сидераты" },
  { emoji: "🌸", label: "Цветы" },
  { emoji: "🍓", label: "Ягоды" },
];

// ── Producers ────────────────────────────────────────────────────
const PRODUCERS = ["Гавриш", "Уральский дачник", "Premium", "AgroElita", "Русский Огород", "Агрофирма Партнёр", "Аэлита"];

// ── Pots sub-categories ──────────────────────────────────────────
const POT_SUBS = ["Кашпо", "Горшки круглые", "Горшки квадратные", "Транспортировочные кассеты под круглые горшки", "Транспортировочные кассеты под квадратные горшки"];

// ── Search results (sample products) ────────────────────────────
const PRODUCTS = [
  {
    id: 1, img: "https://cdn.poehali.dev/projects/cdd4c5b4-bcdb-42e8-9626-9645b0de00b0/bucket/2dfda2f7-f3e4-4d01-b830-e25afd8f58b7.jpg",
    name: "Земляника Радость Денницы F1",
    desc: "крупноплодная ремонтант.(клубника) (ран.спел., конич., яр.-красн., сладк., 30-50 г). Евро, 15",
    category: "СЕМЕНА / ЯГОДЫ",
    maker: "СеДеК", stock: true, rozn: 79.80, mopt: 66.92, opt: 61.78,
  },
  {
    id: 2, img: "",
    name: "Арбуз Большая Пекинская Радость F1",
    desc: "ср.ранний,ОГ, плод 8-16кг, кора тонкая, мякоть ярко-красн., зернистая, оч.сладкий, сахар > 12%). Евр",
    category: "СЕМЕНА / ОВОЩИ / АРБУЗЫ",
    maker: "СеДеК", stock: true, rozn: 57.50, mopt: 48.26, opt: 44.54,
  },
  {
    id: 3, img: "",
    name: "Арбуз Пекинская Радость Деликагесная F1",
    desc: "ср.ранний, ОГ/ТГ,плод до 3 кг,кора тонкая,мякоть кр.-малин., сахарная, для употр. в св.виде, приго",
    category: "СЕМЕНА / ОВОЩИ / АРБУЗЫ",
    maker: "СеДеК", stock: true, rozn: 38.30, mopt: 32.11, opt: 29.64,
  },
  {
    id: 4, img: "",
    name: "Горох Детская радость",
    desc: "(6-8 горошин, обильное плодоношение). Евро, 5",
    category: "СЕМЕНА / ОВОЩИ / ГОРОХ",
    maker: "СеДеК", stock: false, rozn: 16.20, mopt: 13.61, opt: 12.56,
  },
  {
    id: 5, img: "",
    name: "Кукуруза Внучкина Радость F1",
    desc: "(поп-корн) (ск.спел., початк.сах.конич., 10-12 см, оранж., 220-280 г). Евро, 5",
    category: "СЕМЕНА / ОВОЩИ / КУКУРУЗА",
    maker: "СеДеК", stock: true, rozn: 16.20, mopt: 13.61, opt: 12.56,
  },
  {
    id: 6, img: "",
    name: "Морковь Детская радость",
    desc: "Ц/П, 2г",
    category: "СЕМЕНА / ОВОЩИ / МОРКОВЬ",
    maker: "Аэлита", stock: true, rozn: 15.60, mopt: 12.64, opt: 12.15,
  },
  {
    id: 7, img: "",
    name: "Огурец Всем на радость F1",
    desc: "Ц/П, 10шт, партенокарпический",
    category: "СЕМЕНА / ОВОЩИ / ОГУРЦЫ",
    maker: "Аэлита", stock: true, rozn: 32.00, mopt: 25.99, opt: 24.99,
  },
  {
    id: 8, img: "",
    name: "Редис Внучкина радость®",
    desc: "(XИТ! кого.спел., ОГ,цил.-цилиндр.,роз.-красн.с бел.конч.,/бел.св.остр., 15-25 г). Евро, 2",
    category: "СЕМЕНА / ОВОЩИ / РЕДИС, РЕДЬКА, РЕПА, ДАЙКОН",
    maker: "СеДеК", stock: false, rozn: 16.20, mopt: 13.61, opt: 12.56,
  },
];

type Page = "home" | "catalog";

export default function Index() {
  const [page, setPage] = useState<Page>("home");
  const [search, setSearch] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [quantities, setQuantities] = useState<Record<number, number>>({});
  const [activeCat, setActiveCat] = useState<string | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      setSearchQuery(search.trim());
      setPage("catalog");
    }
  };

  const addToCart = (id: number) => {
    setCartCount(c => c + (quantities[id] || 1));
  };

  const setQty = (id: number, val: number) => {
    setQuantities(q => ({ ...q, [id]: Math.max(1, val) }));
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Golos Text', sans-serif", fontSize: 14 }}>

      {/* ── TOP BAR ── */}
      <div style={{ background: "hsl(101 45% 32%)" }} className="py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs" style={{ color: "rgba(255,255,255,0.85)" }}>
          <span>394033, Россия, г. Воронеж, Ленинский проспект, д.176, помещение 58.6</span>
          <span>Пн.–Пт.: 09:00–19:00 &nbsp;·&nbsp; Сб., Вс.: 09:00–17:00</span>
        </div>
      </div>

      {/* ── HEADER ── */}
      <header className="border-b border-gray-100 bg-white sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4 flex-wrap">
          {/* Logo */}
          <button onClick={() => setPage("home")} className="flex-shrink-0 flex items-center gap-1">
            <span className="font-display font-bold text-xl" style={{ color: "hsl(101 45% 28%)" }}>
              VERA<span style={{ color: "hsl(35 90% 52%)" }}>GARDEN</span>
            </span>
          </button>

          {/* Search */}
          <form onSubmit={handleSearch} className="flex-1 max-w-xl flex">
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Поиск по каталогу..."
              className="flex-1 px-4 py-2 text-sm border border-gray-200 rounded-l-lg outline-none focus:border-green-500 transition-colors"
              style={{ minWidth: 0 }}
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-r-lg text-white text-sm font-medium transition-colors"
              style={{ background: "hsl(101 45% 32%)" }}
            >
              <Icon name="Search" size={16} />
            </button>
          </form>

          {/* Contacts */}
          <div className="text-right text-xs hidden lg:block" style={{ color: "hsl(210 10% 45%)" }}>
            <div><a href="mailto:sales@veragarden.ru" className="hover:text-green-700">sales@veragarden.ru</a></div>
            <div className="font-semibold" style={{ color: "hsl(101 45% 28%)", fontSize: 15 }}>
              +7 (473) 300-40-71
            </div>
            <div style={{ color: "hsl(210 10% 55%)" }}>300-40-72</div>
          </div>

          {/* Cart */}
          <button
            onClick={() => setPage("catalog")}
            className="flex items-center gap-2 px-3 py-2 rounded-lg transition-colors relative"
            style={{ background: cartCount > 0 ? "hsl(101 45% 32%)" : "hsl(101 30% 95%)" }}
          >
            <Icon name="ShoppingCart" size={18} style={{ color: cartCount > 0 ? "white" : "hsl(101 45% 32%)" }} />
            <span className="text-sm font-semibold" style={{ color: cartCount > 0 ? "white" : "hsl(101 45% 32%)" }}>
              {(cartCount * 0).toFixed(2)} руб.
            </span>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Nav */}
        <nav className="max-w-7xl mx-auto px-4 py-2 flex gap-6 border-t border-gray-50">
          {[
            { label: "Главная", p: "home" as Page },
            { label: "Каталог", p: "catalog" as Page },
          ].map(({ label, p }) => (
            <button
              key={label}
              onClick={() => { setPage(p); if (p === "catalog") setSearchQuery(""); }}
              className="text-sm font-medium transition-colors pb-1"
              style={{
                color: page === p ? "hsl(101 45% 32%)" : "hsl(210 15% 30%)",
                borderBottom: page === p ? "2px solid hsl(101 45% 32%)" : "2px solid transparent",
              }}
            >
              {label}
            </button>
          ))}
          <button className="text-sm font-medium transition-colors pb-1" style={{ color: "hsl(210 15% 30%)", borderBottom: "2px solid transparent" }}>
            Порядок работы
          </button>
          <button className="text-sm font-medium transition-colors pb-1" style={{ color: "hsl(210 15% 30%)", borderBottom: "2px solid transparent" }}>
            Контакты
          </button>
        </nav>
      </header>

      {/* ════════════════ HOME PAGE ════════════════ */}
      {page === "home" && (
        <main className="max-w-7xl mx-auto px-4 py-6 animate-fade-in">

          {/* Hero banners grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8" style={{ gridTemplateRows: "auto" }}>
            {BANNERS.map((b, i) => (
              <div
                key={i}
                className={`relative rounded-xl overflow-hidden flex items-end cursor-pointer group ${i === 0 ? "md:row-span-2 md:col-span-1" : ""}`}
                style={{ minHeight: i === 0 ? 320 : 150, background: b.bg }}
                onClick={() => setPage("catalog")}
              >
                {/* Photo */}
                <img
                  src={b.img}
                  alt={b.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-500"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)" }}
                />
                {/* Content */}
                <div className="relative z-10 p-5 text-white w-full">
                  <div
                    className="inline-block text-xs font-semibold uppercase tracking-widest mb-1 px-2 py-0.5 rounded-full mb-2"
                    style={{ background: b.accent, color: "white", fontSize: 10 }}
                  >
                    {b.tag}
                  </div>
                  <h2 className={`font-display font-bold leading-tight mb-1 ${i === 0 ? "text-2xl" : "text-base"}`}>
                    {b.title}
                  </h2>
                  <p className="text-xs opacity-75 mb-3 leading-relaxed">{b.subtitle}</p>
                  <button
                    className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-200 hover:brightness-90"
                    style={{ background: b.accent, color: "white" }}
                  >
                    {b.cta} <Icon name="ArrowRight" size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Main category grid */}
          <section className="mb-8">
            <h2 className="font-display font-bold text-lg mb-4" style={{ color: "hsl(101 45% 28%)" }}>
              Категории товаров
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.label}
                  onClick={() => { setPage("catalog"); setSearchQuery(cat.label); setActiveCat(cat.label); }}
                  className="cat-card"
                  style={{ background: cat.color }}
                >
                  <span className="text-3xl">{cat.emoji}</span>
                  <span className="text-xs font-medium leading-tight" style={{ color: "hsl(210 15% 25%)" }}>
                    {cat.label}
                  </span>
                </button>
              ))}
            </div>
          </section>

          {/* Cassettes section */}
          <section className="mb-8 rounded-xl border border-gray-100 p-5" style={{ background: "hsl(210 15% 98%)" }}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-display font-bold text-base mb-3" style={{ color: "hsl(101 45% 28%)" }}>КАССЕТЫ</h3>
                <ul className="space-y-1">
                  {CASSETTES.map(c => (
                    <li key={c.label} className="flex items-center gap-2 text-sm cursor-pointer hover:text-green-700 transition-colors" style={{ color: "hsl(210 15% 30%)" }}>
                      <span style={{ color: "hsl(35 90% 52%)" }}>•</span> {c.label}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display font-bold text-base mb-3" style={{ color: "hsl(101 45% 28%)" }}>НАБОРЫ</h3>
                <ul className="space-y-1">
                  {SETS.map(s => (
                    <li key={s.label} className="flex items-center gap-2 text-sm cursor-pointer hover:text-green-700 transition-colors" style={{ color: "hsl(210 15% 30%)" }}>
                      <span style={{ color: "hsl(35 90% 52%)" }}>•</span> {s.label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Seeds section */}
          <section className="mb-8">
            <div className="flex gap-8">
              <div className="w-44 flex-shrink-0">
                <h3 className="font-display font-bold text-base mb-3" style={{ color: "hsl(101 45% 28%)" }}>СЕМЕНА</h3>
                <ul className="space-y-1">
                  {SEED_SUBS.map(s => (
                    <li key={s} className="sidebar-link text-xs">{s}</li>
                  ))}
                </ul>
                <div className="mt-4">
                  <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "hsl(210 10% 50%)" }}>
                    Семена от ведущих производителей
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {PRODUCERS.map(p => (
                      <span key={p} className="badge-green text-xs cursor-pointer hover:bg-green-100 transition-colors">{p}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {SEED_CATS.map(cat => (
                    <button
                      key={cat.label}
                      onClick={() => { setPage("catalog"); setSearchQuery(cat.label); }}
                      className="cat-card border border-gray-100 bg-white hover:shadow-md"
                    >
                      <span className="text-4xl">{cat.emoji}</span>
                      <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: "hsl(210 15% 35%)" }}>
                        {cat.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Pots section */}
          <section className="mb-8 rounded-xl border border-gray-100 p-5" style={{ background: "hsl(210 15% 98%)" }}>
            <div className="flex gap-8 items-start">
              <div className="text-5xl">🪴</div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-base mb-3" style={{ color: "hsl(101 45% 28%)" }}>ГОРШОЧКИ</h3>
                <ul className="space-y-1">
                  {POT_SUBS.map(s => (
                    <li key={s} className="flex items-center gap-2 text-sm cursor-pointer hover:text-green-700 transition-colors" style={{ color: "hsl(210 15% 30%)" }}>
                      <span style={{ color: "hsl(35 90% 52%)" }}>•</span> {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

        </main>
      )}

      {/* ════════════════ CATALOG / SEARCH PAGE ════════════════ */}
      {page === "catalog" && (
        <div className="max-w-7xl mx-auto px-4 py-6 flex gap-5 animate-fade-in">

          {/* Sidebar */}
          <aside className="hidden lg:block w-52 flex-shrink-0">
            <div className="sticky top-28">
              {SIDEBAR.map((group) => (
                <div key={group.group}>
                  <div className="sidebar-group-title">{group.group}</div>
                  {group.items.map(item => (
                    <button
                      key={item}
                      onClick={() => setSearchQuery(item)}
                      className={`sidebar-link w-full text-left ${searchQuery === item ? "bg-green-50 text-green-700 font-medium" : ""}`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </aside>

          {/* Main */}
          <main className="flex-1 min-w-0">
            <h1 className="font-display font-bold text-xl mb-1" style={{ color: "hsl(101 45% 28%)" }}>
              Поиск по каталогу
            </h1>

            {searchQuery && (
              <div className="text-sm mb-4" style={{ color: "hsl(210 10% 45%)" }}>
                Результат поиска по запросу:{" "}
                <span className="font-semibold" style={{ color: "hsl(101 45% 32%)" }}>
                  {searchQuery}
                </span>
                <span className="ml-3 text-xs badge-green">{PRODUCTS.length} товаров</span>
              </div>
            )}

            {!searchQuery && (
              <div className="text-sm mb-4" style={{ color: "hsl(210 10% 50%)" }}>
                Выберите категорию слева или введите запрос в поиске
              </div>
            )}

            {/* Table header */}
            <div
              className="hidden md:grid gap-3 px-4 py-2 rounded-t-lg text-xs font-semibold uppercase tracking-wide"
              style={{
                gridTemplateColumns: "72px 1fr 120px 80px 60px 60px 60px 90px",
                background: "hsl(101 30% 95%)",
                color: "hsl(101 45% 28%)",
              }}
            >
              <div></div>
              <div>Наименование</div>
              <div>Производитель</div>
              <div>Склад</div>
              <div className="text-right">Розн.</div>
              <div className="text-right">М.Опт</div>
              <div className="text-right">Опт</div>
              <div className="text-center">Заказ</div>
            </div>

            {/* Product rows */}
            <div className="border border-gray-100 rounded-b-lg overflow-hidden">
              {PRODUCTS.map((p, i) => (
                <div key={p.id} className="animate-fade-up" style={{ animationDelay: `${i * 50}ms`, opacity: 0, animationFillMode: "forwards" }}>
                  {/* Category separator */}
                  {(i === 0 || PRODUCTS[i - 1].category !== p.category) && (
                    <div
                      className="px-4 py-2 text-xs font-bold uppercase tracking-wide border-t border-gray-100"
                      style={{ background: "hsl(210 15% 97%)", color: "hsl(210 10% 45%)" }}
                    >
                      {p.category}
                    </div>
                  )}

                  {/* Row */}
                  <div
                    className="hidden md:grid items-center gap-3 px-4 py-3 transition-colors hover:bg-green-50 cursor-pointer border-b border-gray-50"
                    style={{ gridTemplateColumns: "72px 1fr 120px 80px 60px 60px 60px 90px" }}
                  >
                    {/* Image */}
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center border border-gray-100">
                      {p.img ? (
                        <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-2xl">🌱</span>
                      )}
                    </div>

                    {/* Name + desc */}
                    <div>
                      <div className="font-semibold text-sm leading-snug mb-0.5" style={{ color: "hsl(101 45% 28%)" }}>{p.name}</div>
                      <div className="text-xs leading-relaxed" style={{ color: "hsl(210 10% 55%)" }}>{p.desc}</div>
                    </div>

                    {/* Maker */}
                    <div className="text-sm" style={{ color: "hsl(210 15% 35%)" }}>{p.maker}</div>

                    {/* Stock */}
                    <div>
                      {p.stock ? (
                        <span className="badge-green">в наличии</span>
                      ) : (
                        <span className="badge-red">отсутствует</span>
                      )}
                    </div>

                    {/* Prices */}
                    <div className="text-right text-sm font-semibold" style={{ color: "hsl(210 15% 20%)" }}>
                      {p.rozn.toFixed(2)}
                    </div>
                    <div className="text-right text-sm" style={{ color: "hsl(210 10% 45%)" }}>
                      {p.mopt.toFixed(2)}
                    </div>
                    <div className="text-right text-sm" style={{ color: "hsl(210 10% 45%)" }}>
                      {p.opt.toFixed(2)}
                    </div>

                    {/* Order */}
                    <div className="flex items-center gap-1 justify-center">
                      <button
                        onClick={() => setQty(p.id, (quantities[p.id] || 1) - 1)}
                        className="w-6 h-6 rounded border border-gray-200 flex items-center justify-center text-xs hover:bg-gray-100 transition-colors"
                        style={{ color: "hsl(210 15% 40%)" }}
                      >−</button>
                      <input
                        type="number"
                        value={quantities[p.id] || 1}
                        onChange={e => setQty(p.id, parseInt(e.target.value) || 1)}
                        className="w-8 text-center text-xs border border-gray-200 rounded py-1 outline-none"
                      />
                      <button
                        onClick={() => addToCart(p.id)}
                        className="w-6 h-6 rounded flex items-center justify-center text-white text-xs transition-colors hover:brightness-90"
                        style={{ background: "hsl(101 45% 32%)" }}
                      >
                        <Icon name="Plus" size={12} />
                      </button>
                    </div>
                  </div>

                  {/* Mobile row */}
                  <div className="md:hidden flex gap-3 px-4 py-3 border-b border-gray-50 hover:bg-green-50 transition-colors">
                    <div className="w-14 h-14 rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center flex-shrink-0 border border-gray-100">
                      {p.img ? <img src={p.img} alt={p.name} className="w-full h-full object-cover" /> : <span className="text-xl">🌱</span>}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm mb-0.5 leading-snug" style={{ color: "hsl(101 45% 28%)" }}>{p.name}</div>
                      <div className="text-xs mb-1" style={{ color: "hsl(210 10% 55%)" }}>{p.maker}</div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold text-sm" style={{ color: "hsl(210 15% 20%)" }}>{p.rozn.toFixed(2)} руб.</span>
                        {p.stock ? <span className="badge-green">в наличии</span> : <span className="badge-red">отсутствует</span>}
                        <button
                          onClick={() => addToCart(p.id)}
                          className="ml-auto px-3 py-1 rounded text-white text-xs font-medium"
                          style={{ background: "hsl(101 45% 32%)" }}
                        >
                          В корзину
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-5">
              <div className="text-xs" style={{ color: "hsl(210 10% 50%)" }}>
                Записей на странице:
                {[30, 50, 100, 200].map(n => (
                  <button key={n} className="ml-2 px-2 py-0.5 rounded text-xs transition-colors hover:bg-green-50" style={{ color: "hsl(101 45% 32%)" }}>
                    {n}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button className="text-xs px-3 py-1 rounded border border-gray-200 hover:bg-gray-50 transition-colors" style={{ color: "hsl(210 10% 45%)" }}>
                  Назад
                </button>
                <span
                  className="text-xs px-3 py-1 rounded text-white font-semibold"
                  style={{ background: "hsl(101 45% 32%)" }}
                >1</span>
                <button className="text-xs px-3 py-1 rounded border border-gray-200 hover:bg-gray-50 transition-colors" style={{ color: "hsl(210 10% 45%)" }}>
                  Далее
                </button>
              </div>
            </div>
          </main>
        </div>
      )}

      {/* ── FOOTER ── */}
      <footer className="mt-12 border-t border-gray-100" style={{ background: "hsl(210 15% 12%)" }}>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <div className="font-display font-bold text-base mb-3" style={{ color: "white" }}>
                VERA<span style={{ color: "hsl(35 90% 60%)" }}>GARDEN</span>
              </div>
              <div className="text-xs space-y-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                <p>394033, Россия, г. Воронеж</p>
                <p>Ленинский проспект, д.176, помещение 58.6</p>
                <p>Тел./факс: +7 (473) 300-40-71, 300-40-72</p>
                <p>E-mail: <a href="mailto:sales@veragarden.ru" className="hover:text-green-400 transition-colors">sales@veragarden.ru</a></p>
              </div>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>Время работы</div>
              <div className="text-xs space-y-1" style={{ color: "rgba(255,255,255,0.55)" }}>
                <p>Магазин: Пн.–Пт.: 09:00–19:00, Сб., Вс.: 09:00–17:00</p>
                <p>Офис/склад: Пн.–Пт.: 08:00–17:00, Сб., Вс.: выходной</p>
              </div>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>Навигация</div>
              <div className="flex flex-col gap-1.5">
                {["Главная", "Порядок работы", "Контакты"].map(l => (
                  <button key={l} className="text-xs text-left transition-colors hover:text-green-400" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t pt-4 flex items-center justify-between" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>© 2024 ВераГарден</span>
            <div className="flex gap-3">
              <a href="mailto:sales@veragarden.ru" className="transition-colors hover:text-green-400" style={{ color: "rgba(255,255,255,0.35)" }}>
                <Icon name="Mail" size={15} />
              </a>
              <a href="tel:+74733004071" className="transition-colors hover:text-green-400" style={{ color: "rgba(255,255,255,0.35)" }}>
                <Icon name="Phone" size={15} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}