import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Guidebook = () => {
  return (
    <Button
      variant={"ghost"}
      className="bg-black text-white text-xl lg:text-xl h-auto inline-flex gap-3"
    >
      Guidebook
      <Image
        src={"/stages/levels/guidebook.png"}
        alt="Guidebook"
        width={52}
        height={54}
        className="w-10"
      />
    </Button>
  );
};
