import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [isOpenedModal, setIsOpenedModal] = useState(false);
  const [wasSendForm, setWasSendForm] = useState(false);

  return (
    <AppContext.Provider value={{ isOpenedModal, setIsOpenedModal, wasSendForm, setWasSendForm}}>
      {children}
    </AppContext.Provider>
  );
}

export function useModal() {
  return useContext(AppContext);
}