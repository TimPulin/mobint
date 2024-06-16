import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

import CardList from '@/components/card-list/CardList';
import companiesStore from '@/stores/companies-store';
import { getCards } from '@/api/server-connections';
import MessageOnPage from '@/components/message-on-page/MessageOnPage';

const MainPage = observer(() => {
  const companyList = companiesStore.companies;

  async function getCardsLocal() {
    companiesStore.setIsLoading(true);

    const response = await getCards(0, 5);
    console.log(response);

    companiesStore.setCompanies(response.companies);
    companiesStore.setIsLoading(false);
  }

  useEffect(() => {
    getCardsLocal();
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
