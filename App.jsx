import { useState, useEffect, useRef } from "react";
import "./App.css";

const NAV_LINKS = [
  { label: "教練簡介", href: "#coach" },
  { label: "文章", href: "#articles" },
  { label: "訓練班", href: "#training" },
  { label: "聯絡我們", href: "#contact" },
];

const PILLARS = [
  {
    number: "一",
    title: "改進跑步技術",
    img: "/images/technique-correction.jpg",
    body: "長跑比賽，最少千幾步，多則十幾萬步。跑步姿勢對比賽結果的影響不言而喻。只有極少數人能察覺自己跑姿的細微變化，從而改變肌肉收縮幅度、方向以達成最有效率的跑姿。每一步浪費一點能量，一場比賽便可以浪費幾個名次。",
  },
  {
    number: "二",
    title: "課表強度適中",
    img: "/images/tough-training.jpg",
    body: "訓練強度太高使人受傷，訓練強度太低使人停滯不前。訓練是科學，但同時也是一種藝術。教練不能單靠書本上的知識去判斷甚麼的訓練最適合運動員。一個好教練在制定訓練時需要配合自己的刻苦訓練歷練，也要有多年培育運動員的經驗。",
  },
  {
    number: "三",
    title: "訓練團隊合作",
    img: "/images/team.jpg",
    body: "一枝竹易折彎，幾枝竹斷折難。強如前馬拉松世界紀錄保持者Kipchoge，也會認為團隊十分重要。長跑訓練一定會遇上難關，每個人都必須努力克服困難，才能在比賽中嘗到勝利的甘甜。有人陪你氣喘腳軟，在你想放棄時鼓勵你完成艱苦訓練，事半功倍。",
  },
];

const TESTIMONIALS = [
  {
    name: "Woody 胡文津",
    since: "自2012年跟隨王教練",
    img: "/images/woody.png",
    quote:
      "王教練在我修讀醫療課程及長跑路上擔當不可或缺的角色。她是我的榜樣。她推動我、鼓勵我在跑步及照顧病人上不遺餘力。她看重運動員的健康與心理狀態，日復日提供有效反饋。我從5歲起便是一個競技運動員，在25年的運動生涯中，王教練是我所遇過最關懷、最博學的教練。",
  },
  {
    name: "David Walma",
    since: "自2022年跟隨王教練",
    img: "/images/dave.png",
    quote:
      "王教練所著重的並非只是計時器上面的數字，而是每一個運動員的心理狀態。每一個學生的性格與特質不同，而他需要根據每一個學生的能力套用不同的訓練模式。我們跑隊的年齡層由3歲至60歲，教練要照顧不同人需要，實在不容易。",
  },
  {
    name: "曲奇 / Nicole Lau",
    since: "自2009年跟隨王教練至今",
    img: "/images/cookie.png",
    quote:
      "感恩由開始跑步後不久就隨王教練至今，而我亦由10K距離慢慢跑到馬拉松、100公里、甚至更長的距離。王教練因材施教，對我這個經常在練習時「跳車」的懶人，總會寄語鼓勵。",
  },
  {
    name: "啊聶",
    since: "自2013年跟隨王教練至今",
    img: "/images/nip.png",
    quote:
      "雖然王教練有著豐富經驗和對長跑的深入理解，但她卻是我遇過最願意聆聽運動員的教練。她會按著我的情緒狀態，身體狀況調整計劃，讓我在當刻做最有效的訓練。我從沒覺得自己是個只會執行計劃跑步機器。",
  },
  {
    name: "Leo 鍾廣安",
    since: "自2013跟隨王教練至今",
    img: "/images/leo.png",
    quote:
      "王教練……一位亦師亦友嘅教練，除咗令我跑步上有所改進提升之外，亦會分享做人嘅態度，而每當遇上困難向教練請教，必然得到詳盡而有用嘅答案。",
  },
  {
    name: "怪獸",
    since: "自2020跟隨王教練至今",
    img: "/images/fer.png",
    quote:
      "記得一開始跟王教練訓練是在疫情初期，當時的運動場及體育館都關閉。但王教練沒有放棄我哋，逢星期一、三及五早上在城門河邊訓練。基本上風雨不改，由基本功開始做起，調整好跑姿先可以走得更快更遠。",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [lang, setLang] = useState("zh");
  const intervalRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveTestimonial((p) => (p + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const goTo = (i) => {
    setActiveTestimonial(i);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveTestimonial((p) => (p + 1) % TESTIMONIALS.length);
    }, 5000);
  };

  return (
    <div className="app">
      {/* NAV */}
      <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
        <a href="#home" className="nav__logo">
          <img src="/images/ProRC-logo.png" alt="Pro Running Club" />
        </a>
        <div className={`nav__links ${menuOpen ? "nav__links--open" : ""}`}>
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <button
            className="lang-toggle"
            onClick={() => setLang(lang === "zh" ? "en" : "zh")}
          >
            {lang === "zh" ? "English" : "中文"}
          </button>
        </div>
        <button
          className="nav__burger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero__overlay" />
        <img
          src="/images/hero.jpg"
          alt="Runners"
          className="hero__img"
        />
        <div className="hero__content">
          <p className="hero__sub">長跑達人 Pro-Running Club</p>
          <h1 className="hero__title">
            愈跑<span className="accent">．</span>越強
          </h1>
          <p className="hero__tagline">重複日常訓練 ｜ 不停超越自己</p>
          <a href="#pillars" className="btn btn--outline">了解更多</a>
        </div>
        <div className="hero__scroll-hint">
          <span />
        </div>
      </section>

      {/* PILLARS INTRO */}
      <section className="intro">
        <div className="container">
          <h2 className="section-title">進步，源自有效的訓練</h2>
          <p className="section-sub">唯獨有效的訓練能使人不斷進步，而有效訓練應有三大要素：</p>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section id="pillars" className="pillars">
        <div className="container">
          {PILLARS.map((p, i) => (
            <div key={i} className={`pillar ${i % 2 === 1 ? "pillar--reverse" : ""}`}>
              <div className="pillar__img-wrap">
                <img src={p.img} alt={p.title} />
                <div className="pillar__num">{p.number}</div>
              </div>
              <div className="pillar__text">
                <h3 className="pillar__title">{p.title}</h3>
                <p>{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title section-title--light">學員心聲</h2>
          <div className="testi__stage">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className={`testi__card ${i === activeTestimonial ? "testi__card--active" : ""}`}
              >
                <div className="testi__avatar">
                  <img src={t.img} alt={t.name} />
                </div>
                <blockquote className="testi__quote">"{t.quote}"</blockquote>
                <div className="testi__meta">
                  <strong>{t.name}</strong>
                  <span>{t.since}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="testi__dots">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === activeTestimonial ? "dot--active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="philosophy">
        <div className="container philosophy__inner">
          <div className="philosophy__text">
            <h2 className="section-title">融合科學與經驗</h2>
            <p>
              訓練是人性化的。每人有不同需要，因此不能單靠科學定理決定應該如何訓練。但單靠經驗，則有可能變得主觀、因循苟且，甚至變成土法煉鋼。
            </p>
            <p>所以訓練必需結合科學與經驗，才能達成最佳效果。</p>
            <div className="stats">
              <div className="stat">
                <span className="stat__num">15+</span>
                <span className="stat__label">年教練經驗</span>
              </div>
              <div className="stat">
                <span className="stat__num">3–60</span>
                <span className="stat__label">歲學員年齡</span>
              </div>
              <div className="stat">
                <span className="stat__num">100+</span>
                <span className="stat__label">公里賽事</span>
              </div>
            </div>
          </div>
          <div className="philosophy__img">
            <img src="/images/team2.jpg" alt="Team training" />
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section id="articles" className="articles">
        <div className="container">
          <h2 className="section-title">長跑知多啲</h2>
          <div className="article-grid">
            <div className="article-card">
              <img src="/images/running-shoes.jpg" alt="Running shoes" />
              <div className="article-card__body">
                <span className="article-card__tag">裝備</span>
                <h3>《人鞋合一》（一）</h3>
                <p>
                  選擇合適的長跑訓練鞋到底有有甚秘訣？薄底？厚底？碳板？了解各種鞋子的能力，選鞋自然沒有難度。
                </p>
                <a href="#articles" className="btn btn--text">更多資訊 →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT / CTA */}
      <section id="training" className="about">
        <div className="container about__inner">
          <div className="about__img">
            <img src="/images/club.jpg" alt="Pro Running Club" />
          </div>
          <div className="about__text">
            <h2 className="section-title">長跑達人 Pro-Running Club</h2>
            <p>
              透過訓練，我們希望每個學員都能成為長跑達人，在自己的人生跑道上寫下自己的精彩故事。
            </p>
            <p>
              跑步不但能使人身體強健，達致身心的愉悅；它亦能培養人的毅力，使人勇於面對困難，往目標邁進。
            </p>
            <p>
              我們希望嚴謹、刻苦的精英訓練會使精英運動員獲得理想成績，並因自己發光發熱將自己的熱血滲透到大眾當中，使大眾愛上長跑。
            </p>
            <a href="#contact" className="btn btn--primary">立即聯絡我們</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="footer">
        <div className="container footer__inner">
          <div className="footer__brand">
            <img src="/images/ProRC-logo.png" alt="Pro Running Club" className="footer__logo" />
            <p>愈跑．越強</p>
          </div>
          <div className="footer__links">
            <h4>快速連結</h4>
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href}>{l.label}</a>
            ))}
          </div>
          <div className="footer__social">
            <h4>獲取最新資訊</h4>
            <p>訂閱我們的社交媒體以獲取最新動向！</p>
            <div className="social-links">
              <a
                href="https://www.facebook.com/prorunningclub"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/pro_runningclub"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} 長跑達人 Pro-Running Club. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
