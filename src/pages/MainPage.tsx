import { observer } from 'mobx-react-lite';
import splashStore from '@/stores/splash-store';

import Splash from '@components/splash/Splash';
import Header from '@components/header/Header';
import Loader from '@components/loader/Loader';
import { useEffect } from 'react';
import CardList from '@/components/card-list/CardList';

const MainPage = observer(() => {
  useEffect(() => {
    splashStore.updateIsShow(true);
  }, []);
  return (
    <>
      <Header />
      <CardList />
      <Loader isShow={false} />
      <Splash isShow={splashStore.isShow} />
    </>
  );
});

export default MainPage;
