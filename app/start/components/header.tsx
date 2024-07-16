import Image from "next/image";

export const StartPageHeader = () => {
  return (
    <header className="container py-4 flex justify-end">
      <Image
        src={"/avatar.png"}
        alt=""
        width={75}
        height={75}
        className="object-contain rounded-full w-16"
      />
    </header>
  );
};
