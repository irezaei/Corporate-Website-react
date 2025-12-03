import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-overlay"></div>
        <div className="animated-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content fade-in-up">
          <h1 className="hero-title">
            راهکارهای <span className="highlight">نوین</span> برای کسب و کار شما
          </h1>
          <p className="hero-description">
            ما با تیمی متخصص و تجربه‌ای غنی، آماده‌ایم تا کسب و کار شما را به سطح جدیدی از موفقیت برسانیم.
            با استفاده از تکنولوژی‌های روز و روش‌های خلاقانه، آینده کسب و کارتان را متحول می‌کنیم.
          </p>
          <div className="hero-buttons">
            <a 
              href="#contact" 
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              شروع کنید
            </a>
            <a 
              href="#about" 
              className="btn btn-secondary"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              بیشتر بدانید
            </a>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">پروژه موفق</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">200+</div>
              <div className="stat-label">مشتری راضی</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">سال تجربه</div>
            </div>
          </div>
          
          <div className="hero-credits">
            <p>
              طراحی و توسعه: <a href="https://melalweb.com" target="_blank" rel="noopener noreferrer" className="hero-credit-link">محمدرضا رضائی</a> - <a href="https://melalweb.com" target="_blank" rel="noopener noreferrer" className="hero-credit-link">melalweb.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

