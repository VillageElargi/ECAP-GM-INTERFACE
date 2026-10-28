/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://unistyl.es/), etc.
 */

import "@/global.css";

export const Colors = {
  main_bg: "#0b0f1a",
  container_bg: "#0d1321",
  primary: "#2563eb",
  green: "#155138",
  red: "#ac2333",
  purple: "#5d3990",
  yellow: "#e3ae09",
  orange: "#7d4525",
  main_txt: "#f5f5f5",
  discrete_txt: "#f5f5f590",
} as const;

export const BorderSize = 0.5 as const;
export const RoundedSize = 8 as const;

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;
