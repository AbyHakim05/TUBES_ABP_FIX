import React from 'react';
import styles from './CTASection.module.css';

export default function CTASection() {
  return (
    <section className={styles.cta}>
      <h2 className={styles.title}>Need more information?</h2>
      <p className={styles.subtitle}>
        Write your concern to us and our specialist will get back to you.
      </p>
      <button className={styles.btn}>Contact Us</button>
    </section>
  );
}
