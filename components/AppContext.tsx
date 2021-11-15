import invariant from "invariant";
import { createContext, ReactNode, useContext, useMemo } from "react";

interface AppContextData {
  title: string;
}

const AppContext = createContext<AppContextData | null>(null);

interface AppWrapperProps {
  children: ReactNode;
}

export function AppWrapper({ children }: AppWrapperProps) {
  const state = useMemo(
    () => ({
      title: "Hello, World",
    }),
    []
  );

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const ctx = useContext(AppContext);

  invariant(!!ctx, `Missing AppContextProvider!`);

  return ctx;
}
