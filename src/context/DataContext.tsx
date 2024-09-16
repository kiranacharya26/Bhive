import React, { createContext, useState, useContext, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  address?: string;
  latitude?: number;
  longitude?: number;
  type:string;
  google_maps_url?: string;
  city?: string;
  state?: string;
  country?: string;
  postal_code?: string;
  description?: string | null;
  rules?: string | null;
  amenities?: string[];
  images: string[];
  typeImage:string[];
  working_hours_start?: string;
  working_hours_end?: string;
  contact_person_name?: string;
  facilities?: string | null;
  is_active: boolean;
  is_day_pass_enabled: boolean;
  day_pass_price: number;
  day_pass_discounts_percentage: {
    [key: string]: {
      value: number;
      message: string;
    };
  };
  manager_id?: string | null;
  can_edit?: boolean;
}


interface DataContextType {
  users: User[];
  fetchUsers: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    const response = await fetch('/data.json');
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <DataContext.Provider value={{ users, fetchUsers }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
