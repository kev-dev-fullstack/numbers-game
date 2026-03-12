type ResultSectionProps = {
  correctRow: number[] | null;
  matchedNumbers: number[];
  onRestart: () => void;
  isLoading?: boolean;
};

export const ResultSection = ({
  correctRow,
  matchedNumbers,
  onRestart,
  isLoading = false,
}: ResultSectionProps) => {
  if (isLoading) {
    return (
      <div className="mt-6 p-4 border rounded-lg bg-gray-100">
        <p className="text-gray-500 text-lg font-medium">Laddar resultat...</p>
      </div>
    );
  }

  if (!correctRow) {
    return null;
  }

  return (
    <div className="mt-6 p-4 border rounded-lg bg-gray-100">
      <h3 className="font-bold mb-2">Rätt rad:</h3>

      <div className="flex flex-wrap gap-2 mb-4">
        {correctRow.map((correctNumber) => (
          <div
            key={correctNumber}
            className={`px-3 py-1 rounded-full font-bold ${
              matchedNumbers.includes(correctNumber)
                ? "bg-green-500 text-white"
                : "bg-red-400 text-white"
            }`}
          >
            {correctNumber}
          </div>
        ))}
      </div>

      <button
        onClick={onRestart}
        className="w-full py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 cursor-pointer"
      >
        Spela igen
      </button>
    </div>
  );
};
