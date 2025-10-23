import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Skills from './components/Skills';
import MissionLog from './components/MissionLog';
import EnemyDossier from './components/EnemyDossier';
import OperationsMap from './components/OperationsMap';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Ensure title is exactly this, even if any component tries to change it
  useEffect(() => {
    document.title = 'The Tactical Banana';
  }, []);

  return (
    <div className="bg-gray-900 text-gray-200 font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Profile />
        <Skills />
        <MissionLog />
        <EnemyDossier />
        <OperationsMap />
        <Gallery />
        {/* Contact component now posts to /api/contact */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
