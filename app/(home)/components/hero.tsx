import { Button } from "@/components/ui/button";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 place-items-center text-center md:text-left container">
      <div className="grid gap-4">
        <h1 className="text-3xl md:text-6xl uppercase font-bold">
          Learn by doing
        </h1>
        <p className="max-w-md md:text-lg">
          An immersive and engaging web-based 2D learning gamified platform that
          enhances your Web Development Skills!
        </p>
        <Button className="bg-light-green text-black border-2 border-black drop-shadow-small mt-6 py-6 font-bold uppercase text-lg">
          Play Now!
        </Button>
      </div>
      <div>
        <Image
          src={"/hero-banner.png"}
          alt="Ctrl + Alt + Learn Banner"
          width={518}
          height={699}
        />
      </div>
    </section>
  );
};
