// src/App.tsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Skills from './components/Skills';
import MissionLog from './components/MissionLog';
import EnemyDossier from './components/EnemyDossier';
import OperationsMap from './components/OperationsMap';
import Gallery from './components/Gallery';
// import Contact from './components/Contact'; // ⬅️ replaced by SecureCommsForm
import Footer from './components/Footer';
import SecureCommsForm from './components/SecureCommsForm';

const App: React.FC = () => {
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

        {/* Secure Communications (replaces <Contact />) */}
        <section id="contact" className="bg-zinc-900/60 border-t border-yellow-400/10">
          <div className="mx-auto max-w-5xl px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Secure Communications</h2>
            <p className="text-zinc-300 mb-6">
              Send a message directly to HQ. We’ll reply to the email you provide.
            </p>
            <SecureCommsForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
