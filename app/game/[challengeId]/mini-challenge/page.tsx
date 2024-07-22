import { getChallenge, getStageBg } from "@/actions/levels";
import { Game } from "./components/game";

const MiniChallengePage = async ({
  params,
  searchParams,
}: {
  params: { challengeId: number };
  searchParams: {
    stageId: number;
  };
}) => {
  const challenge = await getChallenge(
    searchParams.stageId,
    params.challengeId
  );

  const stageBg = await getStageBg(challenge.stageId);

  return (
    <main className="min-h-screen mx-auto grid place-content-center bg-dark-green">
      <div className="relative border-4 border-black w-[925px] h-[660px] overflow-hidden">
        <div
          style={{ backgroundImage: `url('${stageBg}')` }}
          className="bg-contain bg-no-repeat w-full h-full absolute"
        />
        <Game questions={challenge.questions} />
      </div>
    </main>
  );
};
export default MiniChallengePage;
