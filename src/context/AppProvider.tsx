import { type ReactNode } from "react";

import { AppContext } from "./AppContext";
import { useAppState } from "./useAppState";

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const state = useAppState();

  return (
    <AppContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
