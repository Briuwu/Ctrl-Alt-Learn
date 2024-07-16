import { GameOptions } from "./components/game-options";
import { StartPageHeader } from "./components/header";

const StartPage = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/start/bg.png')",
      }}
      className="md:bg-cover bg-bottom min-h-screen bg-no-repeat"
    >
      <StartPageHeader />
      <main className="grid place-items-center gap-10 md:gap-20 mt-5">
        <div className="text-center text-black">
          <h1 className="font-bold text-xl md:text-3xl lg:text-6xl uppercase">
            ctrl + alt + learn
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl">
            The Adventure of Learning
          </p>
        </div>
        <GameOptions />
      </main>
    </div>
  );
};
export default StartPage;
