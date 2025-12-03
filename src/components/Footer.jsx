import React from 'react'
import { HiRocketLaunch } from 'react-icons/hi2'
import { FaLinkedin, FaTwitter, FaInstagram, FaTelegram } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    خدمات: [
      { label: 'طراحی وب', href: '#services' },
      { label: 'اپلیکیشن موبایل', href: '#services' },
      { label: 'راهکارهای ابری', href: '#services' },
      { label: 'هوش مصنوعی', href: '#services' }
    ],
    شرکت: [
      { label: 'درباره ما', href: '#about' },
      { label: 'تیم ما', href: '#about' },
      { label: 'شغل‌ها', href: '#' },
      { label: 'تماس با ما', href: '#contact' }
    ],
    منابع: [
      { label: 'وبلاگ', href: '#' },
      { label: 'مستندات', href: '#' },
      { label: 'پشتیبانی', href: '#contact' },
      { label: 'سوالات متداول', href: '#' }
    ]
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <HiRocketLaunch className="logo-icon" />
              <span className="logo-text">شرکت ما</span>
            </div>
            <p className="footer-description">
              ما با تیمی متخصص و تجربه‌ای غنی، آماده‌ایم تا کسب و کار شما را 
              به سطح جدیدی از موفقیت برسانیم.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="Telegram"><FaTelegram /></a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="footer-links">
              <h4>{category}</h4>
              <ul>
                {links.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} شرکت ما. تمامی حقوق محفوظ است.
            <br />
            طراحی و توسعه توسط <a href="https://melalweb.com" target="_blank" rel="noopener noreferrer" className="creator-link">محمدرضا رضائی</a> - <a href="https://melalweb.com" target="_blank" rel="noopener noreferrer" className="creator-link">melalweb.com</a>
          </p>
          <div className="footer-legal">
            <a href="#">حریم خصوصی</a>
            <a href="#">شرایط استفاده</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

