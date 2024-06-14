import Header from '../components/header/Header';
import Loader from '../components/header/loader/Loader';

export default function MainPage() {
  return (
    <>
      <Header />
      <Loader isShow={false} />
    </>
  );
}
