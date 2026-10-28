import type { Case } from "../interfaces";

const CASE_1: Case = {
  id: 1,
  name: "Cas 1",
  date: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
  path: ["Dangers naturels", "Météorologiques", "Grêle"],
  syncCodes: [{ code: "RSV2", solutionId: 4, entered: false }],
};

const CASE_2: Case = {
  id: 2,
  name: "Cas 2",
  date: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
  path: ["Dangers naturels", "Météorologiques", "Grêle"],
  syncCodes: [{ code: "RSV2", solutionId: 4, entered: false }],
};
const CASE_3: Case = {
  id: 3,
  name: "Cas 2",
  date: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
  path: ["Dangers naturels", "Météorologiques", "Grêle"],
  syncCodes: [{ code: "RSV2", solutionId: 4, entered: false }],
};

export const CASES: Case[] = [CASE_1, CASE_2, CASE_3];
