import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiRocketLaunch } from 'react-icons/hi2'
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { id: 'home', label: 'خانه', href: '/', isRoute: true },
    { id: 'about', label: 'درباره ما', href: '#about', isRoute: false },
    { id: 'services', label: 'خدمات', href: '#services', isRoute: false },
    { id: 'blog', label: 'بلاگ', href: '#blog', isRoute: false },
    { id: 'contact', label: 'تماس با ما', href: '#contact', isRoute: false },
  ]

  const handleMenuClick = (item) => {
    setIsMobileMenuOpen(false)
    
    if (item.isRoute) {
      // اگر در صفحه اصلی نیستیم، به صفحه اصلی برو
      if (location.pathname !== '/') {
        window.location.href = item.href
      } else {
        // اگر در صفحه اصلی هستیم، به بخش اسکرول کن
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    } else {
      // اگر در صفحه اصلی نیستیم، ابتدا به صفحه اصلی برو
      if (location.pathname !== '/') {
        window.location.href = `/${item.href}`
      } else {
        // اگر در صفحه اصلی هستیم، به بخش اسکرول کن
        const element = document.querySelector(item.href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="logo" onClick={() => setIsMobileMenuOpen(false)}>
            <HiRocketLaunch className="logo-icon" />
            <span className="logo-text">شرکت ما</span>
          </Link>
          
          <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            {menuItems.map((item) => (
              <li key={item.id}>
                {item.isRoute ? (
                  <Link 
                    to={item.href}
                    onClick={() => handleMenuClick(item)}
                    className="nav-link"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a 
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleMenuClick(item)
                    }}
                    className="nav-link"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="منو"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

