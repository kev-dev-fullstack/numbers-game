export const getCorrectRow = async (): Promise<number[]> => {
  const response = await fetch("/api/numbers-game/correct-row");

  if (!response.ok) {
    throw new Error("Failed to fetch correct row");
  }

  const data = await response.json();
  return data.correctRow;
};
