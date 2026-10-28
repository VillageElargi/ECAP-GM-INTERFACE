import { useCallback, useState } from "react";

import { CASES } from "@/constants/cases";
import type { Case, GameStatus } from "../interfaces";

export const useAppState = () => {
  const [actualLevel, setActualLevel] = useState(0);
  const [status, setStatus] = useState<GameStatus>("waiting");
  const [cases, setCases] = useState<Case[]>(CASES);
  const [viewCase, setViewCase] = useState<number>(0);

  const incrementLevel = useCallback(() => {
    setActualLevel((previous) => previous + 1);
  }, []);

  return {
    actualLevel,
    setActualLevel,
    incrementLevel,

    status,
    setStatus,

    cases,
    setCases,

    viewCase,
    setViewCase,
  };
};
