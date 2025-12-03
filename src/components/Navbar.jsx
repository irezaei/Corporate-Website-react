import React, { useState, useEffect } from 'react'
import { HiRocketLaunch } from 'react-icons/hi2'
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { id: 'home', label: 'خانه', href: '#home' },
    { id: 'about', label: 'درباره ما', href: '#about' },
    { id: 'services', label: 'خدمات', href: '#services' },
    { id: 'contact', label: 'تماس با ما', href: '#contact' },
  ]

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <div className="logo">
            <HiRocketLaunch className="logo-icon" />
            <span className="logo-text">شرکت ما</span>
          </div>
          
          <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            {menuItems.map((item) => (
              <li key={item.id}>
                <a 
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    setIsMobileMenuOpen(false)
                    const element = document.querySelector(item.href)
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }}
                  className="nav-link"
                >
                  {item.label}
                </a>
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

