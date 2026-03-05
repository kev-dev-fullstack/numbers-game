export const GAME_CONFIG = {
  maxNumber: 50,
  rowSize: 10,
} as const;

export const NUMBERS = Array.from(
  { length: GAME_CONFIG.maxNumber },
  (_, i) => i + 1,
);
