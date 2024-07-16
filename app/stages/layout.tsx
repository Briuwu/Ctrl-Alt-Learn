import { StagesHeader } from "./components/header";
import { StagesChoices } from "./components/stages-choices";

const StagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid lg:grid-cols-[max-content,1fr] lg:h-screen items-start lg:grid-rows-[max-content,1fr]">
      <StagesHeader />
      <StagesChoices />
      <main className="py-5">{children}</main>
    </div>
  );
};
export default StagesLayout;
