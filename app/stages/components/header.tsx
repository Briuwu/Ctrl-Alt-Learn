import Image from "next/image";

export const StagesHeader = () => {
  return (
    <header className="py-4 border-b-2 border-black col-span-2">
      <div className="container flex justify-end">
        <Image
          src={"/avatar.png"}
          alt=""
          width={75}
          height={75}
          className="object-contain rounded-full w-14"
        />
      </div>
    </header>
  );
};
