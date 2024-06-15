import { useEffect } from 'react';
import { getCards } from './api/server-connections';
import MainPage from './pages/MainPage';

function App() {
  async function getCardsLocal() {
    const cardsList = await getCards(0, 5);
  }

  useEffect(() => {
    getCardsLocal();
  }, []);

  return (
    <div className="container">
      <MainPage />
    </div>
  );
}

export default App;
