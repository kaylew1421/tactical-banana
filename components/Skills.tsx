import React from 'react';

interface Skill {
  name: string;
  // Fix: Replaced JSX.Element with React.ReactElement to resolve namespace issue.
  icon: React.ReactElement;
}

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);
const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);
const ZapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);
const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const skillsList: Skill[] = [
  { name: 'Potassium-Powered Stealth', icon: <EyeIcon /> },
  { name: 'Strategic Peeling Maneuvers', icon: <ZapIcon /> },
  { name: 'Anti-Bruising Armor', icon: <ShieldIcon /> },
  { name: 'Bunch-Based Tactics', icon: <UsersIcon /> },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 sm:py-32 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-wider text-yellow-400 mb-4">
            Core Competencies
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 mb-12">
            A unique skill set for unconventional operations.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsList.map((skill, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-yellow-400/20">
              <div className="text-yellow-400 w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-gray-700">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold text-white uppercase tracking-wider">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;