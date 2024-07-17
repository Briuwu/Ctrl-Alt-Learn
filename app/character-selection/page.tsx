import { db } from "@/db";
import { ChooseCharacter } from "./components/choose-character";
import { usersTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { currentUser } from "@clerk/nextjs/server";
import { notFound, redirect } from "next/navigation";

const CharacterSelectionPage = async () => {
  const user = await currentUser();
  if (!user) return notFound();

  const users = await db.query.usersTable.findFirst({
    where: eq(usersTable.username, user?.fullName!),
  });

  if (users) {
    redirect("/stages");
  }

  return (
    <main className="max-w-6xl px-5 mx-auto my-10">
      <h1 className="text-center font-bold text-2xl md:text-4xl lg:text-7xl mb-10">
        Choose Your Character
      </h1>
      <ChooseCharacter />
    </main>
  );
};
export default CharacterSelectionPage;
