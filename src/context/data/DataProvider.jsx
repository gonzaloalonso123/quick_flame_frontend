import React, { createContext, useContext, useState } from "react";
import { useMethods } from "./methods";

const DataContextProvider = createContext();

export const useData = () => {
  const context = useContext(DataContextProvider);
  return context;
};

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const provider = useMethods(setData);

  return (
    <DataContextProvider.Provider value={{ ...provider, ...data }}>
      {children}
    </DataContextProvider.Provider>
  );
};
