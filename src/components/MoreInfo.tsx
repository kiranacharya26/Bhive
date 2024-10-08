import React from 'react';

interface Block {
  imageSrc: string;
  text: string;
}

const Section: React.FC = () => {
  const blocks: Block[] = [
    { imageSrc: '/assets/icons/Vector-4.png', text: 'Community Events' },
    { imageSrc: '/assets/icons/Group.png', text: 'Gym Facilities' },
    { imageSrc: '/assets/icons/Vector.png', text: 'High-Speed WiFi' },
    { imageSrc: '/assets/icons/Group-2.png', text: 'Cafe & Tea Bar' },
    { imageSrc: '/assets/icons/Group-4.png', text: 'Affordable' },
    { imageSrc: '/assets/icons/Group-3.png', text: 'Comfort Lounges' },
    { imageSrc: '/assets/icons/Vector-3.png', text: 'Quick Booking' },
    { imageSrc: '/assets/icons/Vector-2.png', text: 'Sports Area' },
  ];

  return (
    <section className="container mx-auto px-4 py-6">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 text-left">Why Choose Us?</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-0">
        {blocks.map((block, index) => {
          const isTopRow = index < 4;
          const isBottomRow = index >= 4;
          const isLeftColumn = index % 4 === 0;
          const isRightColumn = index % 4 === 3;

          return (
            <div
              key={index}
              className={`p-4 shadow-lg rounded-md md:rounded-none sm:shadow-none sm:border-gray-100
              ${!isTopRow && 'sm:border-t'} ${!isBottomRow && 'sm:border-b'}
              ${!isLeftColumn && 'sm:border-l'} ${!isRightColumn && 'sm:border-r'}`}
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start">
                <img
                  src={block.imageSrc}
                  alt={`Icon ${index + 1}`}
                  className="w-6 h-6 object-contain mb-2 sm:mb-0 sm:mr-2"
                />
                <p className="text-sm text-gray-700 text-center sm:text-left sm:text-base">{block.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Section;
