type NumberProps = {
  value: number;
  isSelected: boolean;
  onToggle: (value: number) => void;
};

export const NumberButton = ({ value, isSelected, onToggle }: NumberProps) => {
  return (
    <button
      type="button"
      onClick={() => onToggle(value)}
      aria-pressed={isSelected}
      className={`
        p-4 text-center font-bold rounded-lg cursor-pointer
        transition-colors duration-200
        ${isSelected ? "bg-green-500 text-white" : "bg-indigo-100 text-indigo-800 hover:bg-indigo-300"}
      `}
    >
      {value}
    </button>
  );
};
