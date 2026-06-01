import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <span className={styles.crown}>♛</span>
          <span className={styles.name}>Crown Coffee</span>
          <p className={styles.tagline}>Where every cup is royalty</p>
        </div>
        <div className={styles.info}>
          <p>📍 123 Coffee Street, Your City</p>
          <p>📞 +1 (555) 123-4567</p>
          <p>⏰ Mon–Sun: 7am – 9pm</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Crown Coffee. All rights reserved.</p>
      </div>
    </footer>
  );
}
