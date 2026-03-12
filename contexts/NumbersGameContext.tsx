"use client";

import { createContext, useContext } from "react";
import { useNumbersGame as useNumbersGameHook } from "@/hooks/useNumbersGame";

type NumbersGameContextType = ReturnType<typeof useNumbersGameHook>;

const NumbersGameContext = createContext<NumbersGameContextType | undefined>(
  undefined,
);

export const NumbersGameProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const numbersGame = useNumbersGameHook();

  return (
    <NumbersGameContext.Provider value={numbersGame}>
      {children}
    </NumbersGameContext.Provider>
  );
};

export const useNumbersGame = () => {
  const context = useContext(NumbersGameContext);

  if (!context) {
    throw new Error("useNumbersGame must be used inside NumbersGameProvider");
  }

  return context;
};
