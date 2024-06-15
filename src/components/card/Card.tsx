import { CompanyInstance } from '@/stores/companies-store';
import EyeIcon from '../icons/EyeIcon';
import TrashIcon from '../icons/TrashIcon';
import styles from './card.module.css';

type CardPropsType = {
  company: CompanyInstance;
};

export default function Card(props: CardPropsType) {
  const { company } = props;

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>{company.mobileAppDashboard.companyName}</div>
        <div>
          <img className={styles.logo} src={company.mobileAppDashboard.logo} alt="Card logo" />
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.linePoints}>
          <span className={styles.digitPoints}>{company.customerMarkParameters.mark}</span>
          {/* TODO динамическое окончание слова баллы */}
          <span className={styles.lettersPoints}>балла</span>
        </div>

        <div className={styles.loyalty}>
          <div>
            <div className={styles.titleLoyalty}>Кешбэк</div>
            {/* TODO вычислить кешбэк */}
            <div className={styles.valueLoyalty}>1</div>
          </div>
          <div>
            <div className={styles.titleLoyalty}>Уровень</div>
            <div className={styles.valueLoyalty}>
              {company.customerMarkParameters.loyaltyLevel.name}
            </div>
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
