import Card from '../card/Card';
import styles from './card-list.module.css';

export default function CardList() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <Card />
      </li>
    </ul>
  );
}
