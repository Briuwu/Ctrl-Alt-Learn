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
    <main
      style={{
        backgroundImage: "url('/stages/bg-1.png')",
      }}
      className="bg-cover bg-bottom min-h-screen relative"
    >
      <Game />
    </main>
  );
};
export default MainGamePage;
