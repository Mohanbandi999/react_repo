import React, { useState, useEffect, createContext, ReactNode } from 'react';

export const Context = createContext({});

interface UserContextProviderProps {
  children: ReactNode;
}

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [userDetails, setUserDetails] = useState({}); // Update initial value

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://645d193a250a246ae3179078.mockapi.io/users');
        const data = await response.json();
        setUserDetails(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Context.Provider value={userDetails}>
      {userDetails && Object.keys(userDetails).length > 0 ? (
        children
      ) : (
        'Loading...'
      )}
    </Context.Provider>
  );
};
