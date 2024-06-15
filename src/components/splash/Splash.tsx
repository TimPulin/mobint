import Logo from '@/assets/img/logo.png';
import styles from './splash.module.css';

type SplashPropsType = {
  isShow: boolean;
};

export default function Splash(props: SplashPropsType) {
  const { isShow } = props;

  if (!isShow) return null;

  return (
    <div className={styles.splash}>
      <img className={styles.img} src={Logo} alt="Logo" />
    </div>
  );
}
