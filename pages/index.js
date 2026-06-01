import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Crown Coffee – Where Every Cup is Royalty</title>
        <meta name="description" content="Crown Coffee – Premium coffee, artisan pastries, and a cozy atmosphere." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.heroIcon}>♛</span>
            <h1 className={styles.heroTitle}>Crown Coffee</h1>
            <p className={styles.heroTagline}>Where every cup is royalty</p>
            <div className={styles.heroBtns}>
              <Link href="/menu" className={styles.btnPrimary}>View Our Menu</Link>
              <Link href="/about" className={styles.btnSecondary}>About Us</Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.features}>
          <div className={styles.featuresGrid}>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>☕</span>
              <h3>Premium Beans</h3>
              <p>Sourced from the finest farms around the world</p>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>🥐</span>
              <h3>Fresh Pastries</h3>
              <p>Baked fresh daily, every morning</p>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>👑</span>
              <h3>Royal Experience</h3>
              <p>Cozy ambiance fit for royalty</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta}>
          <h2>Ready to order?</h2>
          <p>Browse our full menu and discover your new favorite drink</p>
          <Link href="/menu" className={styles.btnPrimary}>Explore the Menu</Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
