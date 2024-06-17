import { CSSProperties } from 'react';
import { CompanyInstance } from '@/stores/companies-store';

import EyeIcon from '../icons/EyeIcon';
import TrashIcon from '../icons/TrashIcon';
import ButtonBase from '../button/ButtonBase';
import styles from './card.module.css';
import { useBSModal } from '@/context/ModalContext';

type CardPropsType = {
  company: CompanyInstance;
};

export default function Card(props: CardPropsType) {
  const { company } = props;
  const bsModal = useBSModal();

  const dynamicStyles: CSSProperties & { [key: string]: string } = {
    '--color-background': company.mobileAppDashboard.backgroundColor,
    '--color-main': company.mobileAppDashboard.mainColor,
    '--color-card-background': company.mobileAppDashboard.cardBackgroundColor,
    '--color-text': company.mobileAppDashboard.textColor,
    '--color-highlight-text': company.mobileAppDashboard.highlightTextColor,
    '--color-accent': company.mobileAppDashboard.accentColor,
    border:
      company.mobileAppDashboard.backgroundColor.toLowerCase() === '#efefef'
        ? '2px solid #fff'
        : 'none',
  };

  const Element = ({ btnName }: { btnName: string }) => {
    return (
      <div>
        <div>Нажата кнопка: {btnName}</div>
        <div>ИД Компании: {company.mobileAppDashboard.companyName}</div>
      </div>
    );
  };

  const onShowClick = (btnName: string) => {
    bsModal.setContent({
      text: '',
      JSXElement: <Element btnName={btnName} />,
      btnText: 'Хорошо',
    });
    bsModal.setShow(true);
  };

  const formatPointsWord = (num: number) => {
    const numStr = String(num);
    if (numStr.length > 1) {
      if (['11', '12', '13', '14'].includes(numStr.slice(-2))) {
        return 'баллов';
      }
    } else if (['2', '3', '4'].includes(numStr.slice(-1))) {
      return 'балла';
    } else if (numStr.slice(-1) === '1') {
      return 'балл';
    }
    return 'баллов';
  };

  return (
    <div style={dynamicStyles} className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.cardTitle}>{company.mobileAppDashboard.companyName}</h2>
        <div>
          <img className={styles.logo} src={company.mobileAppDashboard.logo} alt="Card logo" />
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.linePoints}>
          <span className={styles.digitPoints}>{company.customerMarkParameters.mark}</span>
          <span className={styles.lettersPoints}>
            {formatPointsWord(company.customerMarkParameters.mark)}
          </span>
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
        <span className={styles.info}>
          <ButtonBase
            onClick={() => onShowClick('Посмотреть карточку')}
            ariaLabel="Посмотреть карточку"
          >
            <EyeIcon />
          </ButtonBase>
        </span>

        <span className={styles.trash}>
          <ButtonBase onClick={() => onShowClick('Удалить карточку')} ariaLabel="Удалить карточку">
            <TrashIcon />
          </ButtonBase>
        </span>

        <button className={styles.btn} onClick={() => onShowClick('Подробнее')}>
          Подробнее
        </button>
      </div>
    </div>
  );
}
