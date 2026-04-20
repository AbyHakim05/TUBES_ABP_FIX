import React from 'react';
import styles from './ProgramsSection.module.css';

export default function ProgramsSection() {
  const programs = [
    {
      title: "Bahasa Jepang Dasar",
      desc: "Belajar Hiragana, Katakana, dan kosakata dasar untuk komunikasi sehari-hari.",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Pelatihan Kerja Jepang",
      desc: "Pembekalan keterampilan kerja sesuai standar perusahaan Jepang.",
      image: "https://images.unsplash.com/photo-1542361345-89e58247f2d5?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Persiapan Interview",
      desc: "Latihan wawancara dan pembentukan mental kerja profesional.",
      image: "https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <section className={styles.programs} id="program">
      <h2 className={styles.title}>Program Pelatihan</h2>
      <div className={styles.grid}>
        {programs.map((program, idx) => (
          <div key={idx} className={styles.card}>
            <img src={program.image} alt={program.title} className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{program.title}</h3>
              <p className={styles.cardDesc}>{program.desc}</p>
              <a href="#" className={styles.learnMore}>Learn more &rarr;</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
