import { useState, useEffect, useRef } from 'react'
import '../styles/engineering.css'

console.log("🔥 JAX Acode Connected");

const cards = [
  { icon: '/b7.png', title: 'اللغه العربيه', text: 'كتاب اللغه العربيه' },
  { icon: '/b6.png', title: 'اللغه الانجليزيه', text: 'كتاب اللغه الانجليزيه' },
  { icon: '/b8.png', title: 'التاريخ الوطني', text: 'كتاب مادة الوطنيه' },
  { icon: '/b9.png', title: 'علوم الاحياء', text: 'كتاب علوم الاحياء' },
  { icon: '/b11.png', title: 'البرمجه', text: 'كتاب البرمجه' },
]

  function Engineering({ onBackHome, onGoHome }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [selectedCard, setSelectedCard] = useState(null)
  const [musicPlaying, setMusicPlaying] = useState(false)
  const musicRef = useRef(null)
  const [showDeveloperNote, setShowDeveloperNote] = useState(false)
  const [showLegalNote, setShowLegalNote] = useState(false)
  const [showManagerNote, setShowManagerNote] = useState(false)
    
  const [profileImage, setProfileImage] = useState(1)
  const [logoImage, setLogoImage] = useState('/npm.webp')

  // تبديل صور البروفايل كل ثانيتين
  useEffect(() => {
    const interval = setInterval(() => {
      setProfileImage(current =>
        current === 4 ? 1 : current + 1
      )
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  // تبديل الشعار كل 5 ثواني
  useEffect(() => {
    const logos = [
      '/npm.webp',
      '/nz7.png'
    ]

    let index = 0

    const interval = setInterval(() => {
      index = (index + 1) % logos.length
      setLogoImage(logos[index])
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className={`engineering-page ${darkMode ? 'dark-mode' : ''}`}
      dir="rtl"
    >

      <div className="quote-bar">
        <span>
          اللهم علّمنا ما ينفعنا، وانفعنا بما علمتنا، وزدنا بك علمًا
        </span>
      </div>

      <aside className={`side-menu ${menuOpen ? 'open' : ''}`}>

        <div className="side-menu-header">
          <h2>العقاد الثانويه العسكريه بنين</h2>

          <button
            className="close-menu"
            onClick={() => setMenuOpen(false)}
          >
            ×
          </button>
        </div>

        <div className="side-menu-items">

            <button onClick={onGoHome}>القائمة الرئيسية</button>

          <div className="menu-divider"></div>

          <button>
            حسابي
          </button>

        </div>

      </aside>

      {menuOpen && (
        <div
          className="menu-overlay"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <header className="navbar">

        <button
          className="menu-button"
          onClick={() => setMenuOpen(true)}
          aria-label="فتح القائمة"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className="brand">

          <img
            src={logoImage}
            alt="Logo"
            className={`brand-logo ${
              logoImage === '/npm.webp'
                ? 'aqqad-logo'
                : 'nz7-logo'
            }`}
          />

          <div>

            <div className="brand-title">
              منصة العقاد
            </div>

            <div className="brand-subtitle">
              JAX EDUCATIONAL
            </div>

          </div>

        </div>

        <div className="student-balance">

          <span className="balance-label">
            رصيد الطالب
          </span>

          <strong>
            0 نقطة
          </strong>

        </div>

        <div className="header-actions">

          <button className="contact-btn">
            تواصل معنا
          </button>

          <button
            className="dark-mode-btn"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="تبديل الوضع الليلي"
          >
            {darkMode ? '🌞' : '🌑'}
          </button>

          <button className="profile-btn">
            <img
              src={`/o${profileImage}.png`}
              alt="Profile"
            />
          </button>

        </div>

      </header>

      <main>

        <button
          className="engineering-back-button"
          onClick={onBackHome}
          aria-label="العودة للصفحة السابقة"
        >
          <span className="back-arrow">
            ☜
          </span>
        </button>

        <section className="welcome">

          <span className="welcome-label">

            <span className="welcome-blue">
              أهلاً بك في
            </span>

            <span className="welcome-space">
              {' '}
            </span>

            <span className="welcome-red">
              مركز التعليم
            </span>

          </span>

          <p className="welcome-description">
            كل ما تحتاجه لرحلتك التعليمية في مكان واحد
          </p>

        </section>

        <section className="dashboard-grid">

          {cards.map((card, index) => (

            <button
              key={card.title}
              onClick={() => setSelectedCard(index)}
              className={`
                dashboard-card
                ${selectedCard === index ? 'active-card' : ''}
              `}
            >
              
              <div className="card-icon">

                <img
                  src={card.icon}
                  alt={card.title}
                />

              </div>

              <div className="card-content">

                <h2>
                  {card.title}
                </h2>

                <p>
                  {card.text}
                </p>

              </div>

              <span className="card-arrow">
                ←
              </span>

            </button>

          ))}

        </section>

        <section className="admin-info">

  <button
    type="button"
    className="admin-item admin-manager"
    onClick={() => setShowManagerNote(!showManagerNote)}
    aria-expanded={showManagerNote}
  >
    <span>
      مدير المدرسة:
    </span>

    <strong>
      صلاح جلال حبشي
    </strong>
  </button>

  <button
    type="button"
    className="admin-item admin-developer"
    onClick={() => {
      const nextState = !showDeveloperNote
      setShowDeveloperNote(nextState)

      if (nextState) {
        if (!musicRef.current) {
          musicRef.current = new Audio('/b23.mp3')
          musicRef.current.loop = true
        }

        musicRef.current.currentTime = 0

        musicRef.current.play()
          .then(() => setMusicPlaying(true))
          .catch(() => {})
      } else {
        if (musicRef.current) {
          musicRef.current.pause()
          musicRef.current.currentTime = 0
        }

        setMusicPlaying(false)
      }
    }}
  >
    <span>
      مطور المنصة والبوت:
    </span>

    <strong>
      نوذاد محمد محمود هلال
    </strong>
  </button>

</section>
{showManagerNote && (
  <section className="manager-note">

    <img
      src="/npm.webp"
      alt="مدرسة العقاد العسكرية"
      className="manager-note-logo"
    />

    <h3>
      🚀 تطور العقاد
    </h3>

    <div className="manager-note-text">

      <p className="developer-quote">
        «مدرسة العقاد العسكرية في عهد المدير صلاح جلال حبشي»
      </p>

      <p>
        <strong>
          المدير : صلاح جلال حبشي
        </strong>
      </p>

      <p>
        إن مسيرة القيادة الحكيمة والطفرة النوعية الشاملة التي تشهدها المدرسة اليوم، قد تجسدت ملامحها الأبهى في عهد المدير صلاح جلال حبشي؛
      </p>

      <p>
        فمنذ لحظة توليه المسؤولية، لم يقف مكتوف الأيدي، بل أحدث ثورة تنموية وتطويرية هائلة في كافة أركان هذا الصرح.
      </p>

      <p>
        إنها حقاً رسالة ملهمة تؤكد أن الإدارة الناجحة لا تقاس بالسنوات، بل بحجم الإنجاز وجسارة التطوير؛ حيث نجح في وقت قياسي في تحديث المنظومة التعليمية، والنهوض بالبيئة التربوية، لتظل مدرسة العقاد الثانوية العسكرية منارة شامخة ترفد الوطن بأجيال تتشرب الشرف والانضباط، وتتسلح بالعلم والتميز، وتخدم تراب مصر الغالي بكل إخلاص.
      </p>

      <p>
        وإن كان لنا أن أترك أثرًا، فليكن أثرًا ينفع البلاد ويُضاف إلى مسيرة بنائها.
      </p>

      <p className="developer-hashtags">
        #مصر_الحضاره_و_الحاضر_مصر_المستقبل_🇪🇬
        <br />
        #مصر_الرقميه_🇪🇬
        <br />
        #رؤية_2030_🇪🇬
      </p>

      <p className="developer-signature">
        مدير مدرسة العقاد 👨🏻‍💼 : صلاح جلال حبشي
      </p>

    </div>

  </section>
)}

{showDeveloperNote && (
  <section className="developer-note">

    <img
      src="/nz7.png"
      alt="نوذاد محمد محمود هلال"
      className="developer-note-logo"
    />

    <button
      type="button"
      className="music-toggle developer-music-toggle"
      onClick={() => {
        if (!musicRef.current) return

        if (musicPlaying) {
          musicRef.current.pause()
          setMusicPlaying(false)
        } else {
          musicRef.current.currentTime = 0

          musicRef.current.play()
            .then(() => setMusicPlaying(true))
            .catch(() => {})
        }
      }}
      aria-label={musicPlaying ? "كتم الموسيقى" : "تشغيل الموسيقى"}
    >
      <span className={`speaker-icon ${musicPlaying ? 'is-playing' : 'is-muted'}`}>
        <span className="speaker-body"></span>

        {musicPlaying ? (
          <>
            <span className="speaker-wave speaker-wave-1"></span>
            <span className="speaker-wave speaker-wave-2"></span>
          </>
        ) : (
          <span className="speaker-mute-line"></span>
        )}
      </span>
    </button>

    <h3>
      بصمة فخر 🫆
    </h3>

    <div className="developer-note-text">

      <p className="developer-quote">
        «ليست مجرد أسطر في أكواد… بل عملٌ بنيته بفكرة، وطورته بعلم، وأكملته بجهد 👨🏻‍💻.»
      </p>

      <p>
        <strong>
          <span className="developer-text-outline">
            أعتزّ أنا نوذاد محمد محمود هلال:
          </span>
        </strong>
      </p>

      <p>
        <span className="developer-text-outline">
          بأنني تولّيت بناء وتطوير هذه المنصة والبوت المرتبط بها برمجيًا، بدايةً من الفكرة والتنفيذ، وصولًا إلى الصورة التي يظهر بها المشروع اليوم.
        </span>
      </p>

      <p>
        <span className="developer-text-outline">
          ، هدفي أن أُسخّر ما أمتلكه من معرفة وخبرة برمجية في بناء مشروع يخدم التعليم ويترك أثرًا حقيقيًا.
        </span>
      </p>

      <p>
        <span className="developer-text-outline">
          أضع اسمي هنا باعتباره اسم المبرمج والمطور للمنصه الذي كتب وبنى وطوّر هذا العمل، وترك فيه جزءًا من علمه ووقته وجهده.
        </span>
      </p>

      <p>
        <span className="developer-text-outline">
          البرمجة والتطوير في هذا المشروع هي بصمتي أنا.
        </span>
      </p>

      <p>
        <span className="developer-text-outline">
          يحمل هذا المشروع خلاصة علمي، وفكري، وجهدي؛ فأن أُسهم في تطوير منصة تخدم التعليم وتُسهم في بناء جيلٍ أكثر علمًا وتقدمًا، هو شرف أعتز به ومسؤولية أؤمن بقيمتها.
        </span>
      </p>

      <p>
        <span className="developer-text-outline">
          هذه بصمتي… وهذا فخري.
          <br />
          وإن كان لي أن أترك أثرًا، فليكن أثرًا ينفع بلدي ويُضاف إلى مسيرة بنائه.
        </span>
      </p>

      <p className="developer-hashtags">
        #مصر_الحضاره_و_الحاضر_مصر_المستقبل_🇪🇬
        <br />
        #مصر_الرقميه_🇪🇬
        <br />
        #رؤية_2030_🇪🇬
      </p>

      <p className="developer-signature">
        المبرمج والمطور : نوذاد محمد محمود هلال 🫆
      </p>

    </div>

  </section>
)}
      </main>

      <footer className="footer">

  <span className="footer-Jax">
    JAX EDUCATIONAL
  </span>

  <button
    type="button"
    className="legal-footer-button"
    onClick={() => setShowLegalNote(!showLegalNote)}
    aria-expanded={showLegalNote}
  >
    جميع الحقوق محفوظة © 2026–2027 منصة العقاد العسكريه
  </button>

  {showLegalNote && (
    <section className="legal-note">
      <div className="legal-note-text">

        <h3>⚖️ تنويه قانوني وبيان حقوق الملكية ⚖️</h3>

        <p>
          تُعد هذه المنصة التعليمية والبوت التابع لها نظاماً تقنياً مخصصاً للخدمة العملية التعليمية في مدرسة العقاد الثانوية العسكرية بنين مع بقاء حقوق الإدارة والتشغيل المؤسسي للمدرسة.
        </p>

        <p className="legal-contribution-title">
          💻 المساهمة البرمجية
        </p>

        تم تنفيذ المشروع وتطويره بشكل كامل ومستقل بواسطة المبرمج (نوذاد محمد محمود هلال) ودون أي مساعدة خارجية.

        <p>
          تم تصميم، برمجة، وتطوير هذا النظام بالكامل وبمجهود فردي خالص بواسطة المبرمج: نوذاد محمد محمود هلال (وهو الصانع الوحيد لكل أسطر الكود والأنظمة التقنية دون تدخل من أي طرف آخر).
        </p>

        <p>
          يحتفظ المطور بكافة حقوق النسب الأدبي والملكية الفكرية للأكواد والأنظمة، مع حقه الكامل والتام في التصرف بالمنصة أو كودها البرمجي بالطريقة التي يراها مناسبة.
        </p>

      </div>
    </section>
  )}

</footer>

    </div>
  )
}

export default Engineering