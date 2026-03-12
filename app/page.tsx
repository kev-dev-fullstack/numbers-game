import { MainCard } from "@/components/MainCard";
import { NumbersGameProvider } from "@/contexts/NumbersGameContext";

export default function Home() {
  return (
    <NumbersGameProvider>
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <MainCard />
      </div>
    </NumbersGameProvider>
  );
}
