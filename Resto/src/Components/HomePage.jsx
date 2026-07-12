import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/HomePage.css'; 

const HomePage = () => {
  return (
    <div className="homepage-container">
      
     
      <section className="hero-section">
        <div className="hero-content">
          <h1>مرحباً بكم في مطعم <span className="brand-name">RESTO</span> 🍕</h1>
          <p className="hero-subtitle">أقوى المأكولات التونسية والعالمية مصنوعة بكل حب وشغف.</p>
          
          <Link to="/menu" className="cta-btn">اكتشف القائمة الآن 📜</Link>
        </div>
      </section>

   
      <section className="services-section">
        <h2>لماذا تختار مطعمنا؟ ✨</h2>
        <div className="services-grid">
          
          <div className="service-card">
            <div className="service-icon">🍳</div>
            <h3>جودة عالية</h3>
            <p>مكونات طازجة 100% وأطباق تحضر يومياً على أيدي أمهر الطباخين.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">🛵</div>
            <h3>توصيل سريع</h3>
            <p>نوصلك ماكلتك سخونة وبنينة في أسرع وقت ممكن وين ما كنت.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">🇹🇳</div>
            <h3>بنة تونسية وعالمية</h3>
            <p>تنوع كبير يجمع بين أصالة المطبخ التونسي وعصرنة الأطباق العالمية.</p>
          </div>

        </div>
      </section>

      <section className="info-section">
        <p>📍 العنوان: شارع الحرية، تونس | 📞 الهاتف: 71,000,000</p>
        <p>🕒 أوقات العمل: كل يوم من الـ 11:00 صباحاً إلى الـ 23:00 ليلاً</p>
      </section>

    </div>
  );
};

export default HomePage;