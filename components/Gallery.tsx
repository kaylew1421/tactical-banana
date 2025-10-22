import React from 'react';

interface IntelImage {
  src: string;
  title: string;
  description: string;
  width: number;
  height: number;
}

const intelData: IntelImage[] = [
  { src: '/images/tb-01.jpg', title: 'OP Yellow Mask', description: 'On field comms and full kit in the brush.', width: 1080, height: 1080 },
  { src: '/images/tb-02.jpg', title: 'Range Admin', description: 'Staging before the brief—optics checked, mags topped.', width: 1080, height: 1080 },
  { src: '/images/tb-03.jpg', title: 'Mascot Mode', description: 'Tactical banana suit deployed for morale ops.', width: 1080, height: 1080 },
  { src: '/images/tb-04.jpg', title: 'Overwatch', description: 'High ground, bright rig, eyes on the objective.', width: 1080, height: 1080 },
  { src: '/images/tb-05.jpg', title: 'HOA Enforcement', description: 'Back plate patch—neighborhood watch turned up to 11.', width: 1080, height: 1080 },
  { src: '/images/tb-06.jpg', title: 'Long Walk', description: 'Ruck in, radios up; team stepping off.', width: 1080, height: 1080 },
  { src: '/images/tb-07.jpg', title: 'Indoor Breach', description: 'Stacked kit and a brick wall backdrop—classic.', width: 1080, height: 1080 },
];


const Gallery: React.FC = () => {
  return (
    <section id="intel" className="py-20 sm:py-32 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-wider text-yellow-400 mb-4">
            Mission Intel
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 mb-12">
            Declassified visual data from recent field operations.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {intelData.map((intel, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src={intel.src} 
                alt={intel.title} 
                className="w-full h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                width={intel.width}
                height={intel.height}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                <h3 className="text-white font-bold text-lg">{intel.title}</h3>
                <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-20 overflow-hidden">{intel.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;