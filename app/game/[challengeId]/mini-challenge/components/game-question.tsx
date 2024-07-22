import { QuestionData } from "@/types";
import { GameQuestionForm } from "./game-question-form";

type Props = {
  onHandleCorrect: () => void;
  onHandleWrong: () => void;
  question: QuestionData | undefined;
};

export const GameQuestion = ({
  onHandleCorrect,
  question,
  onHandleWrong,
}: Props) => {
  return (
    <div className="relative z-20 p-4 opacity-0" id="gameQuestion">
      <GameQuestionForm
        onHandleCorrect={onHandleCorrect}
        question={question}
        onHandleWrong={onHandleWrong}
      />
    </div>
  );
};
