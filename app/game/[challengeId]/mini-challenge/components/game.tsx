"use client";
import { useEffect, useState } from "react";
import { useAnimate } from "framer-motion";

import { Character } from "../../components/character";
import { GameQuestion } from "./game-question";
import { CharacterState, QuestionData } from "@/types";
import Image from "next/image";
import { GameOver } from "./game-over";

type Props = {
  questions: QuestionData[] | null;
};

export const Game = ({ questions }: Props) => {
  const [lifes, setLifes] = useState(3);
  const [gameOver, setGameOver] = useState(false);
  const [scope, animate] = useAnimate();
  const questionLength = questions?.length || 0;
  const [characterState, setCharacterState] = useState<CharacterState>("walk");

  const [questionIdx, setQuestionIdx] = useState(0);

  useEffect(() => {
    const animateCharacter = async () => {
      await animate("#character", { x: 200 }, { duration: 3 });
      setCharacterState("idle");
      await animate("#gameQuestion", { opacity: 1 }, { duration: 1 });
    };

    animateCharacter();
  }, []);

  const handleWrong = () => {
    if (lifes > 0) {
      setLifes(lifes - 1);
    }

    if (lifes === 1) {
      setGameOver(true);
    }
  };

  const handleCorrect = async () => {
    if (questionIdx < questionLength - 1) {
      setQuestionIdx(questionIdx + 1);
    }

    if (questionIdx === questionLength - 1) {
      setCharacterState("running");
      await animate("#character", { x: 1250 }, { duration: 8 });
    }
  };

  const singleQuestion = questions?.[questionIdx];

  return (
    <div ref={scope} className="z-20 overflow-hidden">
      <GameOver open={gameOver} handleOpen={setGameOver} />
      <Character characterState={characterState} />
      <div>
        <div className="absolute bottom-4 left-4 flex">
          {lifes > 0 &&
            Array.from({ length: lifes }).map((_, idx) => (
              <Image key={idx} src="/heart.png" alt="" width={50} height={50} />
            ))}
        </div>
        <div className="absolute bottom-4 right-4">
          <span className="text-white text-xl">
            Questions: {questionIdx + 1}/{questionLength}
          </span>
        </div>
      </div>
      <GameQuestion
        onHandleCorrect={handleCorrect}
        onHandleWrong={handleWrong}
        question={singleQuestion}
      />
    </div>
  );
};
