import React from 'react';
import './styles/tailwind.css';
import Header from './components/Header';
import MainContent from './components/MainContent';

const App: React.FC = () => {
  return (
    <div className="relative" id="grad1">
      <Header />
      <MainContent />
    </div>
  );
};

export default App;