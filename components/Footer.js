import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Brand */}
        <div className={styles.brand}>
          <span className={styles.crown}>♛</span>
          <span className={styles.name}>Crown Coffee</span>
          <p className={styles.tagline}>
            Sourced with care, prepared with precision.
            A royal coffee experience in Dhaka, Bangladesh.
          </p>
        </div>

        {/* Visit */}
        <div>
          <p className={styles.columnTitle}>Visit Us</p>
          <div className={styles.info}>
            <p>📍 123 Coffee Street, Dhaka</p>
            <p>⏰ Mon–Sun: 7am – 9pm</p>
            <p>📞 +880 1XXX-XXXXXX</p>
          </div>
        </div>

        {/* Navigate */}
        <div>
          <p className={styles.columnTitle}>Navigate</p>
          <div className={styles.info}>
            <p><a href="/">Home</a></p>
            <p><a href="/menu">Menu</a></p>
            <p><a href="/about">About</a></p>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Crown Coffee, Bangladesh. All rights reserved.</p>
      </div>
    </footer>
  );
}
