import React from 'react';
import { useData } from '../context/DataContext';

const UserList: React.FC = () => {
  const { users } = useData();

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-h2 font-bold mb-4 hidden md:block">Our Space Overview</h2>
      <h3 className="text-h3 font-bold mb-4 md:hidden">Our Space Overview</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-md rounded-custom flex flex-col cursor-pointer"
          >
            <div className="flex items-center justify-between p-4 border-gray-200">
              <h3 className="text-lg font-semibold">{user.name}</h3>
            </div>

            <div className="w-full h-48 flex items-center justify-center p-2">
              <div className="w-full h-full bg-gray-200 rounded-custom overflow-hidden">
                <img
                  src={user.images[0]}
                  alt={`Image of ${user.name}`}
                  className="w-full h-full object-cover rounded-custom"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row p-4 space-y-4 md:space-y-0 md:space-x-4">
              <div className="w-full md:w-1/2 bg-[#F9F9F9] p-2 rounded-custom">
                <p className="text-gray-500 text-h4">Day Pass</p>
                <p className="text-gray-700 text-h5">₹ 249 <span className="text-gray-500 text-h6">/ Day</span></p>
              </div>
              <div className="w-full md:w-1/2 bg-[#FFCF4B] p-2 rounded-custom">
                <p className="text-gray-500 text-h4">Bulk Pass</p>
                <p className="text-gray-700 text-h5">₹ 2400 <span className="text-gray-500 text-h6">/ 10 Days</span></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
