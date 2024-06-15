import EyeIcon from '../icons/EyeIcon';
import TrashIcon from '../icons/TrashIcon';
import styles from './card.module.css';
import Logo from '@/assets/img/logo.png';

export default function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>Title</div>
        <div>
          <img className={styles.logo} src={Logo} alt="Card logo" />
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.linePoints}>
          <span className={styles.digitPoints}>200</span>
          <span className={styles.lettersPoints}>points</span>
        </div>

        <div className={styles.lineLevel}>
          <div>
            <div className={styles.titleLevel}>Level</div>
            <div className={styles.valueLevel}>1</div>
          </div>
          <div>
            <div className={styles.titleLevel}>Level</div>
            <div className={styles.valueLevel}>1</div>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <EyeIcon />

        <TrashIcon />

        <button className={styles.btn}>Подробнее</button>
      </div>
    </div>
  );
}
