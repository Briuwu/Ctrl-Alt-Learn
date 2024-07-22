export type QuestionData = {
  answer: string;
  question: string;
  xp_reward: number;
  coins_reward: number;
};

export type CharacterState = "idle" | "walk" | "running";
