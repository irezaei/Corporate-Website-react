import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Blog.css'

const Blog = () => {
  const [ref, isVisible] = useScrollAnimation({ once: true, threshold: 0.1 })

  return (
    <section id="blog" className="blog section" ref={ref}>
      <div className="container">
        <div className={`section-header ${isVisible ? 'fade-in-up' : ''}`}>
          <h2 className="section-title">بلاگ</h2>
          <p className="section-subtitle">
            مقالات و مطالب آموزشی در زمینه طراحی و توسعه وب
          </p>
        </div>

        <article className="blog-article">
          <header className="article-header">
            <h1 className="article-title">اصول طراحی UX/UI در توسعه وب: راهنمای جامع</h1>
            <div className="article-meta">
              <div className="article-author">
                <span className="author-label">نویسنده:</span>
                <span className="author-name">محمدرضا رضائی</span>
              </div>
              <div className="article-date">
                <span className="date-label">تاریخ انتشار:</span>
                <span className="date-value">{new Date().toLocaleDateString('fa-IR')}</span>
              </div>
            </div>
          </header>

          <div className="article-content">
            <div className="article-image">
              <img 
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop" 
                alt="طراحی UX/UI مدرن"
                loading="lazy"
              />
            </div>

            <div className="article-intro">
              <p className="lead">
                طراحی تجربه کاربری (UX) و رابط کاربری (UI) از مهم‌ترین جنبه‌های توسعه وب مدرن محسوب می‌شوند. 
                در این مقاله جامع، به بررسی اصول و بهترین روش‌های طراحی UX/UI می‌پردازیم که می‌تواند 
                به شما کمک کند تا وب‌سایت‌هایی کاربرپسند و مؤثر ایجاد کنید.
              </p>
            </div>

            <section className="article-section">
              <h2>مقدمه: تفاوت UX و UI</h2>
              <p>
                قبل از ورود به جزئیات، مهم است که تفاوت بین UX (User Experience) و UI (User Interface) را درک کنیم:
              </p>
              <ul className="article-list">
                <li><strong>UX (تجربه کاربری):</strong> تمرکز بر احساس و تجربه کلی کاربر هنگام استفاده از محصول</li>
                <li><strong>UI (رابط کاربری):</strong> تمرکز بر ظاهر و طراحی بصری عناصر رابط کاربری</li>
              </ul>
              <div className="article-image">
                <img 
                  src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&h=600&fit=crop" 
                  alt="تفاوت UX و UI"
                  loading="lazy"
                />
              </div>
            </section>

            <section className="article-section">
              <h2>اصول کلیدی طراحی UX</h2>
              
              <h3>1. کاربرمحوری (User-Centered Design)</h3>
              <p>
                طراحی کاربرمحور به معنای قرار دادن نیازها و خواسته‌های کاربر در مرکز فرآیند طراحی است. 
                این رویکرد شامل:
              </p>
              <ul className="article-list">
                <li>تحقیق و تحلیل نیازهای کاربر</li>
                <li>ایجاد پرسونای کاربر</li>
                <li>تست و بهبود مداوم</li>
                <li>جمع‌آوری بازخورد کاربران</li>
              </ul>

              <h3>2. سادگی و وضوح</h3>
              <p>
                یکی از قوانین طلایی طراحی UX، اصل KISS (Keep It Simple, Stupid) است. 
                رابط‌های ساده و واضح، تجربه کاربری بهتری ارائه می‌دهند:
              </p>
              <div className="article-image">
                <img 
                  src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=600&fit=crop" 
                  alt="طراحی ساده و واضح"
                  loading="lazy"
                />
              </div>
              <ul className="article-list">
                <li>حذف عناصر غیرضروری</li>
                <li>استفاده از زبان ساده و قابل فهم</li>
                <li>سازماندهی منطقی محتوا</li>
                <li>راهنمایی واضح برای کاربر</li>
              </ul>

              <h3>3. دسترسی‌پذیری (Accessibility)</h3>
              <p>
                طراحی دسترس‌پذیر به معنای ایجاد وب‌سایت‌هایی است که برای همه کاربران، 
                از جمله افراد دارای معلولیت، قابل استفاده باشد:
              </p>
              <ul className="article-list">
                <li>استفاده از کنتراست رنگی مناسب</li>
                <li>پشتیبانی از صفحه‌خوان‌ها (Screen Readers)</li>
                <li>قابلیت ناوبری با صفحه‌کلید</li>
                <li>متن جایگزین برای تصاویر</li>
                <li>اندازه فونت قابل خواندن</li>
              </ul>
            </section>

            <section className="article-section">
              <h2>اصول کلیدی طراحی UI</h2>
              
              <h3>1. سلسله مراتب بصری (Visual Hierarchy)</h3>
              <p>
                سلسله مراتب بصری به کاربر کمک می‌کند تا مهم‌ترین اطلاعات را سریع‌تر پیدا کند:
              </p>
              <div className="article-image">
                <img 
                  src="https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=1200&h=600&fit=crop" 
                  alt="سلسله مراتب بصری"
                  loading="lazy"
                />
              </div>
              <ul className="article-list">
                <li>استفاده از اندازه‌های مختلف فونت</li>
                <li>کنتراست رنگی برای تاکید</li>
                <li>فاصله‌گذاری مناسب (Whitespace)</li>
                <li>ترتیب منطقی عناصر</li>
              </ul>

              <h3>2. رنگ‌بندی مؤثر</h3>
              <p>
                رنگ‌ها نقش مهمی در انتقال احساسات و ایجاد هویت برند دارند:
              </p>
              <ul className="article-list">
                <li>استفاده از پالت رنگی محدود و هماهنگ</li>
                <li>رنگ‌های اصلی برای CTA (Call to Action)</li>
                <li>کنتراست مناسب برای خوانایی</li>
                <li>رعایت اصول روانشناسی رنگ</li>
              </ul>

              <h3>3. تایپوگرافی</h3>
              <p>
                انتخاب فونت مناسب و استفاده صحیح از آن، خوانایی و زیبایی رابط را افزایش می‌دهد:
              </p>
              <ul className="article-list">
                <li>استفاده از حداکثر 2-3 فونت</li>
                <li>اندازه فونت مناسب برای خوانایی</li>
                <li>فاصله خط (Line Height) مناسب</li>
                <li>ترازبندی متن</li>
              </ul>
            </section>

            <section className="article-section">
              <h2>بهترین روش‌های طراحی واکنش‌گرا</h2>
              <p>
                در عصر موبایل، طراحی واکنش‌گرا (Responsive Design) ضروری است:
              </p>
              <div className="article-image">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop" 
                  alt="طراحی واکنش‌گرا"
                  loading="lazy"
                />
              </div>
              <ul className="article-list">
                <li><strong>Mobile-First Approach:</strong> طراحی ابتدا برای موبایل، سپس برای دسکتاپ</li>
                <li><strong>Breakpoints:</strong> تعریف نقاط شکست مناسب برای اندازه‌های مختلف صفحه</li>
                <li><strong>Flexible Layouts:</strong> استفاده از Grid و Flexbox</li>
                <li><strong>تصاویر واکنش‌گرا:</strong> استفاده از srcset و sizes</li>
                <li><strong>تست در دستگاه‌های مختلف:</strong> اطمینان از عملکرد صحیح در همه دستگاه‌ها</li>
              </ul>
            </section>

            <section className="article-section">
              <h2>اصول ناوبری و معماری اطلاعات</h2>
              <p>
                ناوبری واضح و معماری اطلاعات منطقی، کلید موفقیت یک وب‌سایت است:
              </p>
              <ul className="article-list">
                <li><strong>منوی ساده و واضح:</strong> حداکثر 5-7 آیتم اصلی</li>
                <li><strong>Breadcrumbs:</strong> نشان دادن موقعیت کاربر در سایت</li>
                <li><strong>جستجو:</strong> امکان جستجوی سریع محتوا</li>
                <li><strong>Footer جامع:</strong> دسترسی به لینک‌های مهم</li>
                <li><strong>CTA واضح:</strong> دکمه‌های اقدام واضح و قابل مشاهده</li>
              </ul>
            </section>

            <section className="article-section">
              <h2>عملکرد و سرعت</h2>
              <p>
                عملکرد وب‌سایت تأثیر مستقیمی بر تجربه کاربری دارد:
              </p>
              <div className="article-image">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop" 
                  alt="بهینه‌سازی عملکرد"
                  loading="lazy"
                />
              </div>
              <ul className="article-list">
                <li><strong>زمان بارگذاری:</strong> هدف زیر 3 ثانیه</li>
                <li><strong>بهینه‌سازی تصاویر:</strong> فشرده‌سازی و فرمت مناسب</li>
                <li><strong>Lazy Loading:</strong> بارگذاری تدریجی محتوا</li>
                <li><strong>کد تمیز:</strong> بهینه‌سازی CSS و JavaScript</li>
                <li><strong>CDN:</strong> استفاده از شبکه تحویل محتوا</li>
              </ul>
            </section>

            <section className="article-section">
              <h2>تست و بهبود مداوم</h2>
              <p>
                طراحی UX/UI یک فرآیند مداوم است که نیاز به تست و بهبود دارد:
              </p>
              <ul className="article-list">
                <li><strong>A/B Testing:</strong> تست نسخه‌های مختلف</li>
                <li><strong>User Testing:</strong> مشاهده کاربران واقعی</li>
                <li><strong>Analytics:</strong> تحلیل رفتار کاربران</li>
                <li><strong>Heatmaps:</strong> شناسایی نقاط تعامل</li>
                <li><strong>بازخورد کاربران:</strong> جمع‌آوری و تحلیل نظرات</li>
              </ul>
            </section>

            <section className="article-section">
              <h2>ابزارهای مفید طراحی UX/UI</h2>
              <p>برخی از ابزارهای محبوب برای طراحی:</p>
              <ul className="article-list">
                <li><strong>Figma:</strong> طراحی رابط و پروتوتایپ</li>
                <li><strong>Adobe XD:</strong> طراحی و پروتوتایپ</li>
                <li><strong>Sketch:</strong> طراحی رابط (مک)</li>
                <li><strong>InVision:</strong> پروتوتایپ و همکاری</li>
                <li><strong>Zeplin:</strong> تحویل طراحی به توسعه‌دهندگان</li>
              </ul>
            </section>

            <section className="article-section">
              <h2>نتیجه‌گیری</h2>
              <p>
                طراحی UX/UI مؤثر نیاز به درک عمیق از نیازهای کاربر، اصول طراحی، و بهترین روش‌ها دارد. 
                با رعایت اصولی که در این مقاله بررسی کردیم، می‌توانید وب‌سایت‌هایی ایجاد کنید که نه تنها 
                زیبا هستند، بلکه کاربرپسند و مؤثر نیز می‌باشند.
              </p>
              <p>
                به یاد داشته باشید که طراحی UX/UI یک فرآیند مداوم است. همیشه در حال یادگیری باشید، 
                کاربران خود را بشناسید، و بر اساس داده‌ها و بازخوردها بهبود دهید.
              </p>
            </section>

            <div className="article-footer">
              <div className="article-tags">
                <span className="tag">UX Design</span>
                <span className="tag">UI Design</span>
                <span className="tag">Web Development</span>
                <span className="tag">User Experience</span>
                <span className="tag">طراحی وب</span>
              </div>
              <div className="article-share">
                <h4>اشتراک‌گذاری:</h4>
                <div className="share-buttons">
                  <a href="#" className="share-btn">LinkedIn</a>
                  <a href="#" className="share-btn">Twitter</a>
                  <a href="#" className="share-btn">Telegram</a>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Blog

