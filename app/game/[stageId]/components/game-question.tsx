import { GameQuestionForm } from "./game-question-form";

type Props = {
  onHandleCorrect: () => void;
};

export const GameQuestion = ({ onHandleCorrect }: Props) => {
  return (
    <div className="max-w-lg">
      <GameQuestionForm onHandleCorrect={onHandleCorrect} />
    </div>
  );
};
