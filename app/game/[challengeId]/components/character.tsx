import { getCharacter } from "@/lib/character";
import { CharacterState } from "@/types";
import Image from "next/image";

export const Character = ({
  characterState,
}: {
  characterState: CharacterState;
}) => {
  const { src, width, height } = getCharacter(characterState, "homeless");

  return (
    <>
      <Image
        src={src}
        alt=""
        width={width}
        height={height}
        id="character"
        className="absolute bottom-[105px] -left-40"
      />
    </>
  );
};
