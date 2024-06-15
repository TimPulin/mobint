import splashStore from '@/stores/splash-store';

import Logo from '@/assets/img/logo.png';
import styles from './splash.module.css';
import { useEffect } from 'react';

type SplashPropsType = {
  isShow: boolean;
};

export default function Splash(props: SplashPropsType) {
  const { isShow } = props;

  function switchOffSplash() {
    setTimeout(() => {
      splashStore.updateIsShow(false);
    }, 3000);
  }

  useEffect(() => {
    if (isShow) switchOffSplash();
  }, [isShow]);

  if (!isShow) return null;

  return (
    <div className={styles.splash}>
      <img className={styles.img} src={Logo} alt="Logo" />
    </div>
  );
}
