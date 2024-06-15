import { CompanyInstance } from '@/stores/companies-store';
import Card from '../card/Card';
import styles from './card-list.module.css';

type CardListPropsType = {
  companyList: CompanyInstance[];
};

export default function CardList(props: CardListPropsType) {
  const { companyList } = props;

  return (
    <ul className={styles.list}>
      {companyList.map((item) => (
        <li className={styles.item} key={item.company.companyId}>
          <Card company={item} />
        </li>
      ))}
    </ul>
  );
}
