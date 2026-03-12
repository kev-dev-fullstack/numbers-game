import { useState } from "react";
import { GAME_CONFIG, NUMBERS } from "@/constants/numbers-game";
import { shuffle, sortNumbersAscending } from "@/utils/array";
import { getCorrectRow } from "@/services/numbers-game.service";

export const useNumbersGame = () => {
  const [manualNumbers, setManualNumbers] = useState<number[]>([]);
  const [randomNumbers, setRandomNumbers] = useState<number[]>([]);
  const [correctRow, setCorrectRow] = useState<number[] | null>(null);
  const [showTiles, setShowTiles] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const toggleNumber = (value: number): void => {
    if (manualNumbers.includes(value)) {
      setManualNumbers(manualNumbers.filter((n) => n !== value));
      return;
    }

    if (randomNumbers.includes(value)) {
      setRandomNumbers(randomNumbers.filter((n) => n !== value));
      return;
    }

    if (manualNumbers.length + randomNumbers.length >= GAME_CONFIG.rowSize) {
      return;
    }

    setManualNumbers(sortNumbersAscending([...manualNumbers, value]));
  };

  const randomizeNumbers = (): void => {
    if (manualNumbers.length >= GAME_CONFIG.rowSize) {
      return;
    }

    const remainingNumbers = NUMBERS.filter(
      (number) => !manualNumbers.includes(number),
    );

    const countToRandomize = GAME_CONFIG.rowSize - manualNumbers.length;

    const shuffledNumbers = shuffle(remainingNumbers);

    setRandomNumbers(shuffledNumbers.slice(0, countToRandomize));
  };

  const checkNumbers = async (): Promise<void> => {
    const selectedNumbers = [...manualNumbers, ...randomNumbers].sort(
      (a, b) => a - b,
    );

    if (selectedNumbers.length !== GAME_CONFIG.rowSize) {
      return;
    }

    setShowTiles(false);
    setIsLoading(true);

    try {
      const row = await getCorrectRow();
      setCorrectRow(row);
    } finally {
      setIsLoading(false);
    }
  };

  const restartGame = () => {
    setManualNumbers([]);
    setRandomNumbers([]);
    setCorrectRow(null);
    setShowTiles(true);
  };

  return {
    manualNumbers,
    randomNumbers,
    correctRow,
    showTiles,
    isLoading,
    toggleNumber,
    randomizeNumbers,
    checkNumbers,
    restartGame,
  };
};
