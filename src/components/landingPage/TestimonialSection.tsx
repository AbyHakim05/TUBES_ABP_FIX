import React from 'react';
import styles from './TestimonialSection.module.css';

export default function TestimonialSection() {
  const testimonials = [
    {
      text: "Program ini sangat membantu saya memahami bahasa dan budaya kerja di Jepang. Materinya lengkap dan mudah dipahami.",
      name: "Jacqueline Wright",
      role: "Customer",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
    },
    {
      text: "Simulasi interview sangat realistis dan membantu meningkatkan kepercayaan diri saya saat proses seleksi kerja di Jepang.",
      name: "Jacqueline Wright",
      role: "Customer",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section className={styles.testimoni}>
      <h2 className={styles.title}>Testimoni</h2>
      <div className={styles.carousel}>
        <button className={styles.navBtn}>&larr;</button>
        <div className={styles.cards}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.card}>
              <p className={styles.quote}>{t.text}</p>
              <div className={styles.profile}>
                <img src={t.avatar} alt={t.name} className={styles.avatar} />
                <div className={styles.info}>
                  <h4>{t.name}</h4>
                  <p>{t.role}</p>
                  <div className={styles.stars}>★★★★★</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className={styles.navBtn}>&rarr;</button>
      </div>
    </section>
  );
}
