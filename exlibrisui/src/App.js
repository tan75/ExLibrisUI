import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainNav from './components/MainNav/MainNav';
import MainContent from './components/MainContent/MainContent';

const App = () => {
  return (
    <BrowserRouter>
      <MainNav />
      <MainContent />
    </BrowserRouter>
  );
};

export default App;
