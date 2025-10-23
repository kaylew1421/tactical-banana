
import React from 'react';
import { enemiesData } from '../data/enemies';

// Placeholder Icons
const SquirrelIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.052 7.171C5.052 7.171 6.89 2 12 2c5.11 0 6.948 5.171 6.948 5.171"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21c-3.13 0-4.948-1.522-4.948-4.522C7.052 13.478 8.87 12 12 12c3.13 0 4.948 1.478 4.948 4.478C16.948 19.478 15.13 21 12 21z"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 13.882c1.385.474 2.5 1.574 2.5 2.868 0 1.79-1.455 3.25-3.25 3.25-1.417 0-2.62-1-3.1-2.25"/>
    </svg>
);

const CatIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6c-2.28 0-4.43.9-6 2.34C4.43 9.1 3 11.28 3 14c0 3.31 2.69 6 6 6h6c3.31 0 6-2.69 6-6 0-2.72-1.43-4.9-3-6.66C16.43 6.9 14.28 6 12 6z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 15c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 15c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h.01M19 12h.01" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 11c.5-1 1.5-1.5 2.5-1.5s2 .5 2.5 1.5"/>
    </svg>
);

const RobotIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect x="5" y="7" width="14" height="10" rx="2" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17v2a1 1 0 001 1h8a1 1 0 001-1v-2"/>
        <circle cx="9.5" cy="12.5" r=".5" fill="currentColor"/>
        <circle className="led" cx="14.5" cy="12.5" r=".5" fill="currentColor"/>
    </svg>
);

const iconMap: { [key: string]: React.ReactElement } = {
  squirrel: <SquirrelIcon />,
  cat: <CatIcon />,
  robot: <RobotIcon />,
};

const animationMap: { [key: string]: string } = {
  squirrel: 'animate-twitch',
  cat: 'animate-purr',
  robot: 'animate-blink',
};

const EnemyDossier: React.FC = () => {
  return (
    <section id="dossiers" className="py-20 sm:py-32 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-wider text-yellow-400 mb-4">
            Enemy Dossiers
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 mb-12">
            Known hostiles in the operational theater. Approach with extreme caution and a bunch of bananas.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {enemiesData.map((enemy, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-yellow-400/20">
              <div className="flex items-start">
                <div className={`text-yellow-400 w-16 h-16 flex-shrink-0 mr-5 flex items-center justify-center rounded-full bg-gray-700 ${animationMap[enemy.icon]}`}>
                  {iconMap[enemy.icon]}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white uppercase tracking-wider">{enemy.codename}</h3>
                  <p className="text-red-400 font-bold tracking-widest text-sm mb-2">THREAT: {enemy.threat}</p>
                  <p className="text-gray-300">{enemy.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnemyDossier;