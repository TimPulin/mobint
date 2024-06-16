import { observer } from 'mobx-react-lite';
import { useEffect, useRef } from 'react';

import CardList from '@/components/card-list/CardList';
import companiesStore from '@/stores/companies-store';
import { getCards } from '@/api/server-connections';
import MessageOnPage from '@/components/message-on-page/MessageOnPage';
import { throttle } from '@/utils/throttle';
import { AxiosError } from 'axios';
import { useBSModal } from '@/context/ModalContext';
import { ExclamationIcon } from '@/components/icons/ExclamationIcon';

const OFFSET_STEP = 10;

const MainPage = observer(() => {
  const bsModal = useBSModal();
  const companyList = companiesStore.companies;
  const currentOffsetRef = useRef(0);

  async function getCardsLocal(currentOffset: number) {
    try {
      companiesStore.setIsLoading(true);

      const response = await getCards(currentOffset, 3);
      companiesStore.addCompanies(response.data.companies);

      currentOffsetRef.current += OFFSET_STEP;
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 401) {
          bsModal.setContent({
            text: 'Ошибка авторизации',
            btnText: 'Принято',
          });
          bsModal.setShow(true);
        } else if (error.response?.status === 400) {
          bsModal.setContent({
            text: error.response.data.message,
            btnText: 'Принято',
            JSXElement: <ExclamationIcon />,
          });
          bsModal.setShow(true);
        } else if (error.response?.status === 500) {
          bsModal.setContent({
            text: 'Все упало',
            btnText: 'Принято',
            JSXElement: <ExclamationIcon />,
          });
          bsModal.setShow(true);
        }
      }
    } finally {
      companiesStore.setIsLoading(false);
    }
  }

  function onScrollList() {
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
      if (!companiesStore.isLoading) getCardsLocal(currentOffsetRef.current);
    }
  }

  useEffect(() => {
    if (!companiesStore.isLoading) getCardsLocal(0);
    document.addEventListener('scroll', throttle(onScrollList, 1000));
    return () => document.removeEventListener('scroll', throttle(onScrollList, 1000));
  }, []);

  if (companyList.length === 0 && !companiesStore.isLoading) {
    return (
      <main className="main">
        <MessageOnPage text="Нет компаний" />
      </main>
    );
  }

  return (
    <main className="main">
      <CardList companyList={companyList} />
    </main>
  );
});

export default MainPage;
