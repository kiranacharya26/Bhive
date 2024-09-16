import React from 'react';
import './App.css';
import { DataProvider } from './context/DataContext';
import UserList from './components/UserList';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AdvertiseSection from './components/AdvertiseSection';
import Footer from './components/Footer';
import MoreInfo from './components/MoreInfo';

const App: React.FC = () => {
  return (
    <DataProvider>
      <div className="font-inter">
        <Navbar/>
        <HeroSection/>
        <MoreInfo/>
        <UserList />
        <AdvertiseSection/>
        <Footer/>
      </div>
    </DataProvider>
  );
};

export default App;
