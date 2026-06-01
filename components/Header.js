import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.crown}>♛</span>
          <span className={styles.name}>Crown Coffee</span>
        </Link>
        <nav className={styles.nav}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/menu" className={styles.link}>Menu</Link>
          <Link href="/about" className={styles.link}>About</Link>
        </nav>
      </div>
    </header>
  );
}
