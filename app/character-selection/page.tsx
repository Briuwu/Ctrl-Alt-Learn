import Image from "next/image";
import { ChooseCharacter } from "./components/choose-character";

const CharacterSelectionPage = () => {
  return (
    <main className="max-w-6xl px-5 mx-auto my-10">
      <h1 className="text-center font-bold text-2xl md:text-4xl lg:text-7xl mb-10">
        Choose Your Character
      </h1>
      <ChooseCharacter />
    </main>
  );
};
export default CharacterSelectionPage;
