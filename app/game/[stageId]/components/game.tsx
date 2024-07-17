"use client";
import { useEffect, useState } from "react";
import { useAnimate } from "framer-motion";

import { Character } from "./character";
import { GameQuestion } from "./game-question";

export const Game = () => {
  const [scope, animate] = useAnimate();
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    animate("#character", { x: 100 }, { duration: 2 });

    if (isCorrect) {
      animate("#character", { x: 1000 }, { duration: 6 });
    }
  }, [isCorrect]);

  const handleCorrect = () => {
    setIsCorrect(true);
  };

  return (
    <div ref={scope} className="z-20 overflow-hidden">
      <Character />
      <GameQuestion onHandleCorrect={handleCorrect} />
    </div>
  );
};
