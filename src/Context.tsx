import React, { ReactNode } from "react";
const initialState = {
    firstName: "userjhon",
    lastName: "userwatson",
    email: "userjhon@gmail.com",
    };

export const Context = React.createContext({});

interface UserContextProviderProps {
  children: ReactNode;
}

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  return (
    <Context.Provider value={initialState}>
      {children}
    </Context.Provider>
  );
}
