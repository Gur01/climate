import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [isOpenedModal, setIsOpenedModal] = useState(false);

  return (
    <AppContext.Provider value={{ isOpenedModal, setIsOpenedModal }}>
      {children}
    </AppContext.Provider>
  );
}

export function useModal() {
  return useContext(AppContext);
}