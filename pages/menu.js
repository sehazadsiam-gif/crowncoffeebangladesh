import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MenuItem from '../components/MenuItem';
import { getMenuCategories } from '../lib/sanity';
import styles from '../styles/Menu.module.css';

export default function Menu({ categories }) {
  return (
    <>
      <Head>
        <title>Menu — Crown Coffee</title>
        <meta name="description" content="Explore our full menu of single-origin coffees, specialty teas, and artisan pastries at Crown Coffee." />
      </Head>

      <Header />

      <main className={styles.main}>
        <div className={styles.hero}>
          <span className={styles.heroEyebrow}>Dhaka, Bangladesh</span>
          <h1 className={styles.title}>Our Menu</h1>
          <p className={styles.subtitle}>Sourced with care, prepared with precision</p>
        </div>

        <div className={styles.container}>
          {categories && categories.length > 0 ? (
            categories.map(category => (
              <section key={category._id} className={styles.category}>
                <div className={styles.categoryHeader}>
                  <h2 className={styles.categoryName}>{category.name}</h2>
                  <div className={styles.categoryLine} />
                </div>
                {category.description && (
                  <p className={styles.categoryDesc}>{category.description}</p>
                )}
                <div className={styles.grid}>
                  {category.items && category.items.map(item => (
                    <MenuItem key={item._id} item={item} />
                  ))}
                </div>
              </section>
            ))
          ) : (
            <div className={styles.empty}>
              <p>Our menu is coming soon — check back shortly. ☕</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const categories = await getMenuCategories();
  return {
    props: { categories: categories || [] },
    revalidate: 60,
  };
}
