import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-[90vh] flex flex-col-reverse md:flex-row overflow-hidden mt-[var(--navbar-height)]">
      <div className="w-full md:w-3/5 flex items-center justify-center md:justify-start p-6 relative">
        <div className="text-center md:text-left relative z-10">
          <h4 className="text-h4 md:hidden font-bold mb-1 text-secondaryButton-lightGrey">
            Host your meeting with world-class amenities. Starting at <span className="text-primaryButton-darkYellow">₹199/-!</span>
          </h4>
          <h1 className="md:pl-16 text-h1 hidden md:block font-bold mb-1 text-secondaryButton-lightGrey">
            Host your meeting with world-class amenities. Starting at <span className="text-primaryButton-darkYellow">₹199/-!</span>
          </h1>
        </div>
        <div
          className="absolute inset-0 hidden md:block"
          style={{ backgroundImage: "url('/assets/images/image1936.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
      </div>
      <div className="w-full md:w-2/5 h-full relative">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "url('/assets/images/Vector7.png')", backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 11 }}
        ></div>
        <img
          src="/assets/images/Coworkingvideo1.png"
          alt="Coworking Video"
          className="w-full h-full object-none md:relative md:right-[94px] md:top-[-110px] md:z-[1]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
