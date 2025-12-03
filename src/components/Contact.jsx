import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
      
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: '📧',
      title: 'ایمیل',
      value: 'info@company.com',
      link: 'mailto:info@company.com'
    },
    {
      icon: '📞',
      title: 'تلفن',
      value: '021-12345678',
      link: 'tel:02112345678'
    },
    {
      icon: '📍',
      title: 'آدرس',
      value: 'تهران، خیابان ولیعصر',
      link: null
    },
    {
      icon: '🌐',
      title: 'طراحی و توسعه',
      value: 'محمدرضا رضائی - melalweb.com',
      link: 'https://melalweb.com'
    }
  ]

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">تماس با ما</h2>
          <p className="section-subtitle">
            آماده‌ایم تا به شما کمک کنیم. با ما در تماس باشید.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>اطلاعات تماس</h3>
            <p className="contact-intro">
              ما همیشه آماده پاسخگویی به سوالات و درخواست‌های شما هستیم. 
              می‌توانید از طریق فرم تماس یا اطلاعات زیر با ما ارتباط برقرار کنید.
            </p>

            <div className="contact-items">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-item-icon">{item.icon}</div>
                  <div className="contact-item-content">
                    <h4>{item.title}</h4>
                    {item.link ? (
                      <a href={item.link} target={item.link.startsWith('http') ? '_blank' : undefined} rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}>{item.value}</a>
                    ) : (
                      <p>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              <h4>شبکه‌های اجتماعی</h4>
              <div className="social-icons">
                <a href="#" className="social-icon" aria-label="LinkedIn">💼</a>
                <a href="#" className="social-icon" aria-label="Twitter">🐦</a>
                <a href="#" className="social-icon" aria-label="Instagram">📷</a>
                <a href="#" className="social-icon" aria-label="Telegram">✈️</a>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">نام و نام خانوادگی *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="نام خود را وارد کنید"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">ایمیل *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">شماره تماس</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="09123456789"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">پیام *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="پیام خود را بنویسید..."
                ></textarea>
              </div>

              {submitStatus === 'success' && (
                <div className="form-success">
                  ✓ پیام شما با موفقیت ارسال شد. به زودی با شما تماس خواهیم گرفت.
                </div>
              )}

              <button 
                type="submit" 
                className="btn btn-primary form-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'در حال ارسال...' : 'ارسال پیام'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

