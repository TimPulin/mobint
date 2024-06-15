import Splash from '@components/splash/Splash';
import Header from '@components/header/Header';
import Loader from '@components/loader/Loader';

export default function MainPage() {
  return (
    <>
      <Header />
      <Loader isShow={false} />
      <Splash isShow={true} />
    </>
  );
}
