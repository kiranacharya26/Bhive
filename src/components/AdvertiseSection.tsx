import React from 'react';

const AdvertiseSection: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-6 bg-background-light mt-12 md:mt-1">
      <div className="text-center mb-12 md:mb-80 md:text-h2">
        <h2 className="text-base md:text-h2 font-bold text-secondaryButton-lightBlack text-left">
          Download our app now
        </h2>
      </div>
      <div className="relative bg-white shadow-lg rounded-lg overflow-visible pt-6 pr-6 pl-6 md:pt-8 md:pr-8 md:pl-8">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center relative z-10">
          <div className="relative w-full md:w-1/2 h-[300px]">
            <img
              src="/assets/images/Group.png"
              alt="Advertise Image"
              className="w-full h-auto object-cover"
              style={{ position: 'absolute', bottom: 0, left: 0, maxWidth: 'none' }}
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-base md:text-h4 mb-4 md:mb-6 text-secondaryButton-lightBlack">
              Boost your productivity with the BHIVE Workspace app. Elevate your workspace, collaborate efficiently, and unlock exclusive perks.
            </p>
            <div className="hidden md:flex gap-6">
              <div className="flex items-center justify-center">
                <img
                  src="/assets/images/image1.png"
                  alt="Image 1"
                  className="w-full max-w-[150px] h-auto object-contain rounded-md"
                />
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/assets/images/image2.png"
                  alt="Image 2"
                  className="w-full max-w-[150px] h-auto object-contain rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvertiseSection;
