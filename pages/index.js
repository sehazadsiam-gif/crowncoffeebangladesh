import Head from 'next/head';
import Link from 'next/link';
import { Crown, Coffee, Croissant } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Crown Coffee — Where Every Cup is Royalty</title>
        <meta name="description" content="Crown Coffee — Premium, single-origin coffee, artisan pastries, and a refined atmosphere in Bangladesh." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        {/* ── Hero ── */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>Est. 2024 · Dhaka, Bangladesh</span>
            <span className={styles.heroIcon}><Crown size={64} strokeWidth={1.5} /></span>
            <h1 className={styles.heroTitle}>
              Crown <em>Coffee</em>
            </h1>
            <p className={styles.heroSubtitle}>Where every cup is an act of royalty</p>
            <div className={styles.heroRule} />
            <div className={styles.heroBtns}>
              <Link href="/menu" className={styles.btnPrimary}>Explore the Menu</Link>
              <Link href="/about" className={styles.btnSecondary}>Our Story</Link>
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section className={styles.features}>
          <p className={styles.sectionLabel}>Why Crown Coffee</p>
          <h2 className={styles.sectionTitle}>Crafted with <em>intention</em></h2>
          <div className={styles.sectionRule} />
          <div className={styles.featuresGrid}>
            <div className={styles.feature}>
              <span className={styles.featureIcon}><Coffee size={40} strokeWidth={1.5} /></span>
              <h3>Single-Origin Beans</h3>
              <p>Sourced directly from the finest farms across Ethiopia, Colombia, and beyond.</p>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}><Croissant size={40} strokeWidth={1.5} /></span>
              <h3>Artisan Pastries</h3>
              <p>Baked fresh every morning by our in-house pastry team with local ingredients.</p>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}><Crown size={40} strokeWidth={1.5} /></span>
              <h3>The Royal Experience</h3>
              <p>A refined atmosphere where hospitality is as intentional as our coffee.</p>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className={styles.cta}>
          <h2>Ready to experience <em>royalty?</em></h2>
          <p>Browse our full menu and discover your next favourite cup.</p>
          <Link href="/menu" className={styles.btnPrimary}>View Full Menu</Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
