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
        <title>Menu – Crown Coffee</title>
        <meta name="description" content="Explore our full menu of coffees, teas, and pastries." />
      </Head>

      <Header />

      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Our Menu</h1>
          <p className={styles.subtitle}>Fresh, crafted, and made with love</p>
        </div>

        <div className={styles.container}>
          {categories && categories.length > 0 ? (
            categories.map(category => (
              <section key={category._id} className={styles.category}>
                <h2 className={styles.categoryName}>{category.name}</h2>
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
              <p>Menu coming soon! Check back later ☕</p>
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
    props: { categories },
    revalidate: 60, // Revalidate every 60 seconds
  };
}
