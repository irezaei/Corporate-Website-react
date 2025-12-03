import React from 'react'
import { 
  HiGlobeAlt, 
  HiDevicePhoneMobile, 
  HiCloud, 
  HiCpuChip, 
  HiShieldCheck, 
  HiChartBar,
  HiArrowRight
} from 'react-icons/hi2'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: HiGlobeAlt,
      title: 'طراحی وب',
      description: 'طراحی و توسعه وب‌سایت‌های مدرن و واکنش‌گرا با استفاده از آخرین تکنولوژی‌ها',
      features: ['طراحی UI/UX', 'توسعه Frontend', 'توسعه Backend', 'سئو و بهینه‌سازی']
    },
    {
      icon: HiDevicePhoneMobile,
      title: 'اپلیکیشن موبایل',
      description: 'ساخت اپلیکیشن‌های موبایل برای iOS و Android با عملکرد بالا و تجربه کاربری عالی',
      features: ['Native Development', 'Cross-Platform', 'UI/UX Design', 'Testing & QA']
    },
    {
      icon: HiCloud,
      title: 'راهکارهای ابری',
      description: 'مهاجرت و بهینه‌سازی زیرساخت‌های ابری برای بهبود عملکرد و کاهش هزینه‌ها',
      features: ['Cloud Migration', 'DevOps', 'Infrastructure', 'Monitoring']
    },
    {
      icon: HiCpuChip,
      title: 'هوش مصنوعی',
      description: 'پیاده‌سازی راهکارهای هوش مصنوعی و یادگیری ماشین برای خودکارسازی فرآیندها',
      features: ['Machine Learning', 'Data Analytics', 'Automation', 'AI Consulting']
    },
    {
      icon: HiShieldCheck,
      title: 'امنیت سایبری',
      description: 'ارائه راهکارهای جامع امنیت سایبری برای محافظت از داده‌ها و سیستم‌ها',
      features: ['Security Audit', 'Penetration Testing', 'Compliance', 'Incident Response']
    },
    {
      icon: HiChartBar,
      title: 'مشاوره کسب و کار',
      description: 'مشاوره تخصصی برای بهبود فرآیندها و افزایش بهره‌وری کسب و کار شما',
      features: ['Business Analysis', 'Process Optimization', 'Strategy Planning', 'Digital Transformation']
    }
  ]

  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">خدمات ما</h2>
          <p className="section-subtitle">
            راهکارهای جامع و تخصصی برای تمام نیازهای کسب و کار شما
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div key={index} className="service-card">
                <div className="service-icon-wrapper">
                  <IconComponent className="service-icon" />
                </div>
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <a 
                  href="#contact" 
                  className="service-link"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  اطلاعات بیشتر
                  <HiArrowRight className="service-link-icon" />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services

