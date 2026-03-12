import { NextResponse } from "next/server";
import { GAME_CONFIG, NUMBERS } from "@/constants/numbers-game";
import { shuffle } from "@/utils/array";

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 600));

  const correctRow = shuffle(NUMBERS)
    .slice(0, GAME_CONFIG.rowSize)
    .sort((a, b) => a - b);

  return NextResponse.json({ correctRow });
}
