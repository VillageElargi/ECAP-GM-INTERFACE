export interface Case {
  id: number;
  name: string;
  date: Date;
  path: string[];
  syncCodes: { code: string; solutionId: number; entered: boolean }[];
}

export type GameStatus =
  | "welcome"
  | "waiting"
  | "loading"
  | "searching"
  | "navigating"
  | "preventing"
  | "finished";
