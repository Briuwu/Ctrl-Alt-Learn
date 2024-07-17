"use client";
import { useEffect, useState } from "react";
import { useAnimate } from "framer-motion";

import { Character } from "./character";
import { GameQuestion } from "./game-question";

export const Game = () => {
  const [scope, animate] = useAnimate();
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    animate("#character", { x: 150 }, { duration: 2 });

    if (isCorrect) {
      animate("#character", { x: 1200 }, { duration: 8 });
    }
  }, [isCorrect]);

  const handleCorrect = () => {
    setIsCorrect(true);
  };

  return (
    <div ref={scope}>
      <Character />
      <GameQuestion onHandleCorrect={handleCorrect} />
    </div>
  );
};
