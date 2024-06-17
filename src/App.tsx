import { useEffect } from 'react';

import splashStore from './stores/splash-store';

import { ModalProvider } from './context/ModalContext';

import BSModal from './components/bootstrap-modal/BSModal';
import MainPage from './pages/MainPage';
import Header from './components/header/Header';
import Loader from './components/loader/Loader';
import Splash from './components/splash/Splash';
import MessageOnPage from './components/message-on-page/MessageOnPage';
import { LoaderProvider } from './context/LoaderContext';

export default function App() {
  useEffect(() => {
    splashStore.updateIsShow(true);
  }, []);

  return (
    <ModalProvider>
      <LoaderProvider>
        <div className="container">
          <Header />
          <MainPage />
          <Loader>
            <MessageOnPage text="Подгрузка компаний" />
          </Loader>
        </div>
        <Splash />
        <BSModal />
      </LoaderProvider>
    </ModalProvider>
  );
}
