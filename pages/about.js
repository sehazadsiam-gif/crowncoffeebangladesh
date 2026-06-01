import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <>
      <Head>
        <title>Our Story — Crown Coffee</title>
        <meta name="description" content="Learn the story behind Crown Coffee — a passion for exceptional coffee and warm hospitality in Dhaka, Bangladesh." />
      </Head>

      <Header />

      <main className={styles.main}>
        <section className={styles.hero}>
          <span className={styles.heroEyebrow}>Est. 2024 · Dhaka</span>
          <h1>Our Story</h1>
          <p>A passion for coffee, crafted into a crown</p>
        </section>

        <section className={styles.content}>
          <div className={styles.block}>
            <span className={styles.blockLabel}>Who We Are</span>
            <h2>Coffee as a <em>craft</em></h2>
            <p>
              Crown Coffee was born out of a deep love for exceptional coffee and warm hospitality.
              We believe every cup should be an experience — a moment of quiet royalty in your everyday life.
            </p>
            <p>
              Founded in Dhaka, Bangladesh, we set out to bring the world's finest single-origin
              beans to our city, prepared by skilled baristas who treat every extraction as an art form.
            </p>
          </div>

          <div className={styles.block}>
            <span className={styles.blockLabel}>Our Mission</span>
            <h2>Every sip, <em>intentional</em></h2>
            <p>
              We source the finest beans from around the world — Ethiopia, Colombia, Guatemala —
              roast them with care, and serve them with pride.
            </p>
            <p>
              Whether you're starting your morning or taking a midday pause, we're here to make every
              sip count. No shortcuts. No compromises. Just great coffee.
            </p>
          </div>

          <div className={styles.block}>
            <span className={styles.blockLabel}>Find Us</span>
            <h2>Visit <em>us</em></h2>
            <div className={styles.infoItem}>
              <span>📍</span>
              <span>123 Coffee Street, Dhaka, Bangladesh</span>
            </div>
            <div className={styles.infoItem}>
              <span>⏰</span>
              <span>Monday – Sunday: 7am – 9pm</span>
            </div>
            <div className={styles.infoItem}>
              <span>📞</span>
              <span>+880 1XXX-XXXXXX</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
