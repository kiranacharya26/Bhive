import React from 'react';

const AdvertiseSection: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-6 bg-background-light mt-12">
      {/* Top Heading */}
      <div className="text-center mb-80"> {/* Increased margin-bottom */}
        <h2 className="text-h2 font-bold text-secondaryButton-lightBlack">
          Download our app now
        </h2>
      </div>

      {/* Box with Image and Text */}
      <div className=" relative bg-white shadow-lg rounded-lg overflow-visible pt-8 pr-8 pl-8"> {/* Padding top, right, and left */}
  <div className="flex flex-col md:flex-row gap-12 items-center relative z-10"> {/* Increased gap for spacing between blocks */}
    {/* Image Block */}
    <div className="relative w-full md:w-1/2 h-[300px]">
      <img
        src="/assets/images/Group.png"
        alt="Advertise Image"
        className="w-full h-auto object-cover"
        style={{ position: 'absolute', bottom: 0, left: 0, maxWidth: 'none' }}
      />
    </div>

    {/* Text Block */}
    <div className="w-full md:w-1/2">
      <p className="text-h4 mb-6 text-secondaryButton-lightBlack">
        Boost your productivity with the BHIVE Workspace app. Elevate your workspace, collaborate efficiently, and unlock exclusive perks.
      </p>
    </div>
  </div>
</div>



    </section>
  );
};

export default AdvertiseSection;
