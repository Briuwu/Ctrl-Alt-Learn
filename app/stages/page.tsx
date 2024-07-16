import { Guidebook } from "./components/guidebook";

const StagesPage = () => {
  return (
    <section className="">
      <div>
        <div className="bg-light-green text-black p-4 lg:p-8 flex items-center justify-between rounded-md border-2 border-black">
          <h1 className="font-bold text-base uppercase md:text-2xl lg:text-3xl">
            Stage 1 - HTML
          </h1>
          <Guidebook />
        </div>
        <div></div>
      </div>
    </section>
  );
};
export default StagesPage;
