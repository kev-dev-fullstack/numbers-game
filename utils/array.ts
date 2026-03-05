export const mergeUnique = <T>(first: T[], second: T[]): T[] => {
  return Array.from(new Set([...first, ...second]));
};

export const mergeAndSortUniqueNumbers = (
  first: number[],
  second: number[],
): number[] => {
  return sortNumbersAscending(mergeUnique(first, second));
};

export function sortNumbersAscending(numbers: number[]): number[] {
  return [...numbers].sort((a, b) => a - b);
}

export const shuffle = (array: number[]): number[] => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};
