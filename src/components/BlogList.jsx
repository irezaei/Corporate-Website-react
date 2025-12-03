import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { HiCalendar, HiArrowLeft } from 'react-icons/hi2'
import './BlogList.css'

const BlogList = () => {
  const navigate = useNavigate()
  const [ref, isVisible] = useScrollAnimation({ once: true, threshold: 0.1 })

  const blogPosts = [
    {
      id: 1,
      title: 'اصول طراحی UX/UI در توسعه وب: راهنمای جامع',
      excerpt: 'در این مقاله جامع، به بررسی اصول و بهترین روش‌های طراحی UX/UI می‌پردازیم که می‌تواند به شما کمک کند تا وب‌سایت‌هایی کاربرپسند و مؤثر ایجاد کنید.',
      featuredImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop',
      author: 'محمدرضا رضائی',
      publishDate: '2024-01-15',
      readTime: '15 دقیقه',
      category: 'طراحی وب'
    },
    {
      id: 2,
      title: 'بهینه‌سازی عملکرد وب‌سایت: راهکارهای عملی',
      excerpt: 'راهنمای کامل برای بهبود سرعت و عملکرد وب‌سایت‌ها با استفاده از تکنیک‌های مدرن و ابزارهای پیشرفته.',
      featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      author: 'محمدرضا رضائی',
      publishDate: '2024-01-10',
      readTime: '12 دقیقه',
      category: 'توسعه وب'
    },
    {
      id: 3,
      title: 'سئو مدرن: استراتژی‌های پیشرفته برای سال 2024',
      excerpt: 'آموزش تکنیک‌های جدید سئو و بهینه‌سازی موتورهای جستجو برای دستیابی به رتبه‌های برتر در گوگل.',
      featuredImage: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2d82c?w=800&h=500&fit=crop',
      author: 'محمدرضا رضائی',
      publishDate: '2024-01-05',
      readTime: '18 دقیقه',
      category: 'سئو'
    }
  ]

  const handlePostClick = (postId) => {
    navigate(`/blog/${postId}`)
  }

  return (
    <section id="blog" className="blog-list section" ref={ref}>
      <div className="container">
        <div className={`section-header ${isVisible ? 'fade-in-up' : ''}`}>
          <h2 className="section-title">بلاگ</h2>
          <p className="section-subtitle">
            مقالات و مطالب آموزشی در زمینه طراحی و توسعه وب
          </p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <article 
              key={post.id} 
              className={`blog-card ${isVisible ? 'fade-in-up' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handlePostClick(post.id)}
            >
              <div className="blog-card-image">
                <img src={post.featuredImage} alt={post.title} loading="lazy" />
                <div className="blog-card-overlay">
                  <span className="blog-category">{post.category}</span>
                </div>
              </div>
              
              <div className="blog-card-content">
                <div className="blog-card-meta">
                  <div className="blog-meta-item">
                    <HiCalendar className="meta-icon" />
                    <span>{new Date(post.publishDate).toLocaleDateString('fa-IR')}</span>
                  </div>
                  <div className="blog-meta-item">
                    <span className="read-time">{post.readTime} مطالعه</span>
                  </div>
                </div>

                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-excerpt">{post.excerpt}</p>

                <div className="blog-card-footer">
                  <div className="blog-author">
                    <span className="author-label">نویسنده:</span>
                    <span className="author-name">{post.author}</span>
                  </div>
                  <div className="blog-read-more">
                    ادامه مطلب
                    <HiArrowLeft className="arrow-icon" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogList

