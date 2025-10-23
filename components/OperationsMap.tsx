
import React from 'react';
import { missionsData } from '../data/missions';

const WorldMapSVG = () => (
  <svg viewBox="0 0 1000 500" className="w-full h-auto text-gray-700">
    {/* Simplified World Map Paths */}
    <g fill="currentColor" stroke="#374151" strokeWidth="0.5">
        {/* North America */}
        <path d="M220,50 L100,120 L120,200 L250,220 L350,150 L300,50 Z" />
        {/* South America */}
        <path d="M280,240 L320,400 L250,420 L220,280 Z" />
        {/* Africa */}
        <path d="M450,200 L550,220 L520,380 L430,350 Z" />
        {/* Europe */}
        <path d="M450,80 L550,70 L580,150 L480,180 Z" />
        {/* Asia */}
        <path d="M600,80 L850,100 L800,280 L600,250 Z" />
        {/* Australia */}
        <path d="M800,380 L900,400 L850,480 L780,450 Z" />
    </g>
  </svg>
);


const OperationsMap: React.FC = () => {
  return (
    <section id="map" className="py-20 sm:py-32 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-wider text-yellow-400 mb-4">
            Global Operations Map
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 mb-12">
            Tracking Agent Banana's sphere of influence.
          </p>
        </div>
        <div className="max-w-5xl mx-auto p-4 sm:p-8 bg-gray-800 rounded-lg shadow-2xl">
            <div className="relative">
                <WorldMapSVG />
                {missionsData.map((mission, index) => {
                    const isMostRecent = index === missionsData.length - 1;
                    return (
                        <div
                            key={index}
                            className="group absolute"
                            style={{ top: mission.coords.top, left: mission.coords.left }}
                        >
                            <div className={`
                                absolute transform -translate-x-1/2 -translate-y-1/2 
                                rounded-full bg-yellow-400 cursor-pointer 
                                animate-glow-yellow
                                ${isMostRecent ? 'w-4 h-4' : 'w-3 h-3'}
                            `}>
                            </div>

                            {/* Tooltip */}
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-max max-w-xs p-3 bg-gray-900 text-white text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                                <h4 className="font-bold uppercase tracking-wider">{mission.title}</h4>
                                <span className={`text-xs font-bold uppercase ${
                                    mission.status === 'SUCCESS' || mission.status === 'COMPLETE' ? 'text-green-400' : 'text-yellow-400'
                                }`}>{mission.status}</span>
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-gray-900"></div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
      </div>
    </section>
  );
};

export default OperationsMap;