"use client";

import { GAME_CONFIG, NUMBERS } from "@/constants/numbers-game";
import { GameButtons } from "./GameButtons";
import { NumbersSection } from "./NumbersSection";
import { ResultSection } from "./ResultSection";
import { useNumbersGame } from "@/contexts/NumbersGameContext";
import { mergeAndSortUniqueNumbers } from "@/utils/array";

export const NumbersGame = () => {
  const {
    manualNumbers,
    randomNumbers,
    correctRow,
    showTiles,
    isLoading,
    toggleNumber,
    randomizeNumbers,
    checkNumbers,
    restartGame,
  } = useNumbersGame();

  const selectedNumbers = mergeAndSortUniqueNumbers(
    manualNumbers,
    randomNumbers,
  );

  const matchedNumbers = correctRow
    ? selectedNumbers.filter((number) => correctRow.includes(number))
    : [];

  if (!showTiles) {
    return (
      <div className="max-w-xl mx-auto mt-6">
        <ResultSection
          correctRow={correctRow}
          matchedNumbers={matchedNumbers}
          onRestart={restartGame}
          isLoading={isLoading}
        />
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-6">
      <NumbersSection
        displayedNumbers={NUMBERS}
        selectedNumbers={selectedNumbers}
        onToggle={toggleNumber}
      />
      <GameButtons
        manualCount={manualNumbers.length}
        rowSize={GAME_CONFIG.rowSize}
        totalSelected={selectedNumbers.length}
        onRandomize={randomizeNumbers}
        onCheck={checkNumbers}
      />
    </div>
  );
};
