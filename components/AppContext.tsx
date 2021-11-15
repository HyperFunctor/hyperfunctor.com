import { createContext, useContext } from "react";

const AppContext = createContext<Record<string, any>>({});

export function AppWrapper({ children }) {
  let state = {
    title: "Hello, World",
  };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
