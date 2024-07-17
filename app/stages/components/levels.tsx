import Image from "next/image";

export const Levels = () => {
  return (
    <div className="grid grid-flow-col justify-between [&>*:nth-child(even)]:mt-28">
      <div>
        <Image
          src={"/stages/levels/study-active.png"}
          alt="Study Level"
          width={70}
          height={65}
          className="object-contain"
        />
      </div>
      <div>
        <Image
          src={"/stages/levels/next-level.png"}
          alt="Next Level"
          width={70}
          height={65}
          className="object-contain"
        />
      </div>
      <div>
        <Image
          src={"/stages/levels/locked-level.png"}
          alt="Locked Level"
          width={70}
          height={65}
          className="object-contain"
        />
      </div>
      <div>
        <Image
          src={"/stages/levels/locked-level.png"}
          alt="Locked Level"
          width={70}
          height={65}
          className="object-contain"
        />
      </div>
      <div>
        <Image
          src={"/stages/levels/locked-level.png"}
          alt="Locked Level"
          width={70}
          height={65}
          className="object-contain"
        />
      </div>
      <div>
        <Image
          src={"/stages/levels/treasure.png"}
          alt="Treasure Level"
          width={70}
          height={65}
          className="object-contain"
        />
      </div>
      <div>
        <Image
          src={"/stages/levels/boss-level.png"}
          alt="Boss Level"
          width={70}
          height={65}
          className="object-contain"
        />
      </div>
    </div>
  );
};
