import { useState, useEffect } from 'react'
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

  const [profileImage, setProfileImage] = useState(1)
  const [logoImage, setLogoImage] = useState('/npm.png')

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
      '/npm.png',
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
              logoImage === '/npm.png'
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

          <div className="admin-item admin-manager">

            <span>
              مدير المدرسة:
            </span>

            <strong>
              صلاح جلال حبشي
            </strong>

          </div>

          <div className="admin-item admin-developer">

            <span>
              مطور المنصة والبوت:
            </span>

            <strong>
              نوذاد محمد محمود هلال
            </strong>

          </div>

        </section>

      </main>

      <footer className="footer">

        <span className="footer-Jax">
          JAX EDUCATIONAL
        </span>

        <span className="footer-brand">
          جميع الحقوق محفوظة © 2026–2027 منصة العقاد العسكريه
        </span>

      </footer>

    </div>
  )
}

export default Engineering