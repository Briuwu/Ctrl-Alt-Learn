import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export const StagesHeader = () => {
  return (
    <header className="py-4 border-b-2 border-black col-span-2">
      <div className="container flex justify-end">
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};
