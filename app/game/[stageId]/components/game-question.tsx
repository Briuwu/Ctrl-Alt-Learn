import { GameQuestionForm } from "./game-question-form";

type Props = {
  onHandleCorrect: () => void;
};

export const GameQuestion = ({ onHandleCorrect }: Props) => {
  return (
    <div className="relative z-20 p-4">
      <GameQuestionForm onHandleCorrect={onHandleCorrect} />
    </div>
  );
};
