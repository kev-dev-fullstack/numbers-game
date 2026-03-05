"use client";

import { GAME_CONFIG } from "@/constants/numbers-game";
import { GameButtons } from "./GameButtons";
import { useNumbersGame } from "@/hooks/useNumbersGame";
import { NumbersSection } from "./NumbersSection";
import { ResultSection } from "./ResultSection";

export const NumbersGame = () => {
  const {
    displayedNumbers,
    manualNumbers,
    selectedNumbers,
    correctRow,
    matchedNumbers,
    showBricks,
    isLoading,
    toggleNumber,
    randomizeNumbers,
    checkNumbers,
    restartGame,
  } = useNumbersGame();

  return (
    <div className="max-w-xl mx-auto mt-6">
      {showBricks && (
        <>
          <NumbersSection
            displayedNumbers={displayedNumbers}
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
        </>
      )}

      {!showBricks && (
        <ResultSection
          correctRow={correctRow}
          matchedNumbers={matchedNumbers}
          onRestart={restartGame}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};
