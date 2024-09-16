import React from 'react';
import { useData } from '../context/DataContext';

const UserList: React.FC = () => {
  const { users } = useData();

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-h2 font-bold mb-4 hidden md:block text-secondaryButton-lightGrey">Our Space Overview</h2>
      <h3 className="text-h3 font-bold mb-4 md:hidden text-secondaryButton-lightGrey">Our Space Overview</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {users.map((user) => (
          <div key={user.id} className="bg-white shadow-md rounded-md flex flex-col cursor-pointer relative">
            <div className="flex items-center justify-between p-3 border-gray-200">
              <h3 className="text-lg font-semibold text-secondaryButton-lightGrey">{user.name}</h3>
              <div className="flex flex-col items-center space-y-2 mt-4 p-2 bg-[#F9F9F9] rounded-lg">
                <img src="/assets/icons/assistant_direction.png" alt="Icon" className="w-4 h-4 object-contain" />
                <p className="text-xs font-medium text-secondaryButton-lightBlack">6 Kms</p>
              </div>
            </div>
            <div className="relative w-full h-48 flex items-center justify-center p-2">
              <div className="w-full h-full bg-gray-200 rounded-md overflow-hidden">
                <img src={user.images[0]} alt={`Image of ${user.name}`} className="w-full h-full object-cover rounded-md" />
                <div className="absolute top-3 left-3 bg-secondaryButton-lightGrey p-2 rounded-md shadow-lg flex items-center space-x-1 z-10">
                  <img src={user.typeImage[0]} alt="Icon" className="w-4 h-4 object-contain" />
                  <p className="text-xs font-medium text-logo-background1 tracking-widest">{user.type}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row p-2 space-x-4">
              <div className="w-full md:w-1/2 bg-[#F9F9F9] p-2 rounded-md flex flex-row justify-between space-y-2">
                <div className="flex flex-col justify-space-evenly">
                  <p className="text-gray-500 text-xs md:text-sm">Day Pass</p>
                  <p className="text-gray-600 text-sm md:text-h4 text-secondaryButton-lightGrey">₹ 249 <span className="text-gray-500 text-h7 md:text-sm">/ Day</span></p>
                </div>
                <div className="flex items-center justify-start">
                  <img src="/assets/icons/Vector(Stroke).png" alt="Icon" className="w-2.5 h-2.5 object-scale-down" />
                  <img src="/assets/icons/Vector(Stroke)-1.png" alt="Icon" className="w-2.5 h-2.5 object-scale-down" />
                  <img src="/assets/icons/Vector(Stroke)-2.png" alt="Icon" className="w-2.5 h-2.5 object-scale-down" />
                </div>
              </div>
              <div className="w-full md:w-1/2 bg-[#FFCF4B] p-2 rounded-md flex flex-row justify-between space-y-2">
                <div className="flex flex-col justify-space-evenly">
                  <p className="text-gray-500 text-xs md:text-sm">Bulk Pass</p>
                  <p className="text-gray-600 text-sm md:text-h4 text-secondaryButton-lightGrey">
                    ₹ 2400<span className="text-gray-500 text-h7 md:text-sm">/ 10 Days</span>
                  </p>
                </div>
                <div className="flex items-center justify-start">
                  <img src="/assets/icons/Vector(Stroke).png" alt="Icon" className="w-2.5 h-2.5 object-scale-down" />
                  <img src="/assets/icons/Vector(Stroke)-1.png" alt="Icon" className="w-2.5 h-2.5 object-scale-down" />
                  <img src="/assets/icons/Vector(Stroke)-2.png" alt="Icon" className="w-2.5 h-2.5 object-scale-down" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
