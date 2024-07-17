"use server";
import { db } from "@/db";
import { avatarsTable, usersTable } from "@/db/schema";
import { auth, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function handleCreateProfile(selectedCharacter: number) {
  const session = auth();

  if (!session) {
    throw new Error("Session not found");
  }

  const user = await currentUser();

  if (!user) {
    throw new Error("User not found");
  }

  await db
    .insert(usersTable)
    .values({
      username: user.fullName!,
      email: user.emailAddresses[0].emailAddress,
      coins: 0,
      xp: 0,
      currentLevel: 1,
      avatarId: selectedCharacter,
    })
    .execute();

  revalidatePath("/character-selection");
  redirect("/stages");
}
