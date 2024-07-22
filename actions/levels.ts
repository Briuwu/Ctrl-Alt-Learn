"use server";

import { db } from "@/db";
import { levelsTable } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { and, eq } from "drizzle-orm";

export const getAllStages = async () => {
  const session = auth();

  if (!session) {
    throw new Error("You must be logged in to access this resource");
  }

  const stages = await db.query.stagesTable.findMany({
    with: {
      levels: {
        orderBy: (levelsTable, { asc }) => [asc(levelsTable.levelNumber)],
      },
    },
  });

  if (!stages) {
    throw new Error("No stages found");
  }

  return stages;
};

export const getStageBg = async (stageId: number) => {
  const session = auth();

  if (!session) {
    throw new Error("You must be logged in to access this resource");
  }

  const stage = await db.query.stagesTable.findFirst({
    where: eq(levelsTable.id, stageId),
  });

  if (!stage) {
    throw new Error("No stage found");
  }

  const { stageBg } = stage;

  return stageBg;
};

export const getChallenge = async (stageId: number, challengeId: number) => {
  const session = auth();

  if (!session) {
    throw new Error("You must be logged in to access this resource");
  }

  const challenge = await db.query.levelsTable.findFirst({
    where: and(eq(levelsTable.id, challengeId), eq(levelsTable.stageId, 1)),
  });

  if (!challenge) {
    throw new Error("No challenge found");
  }

  return challenge;
};
