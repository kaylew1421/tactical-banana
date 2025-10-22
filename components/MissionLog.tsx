
import React from 'react';
import { missionsData } from '../data/missions';

const MissionLog: React.FC = () => {
  return (
    <section id="missions" className="py-20 sm:py-32 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-wider text-yellow-400 mb-4">
            Mission Log
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 mb-12">
            Record of recently completed field operations.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {missionsData.map((mission, index) => (
              <div key={index} className="bg-gray-900/50 p-6 rounded-lg shadow-lg border-l-4 border-yellow-400 transform hover:scale-105 transition-transform duration-300">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">{mission.title}</h3>
                  <span className={`text-xs font-bold uppercase tracking-widest px-2 py-1 rounded ${
                    mission.status === 'SUCCESS' || mission.status === 'COMPLETE' ? 'text-green-400 bg-green-900/50' : 'text-yellow-400 bg-yellow-900/50'
                  }`}>
                    {mission.status}
                  </span>
                </div>
                <p className="text-gray-300">{mission.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionLog;