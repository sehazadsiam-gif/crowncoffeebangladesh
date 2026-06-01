import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us – Crown Coffee</title>
      </Head>

      <Header />

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>Our Story</h1>
          <p>A passion for coffee, crafted into a crown</p>
        </section>

        <section className={styles.content}>
          <div className={styles.block}>
            <h2>Who We Are</h2>
            <p>
              Crown Coffee was born out of a deep love for exceptional coffee and warm hospitality.
              We believe every cup should be an experience — a moment of royalty in your everyday life.
            </p>
          </div>

          <div className={styles.block}>
            <h2>Our Mission</h2>
            <p>
              We source the finest beans from around the world, roast them with care, and serve
              them with pride. Whether you're starting your morning or taking a midday break,
              we're here to make every sip count.
            </p>
          </div>

          <div className={styles.block}>
            <h2>Visit Us</h2>
            <p>📍 123 Coffee Street, Your City</p>
            <p>⏰ Monday – Sunday: 7am – 9pm</p>
            <p>📞 +1 (555) 123-4567</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
