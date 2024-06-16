import splashStore from '@/stores/splash-store';
import { observer } from 'mobx-react-lite';

import Logo from '@/assets/img/logo.png';
import styles from './splash.module.css';
import { useEffect } from 'react';

const Splash = observer(() => {
  const { isShow } = splashStore;

  function switchOffSplash() {
    const body = document.querySelector('body');
    if (body) {
      body.classList.add('body-lock');

      setTimeout(() => {
        splashStore.updateIsShow(false);
        body.classList.remove('body-lock');
      }, 3000);
    }
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
});

export default Splash;
