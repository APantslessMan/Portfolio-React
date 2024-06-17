import React from 'react';
import './styles/tailwind.css';
import Header from './components/Header';
import MainContent from './components/MainContent';

const App: React.FC = () => {
  return (
    <main>
  <div className="gradientbg-breathe absolute top-0 left-0  bg-gradient-to-bl from-greel to-35% to-black pointer-events-none" >
      
    <div className="navbar bg-black opacity-70">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl text-white">//Portfolio: Casey Petersen</a>
      </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li><a className="text-white text-2xl">Email</a></li>
      </ul>
    </div>
    

  </div>
      <Header />
      <MainContent />
    </div>
    </main>
  );
};

export default App;