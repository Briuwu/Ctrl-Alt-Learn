import { CharacterState } from "@/types";

export const getCharacter = (characterState: CharacterState, type: string) => {
  const images = {
    idle: {
      src: "/characters/animations/male_homeless/idle.gif",
      width: 193,
      height: 328,
    },
    running: {
      src: "/characters/animations/male_homeless/run.gif",
      width: 248,
      height: 292,
    },
    walk: {
      src: "/characters/animations/male_homeless/walk.gif",
      width: 181,
      height: 323,
    },
  };

  const src = images[characterState].src;
  const width = images[characterState].width / 2.5;
  const height = images[characterState].height / 2.5;

  return {
    src,
    width,
    height,
  };
};
