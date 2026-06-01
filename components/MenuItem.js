import Image from 'next/image';
import { urlFor } from '../lib/sanity';
import styles from './MenuItem.module.css';

export default function MenuItem({ item }) {
  const { name, description, price, image, tags, available } = item;

  return (
    <div className={`${styles.card} ${!available ? styles.unavailable : ''}`}>
      <div className={styles.imageWrapper}>
        {image ? (
          <Image
            src={urlFor(image).width(400).height(300).url()}
            alt={name}
            width={400}
            height={300}
            className={styles.image}
          />
        ) : (
          <div className={styles.placeholder}>☕</div>
        )}
        {!available && <span className={styles.soldOut}>Sold Out</span>}
      </div>
      <div className={styles.content}>
        <div className={styles.top}>
          <h3 className={styles.name}>{name}</h3>
          <span className={styles.price}>${price?.toFixed(2)}</span>
        </div>
        {description && <p className={styles.description}>{description}</p>}
        {tags && tags.length > 0 && (
          <div className={styles.tags}>
            {tags.map(tag => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
