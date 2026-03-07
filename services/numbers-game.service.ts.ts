import { GAME_CONFIG, NUMBERS } from "@/constants/numbers-game";
import { shuffle } from "@/utils/array";

export const getCorrectRow = async (): Promise<number[]> => {
  await new Promise((resolve) => setTimeout(resolve, 600));

  return shuffle(NUMBERS)
    .slice(0, GAME_CONFIG.rowSize)
    .sort((a, b) => a - b);
};
