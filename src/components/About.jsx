import React from 'react'
import { HiLightBulb, HiTarget, HiUserGroup, HiBolt } from 'react-icons/hi2'
import './About.css'

const About = () => {
  const features = [
    {
      icon: HiLightBulb,
      title: 'خلاقیت و نوآوری',
      description: 'ایده‌های خلاقانه و راهکارهای نوین برای حل چالش‌های کسب و کار'
    },
    {
      icon: HiTarget,
      title: 'تمرکز بر نتیجه',
      description: 'هدف ما دستیابی به بهترین نتایج ممکن برای مشتریانمان است'
    },
    {
      icon: HiUserGroup,
      title: 'همکاری مستمر',
      description: 'پشتیبانی و همراهی مداوم در تمام مراحل پروژه'
    },
    {
      icon: HiBolt,
      title: 'عملکرد سریع',
      description: 'ارائه راهکارها و خدمات با بالاترین سرعت و کیفیت'
    }
  ]

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">درباره ما</h2>
          <p className="section-subtitle">
            تیمی متخصص و با تجربه در زمینه ارائه راهکارهای نوین کسب و کار
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>داستان ما</h3>
            <p>
              شرکت ما با بیش از 10 سال تجربه در زمینه ارائه راهکارهای نوین کسب و کار، 
              همواره تلاش کرده است تا با استفاده از تکنولوژی‌های روز و روش‌های خلاقانه، 
              به کسب و کارها کمک کند تا به اهداف خود دست یابند.
            </p>
            <p>
              ما معتقدیم که هر کسب و کاری منحصر به فرد است و نیاز به راهکارهای خاص خود دارد. 
              به همین دلیل، برای هر پروژه، تیمی متخصص تشکیل می‌دهیم که با دقت و توجه کامل، 
              بهترین راهکار را برای شما طراحی و پیاده‌سازی می‌کند.
            </p>
            
            <div className="about-values">
              <div className="value-item">
                <strong>ماموریت ما:</strong>
                <p>ارائه راهکارهای نوین و مؤثر برای رشد و توسعه کسب و کارها</p>
              </div>
              <div className="value-item">
                <strong>چشم‌انداز ما:</strong>
                <p>تبدیل شدن به برترین شرکت در زمینه ارائه راهکارهای کسب و کار</p>
              </div>
              <div className="value-item creator-info">
                <strong>طراحی و توسعه:</strong>
                <p>
                  این وبسایت توسط <a href="https://melalweb.com" target="_blank" rel="noopener noreferrer" className="creator-link">محمدرضا رضائی</a> از <a href="https://melalweb.com" target="_blank" rel="noopener noreferrer" className="creator-link">melalweb.com</a> طراحی و توسعه یافته است.
                </p>
              </div>
            </div>
          </div>

          <div className="about-features">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} className="feature-card">
                  <div className="feature-icon-wrapper">
                    <IconComponent className="feature-icon" />
                  </div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

