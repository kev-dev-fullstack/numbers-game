import { NumberButton } from "./NumberButton";

type NumbersSectionProps = {
  displayedNumbers: number[];
  selectedNumbers: number[];
  onToggle: (value: number) => void;
};

export const NumbersSection = ({
  displayedNumbers,
  selectedNumbers,
  onToggle,
}: NumbersSectionProps) => (
  <div className="grid grid-cols-10 gap-2">
    {displayedNumbers.map((number) => (
      <NumberButton
        key={number}
        value={number}
        isSelected={selectedNumbers.includes(number)}
        onToggle={onToggle}
      />
    ))}
  </div>
);
