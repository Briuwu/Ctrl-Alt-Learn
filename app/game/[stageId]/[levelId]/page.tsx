import Image from "next/image";
import { Game } from "../components/game";

const MainGamePage = ({
  params,
}: {
  params: {
    stageId: string;
    levelId: string;
  };
}) => {
  return (
    <main className="min-h-screen mx-auto grid place-content-center bg-dark-green">
      <div className="relative border-4 border-black w-[925px] h-[660px] overflow-hidden">
        <div
          style={{ backgroundImage: "url('/stages/bg-1.png')" }}
          className="bg-contain bg-no-repeat w-full h-full absolute"
        />
        <Game />
      </div>
    </main>
  );
};
export default MainGamePage;
