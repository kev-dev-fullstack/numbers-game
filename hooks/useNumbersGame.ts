"use client";

import { useState } from "react";
import { getCorrectRow } from "@/services/getCorrectRow";
import { GAME_CONFIG, NUMBERS } from "@/constants/numbers-game";
import { mergeAndSortUniqueNumbers, sortNumbersAscending } from "@/utils/array";

export const useNumbersGame = () => {
  const [manualNumbers, setManualNumbers] = useState<number[]>([]);
  const [randomNumbers, setRandomNumbers] = useState<number[]>([]);
  const [correctRow, setCorrectRow] = useState<number[] | null>(null);
  const [showBricks, setShowBricks] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const selectedNumbers = mergeAndSortUniqueNumbers(
    manualNumbers,
    randomNumbers,
  );

  const matchedNumbers = correctRow
    ? selectedNumbers.filter((number) => correctRow.includes(number))
    : [];

  const toggleNumber = (value: number): void => {
    if (!showBricks) {
      return;
    }

    if (manualNumbers.includes(value)) {
      setManualNumbers(manualNumbers.filter((number) => number !== value));
    } else {
      if (manualNumbers.length >= GAME_CONFIG.rowSize) {
        return;
      }
      setManualNumbers(sortNumbersAscending([...manualNumbers, value]));
    }
  };

  const randomizeNumbers = (): void => {
    if (!showBricks || manualNumbers.length >= GAME_CONFIG.rowSize) {
      return;
    }

    const remainingNumbers = NUMBERS.filter(
      (number) => !manualNumbers.includes(number),
    );

    const countToRandomize = GAME_CONFIG.rowSize - manualNumbers.length;

    const shuffledNumbers = [...remainingNumbers].sort(() => {
      const randomValue = Math.random() - 0.5;
      return randomValue;
    });

    setRandomNumbers(shuffledNumbers.slice(0, countToRandomize));
  };

  const checkNumbers = async (): Promise<void> => {
    if (selectedNumbers.length !== GAME_CONFIG.rowSize) {
      return;
    }

    setShowBricks(false);
    setIsLoading(true);

    const correctRow = await getCorrectRow();
    setCorrectRow(correctRow);
    setIsLoading(false);
  };

  const restartGame = () => {
    setManualNumbers([]);
    setRandomNumbers([]);
    setCorrectRow(null);
    setShowBricks(true);
  };

  return {
    displayedNumbers: NUMBERS,
    manualNumbers,
    randomNumbers,
    selectedNumbers,
    correctRow,
    matchedNumbers,
    showBricks,
    isLoading,
    toggleNumber,
    randomizeNumbers,
    checkNumbers,
    restartGame,
  };
};
