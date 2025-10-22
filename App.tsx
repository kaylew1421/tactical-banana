
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Skills from './components/Skills';
import MissionLog from './components/MissionLog';
import OperationsMap from './components/OperationsMap';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-gray-200 font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Profile />
        <Skills />
        <MissionLog />
        <OperationsMap />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default App;