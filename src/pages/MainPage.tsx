import CardList from '@/components/card-list/CardList';
import companiesStore from '@/stores/companies-store';

export default function MainPage() {
  const companyList = companiesStore.companies;

  if (companyList.length === 0 && !companiesStore.isLoading) {
    return <div>Нет компаний</div>;
  }

  return (
    <>
      <CardList companyList={companyList} />
    </>
  );
}
