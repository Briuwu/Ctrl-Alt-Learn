// import { getAllLevelsWithChallenges } from "@/actions/levels";
import { getAllStages } from "@/actions/levels";
import { Guidebook } from "./components/guidebook";
import { Levels } from "./components/levels";

const StagesPage = async () => {
  const stages = await getAllStages();

  return (
    <section className="space-y-20">
      {stages.map((stage) => (
        <div className="space-y-10" key={stage.id}>
          <div className="bg-light-green text-black p-4 lg:p-8 flex items-center justify-between rounded-md border-2 border-black">
            <h1 className="font-bold text-base uppercase md:text-2xl lg:text-3xl">
              {stage.levelName}
            </h1>
            <Guidebook />
          </div>
          <Levels levels={stage.levels} />
        </div>
      ))}
    </section>
  );
};
export default StagesPage;
