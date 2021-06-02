import React from 'react';
import { useRoutes } from 'hookrouter';
import routes from './linkEnum';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const match = useRoutes(routes);
  return match ? (
    <>
      <Header />
      {match}
      <Footer />
    </>
  ) : (
    <NotFoundPage />
  );
};
export default App;
