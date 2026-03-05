import { Logo } from "./Logo";
import { NumbersGame } from "./NumbersGame";

export const MainCard = () => {
  return (
    <main className="max-w-xl rounded-2xl bg-white p-10 shadow-lg text-center relative">
      <Logo />
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Nummerspel</h1>
      <NumbersGame />
    </main>
  );
};
