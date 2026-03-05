type GameButtonsProps = {
  manualCount: number;
  rowSize: number;
  totalSelected: number;
  onRandomize: () => void;
  onCheck: () => void;
};

export const GameButtons = ({
  manualCount,
  rowSize,
  totalSelected,
  onRandomize,
  onCheck,
}: GameButtonsProps) => (
  <>
    <button
      onClick={onRandomize}
      disabled={manualCount >= rowSize}
      className="mt-4 w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 disabled:bg-gray-400 cursor-pointer disabled:cursor-not-allowed"
    >
      Slumpa nummer
    </button>

    <button
      onClick={onCheck}
      disabled={totalSelected !== rowSize}
      className="mt-2 w-full py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 disabled:bg-gray-400 cursor-pointer disabled:cursor-not-allowed"
    >
      Rätta mina nummer
    </button>
  </>
);
