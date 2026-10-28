import { createContext } from "react";

import type { Case, GameStatus } from "../interfaces";

export type AppContextValue = {
  actualLevel: number;
  setActualLevel: React.Dispatch<React.SetStateAction<number>>;

  incrementLevel: () => void;

  status: GameStatus;
  setStatus: React.Dispatch<React.SetStateAction<GameStatus>>;

  cases: Case[];
  setCases: React.Dispatch<React.SetStateAction<Case[]>>;

  viewCase: number;
  setViewCase: React.Dispatch<React.SetStateAction<number>>;
};

export const AppContext = createContext<AppContextValue | undefined>(undefined);
