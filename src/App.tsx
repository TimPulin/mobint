import { observer } from 'mobx-react-lite';
import splashStore from './stores/splash-store';
import { useEffect } from 'react';

import { getCards } from './api/server-connections';

import MainPage from './pages/MainPage';
import Header from './components/header/Header';
import Loader from './components/loader/Loader';
import Splash from './components/splash/Splash';
import companiesStore from './stores/companies-store';
import MessageOnPage from './components/message-on-page/MessageOnPage';
import BSModal from './components/bootstrap-modal/BSModal';
import { ModalProvider } from './context/ModalContext';

const App = observer(() => {
  async function getCardsLocal() {
    companiesStore.setIsLoading(true);
    const response = await getCards(0, 5);
    companiesStore.setCompanies(response.companies);
    companiesStore.setIsLoading(false);
  }

  useEffect(() => {
    splashStore.updateIsShow(true);
    getCardsLocal();
  }, []);

  return (
    <ModalProvider>
      <div className="container">
        <Header />
        <MainPage />
        <Loader isShow={false}>
          <MessageOnPage text="Подгрузка компаний" />
        </Loader>
        <Splash isShow={splashStore.isShow} />
      </div>
      <BSModal />
    </ModalProvider>
  );
});

export default App;
