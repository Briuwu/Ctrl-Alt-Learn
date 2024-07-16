import Link from "next/link";
import { Button } from "@/components/ui/button";

export const GameOptions = () => {
  return (
    <div className="flex items-center gap-5 flex-col">
      <Button asChild className="uppercase w-full md:text-2xl md:py-8">
        <Link href="/character-selection">Start Game</Link>
      </Button>
      <Button
        asChild
        className="uppercase w-full md:text-2xl md:py-8"
        variant={"plain"}
      >
        <Link href="/settings">PVP</Link>
      </Button>
      <Button
        asChild
        className="uppercase w-full md:text-2xl md:py-8"
        variant={"plain"}
      >
        <Link href="/leaderboard">Leaderboard</Link>
      </Button>
      <Button
        className="uppercase w-full md:text-2xl md:py-8"
        variant={"destructive"}
      >
        Logout
      </Button>
    </div>
  );
};
