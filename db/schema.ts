import { QuestionData } from "@/types";
import { relations } from "drizzle-orm";
import {
  boolean,
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  jsonb,
} from "drizzle-orm/pg-core";

export const usersTable = pgTable("users_table", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  coins: integer("coins").notNull().default(0),
  xp: integer("xp").notNull().default(0),
  currentLevel: integer("current_level").notNull().default(1),
  avatarId: integer("avatar_id")
    .notNull()
    .references(() => avatarsTable.id),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const usersRelations = relations(usersTable, ({ one }) => ({
  avatar: one(avatarsTable, {
    fields: [usersTable.avatarId],
    references: [avatarsTable.id],
  }),
}));

export const avatarsTable = pgTable("avatars_table", {
  id: serial("id").primaryKey(),
  avatarName: text("avatar_name").notNull().unique(),
  avatarImage: text("avatar_image").notNull(),
});

export const stagesTable = pgTable("stages_table", {
  id: serial("id").primaryKey(),
  levelName: text("level_name").notNull().unique(),
  requiredXp: integer("required_xp").notNull(),
  stageBg: text("stage_bg").notNull(),
});

export const stagesRelations = relations(stagesTable, ({ many }) => ({
  levels: many(levelsTable),
}));
``;
export const levelTypeEnum = pgEnum("level_type", [
  "learning",
  "mini-challenge",
  "boss",
  "reward",
]);

export const levelStatusEnum = pgEnum("level_status", [
  "locked",
  "unlocked",
  "completed",
]);

export const levelsTable = pgTable("levels_table", {
  id: serial("id").primaryKey(),
  stageId: integer("stage_id")
    .notNull()
    .references(() => stagesTable.id),
  levelType: levelTypeEnum("level_type").notNull(),
  levelDescription: text("level_description").notNull(),
  isLearning: boolean("is_learning").notNull().default(false),
  isReward: boolean("is_reward").notNull().default(false),
  questions: jsonb("questions").$type<QuestionData[]>(),
  levelNumber: integer("level_number").unique().notNull(),
  status: levelStatusEnum("status").notNull().default("locked"),
});

export const levelsRelations = relations(levelsTable, ({ one, many }) => ({
  stage: one(stagesTable, {
    fields: [levelsTable.stageId],
    references: [stagesTable.id],
  }),
}));

export const userChallengesTable = pgTable("user_challenges_table", {
  id: serial("id").primaryKey(),
  levelId: integer("level_id").references(() => levelsTable.id),
  userId: integer("user_id").references(() => usersTable.id),
  completionTime: timestamp("completion_time").notNull().defaultNow(),
  completed: boolean("completed").notNull().default(false),
});

export const userChallengesRelations = relations(
  userChallengesTable,
  ({ one }) => ({
    user: one(usersTable, {
      fields: [userChallengesTable.userId],
      references: [usersTable.id],
    }),
    level: one(levelsTable, {
      fields: [userChallengesTable.levelId],
      references: [levelsTable.id],
    }),
  })
);

export const achievementsTable = pgTable("achievements_table", {
  id: serial("id").primaryKey(),
  achievementName: text("achievement_name").notNull().unique(),
  achievementDescription: text("achievement_description").notNull(),
  xp_reward: integer("xp_reward").notNull(),
  coins_reward: integer("coins_reward").notNull(),
});

export const usersAchievementsTable = pgTable("users_achievements_table", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => usersTable.id),
  achievementId: integer("achievement_id").references(
    () => achievementsTable.id
  ),
  achievedAt: timestamp("achieved_at").notNull().defaultNow(),
});

export const usersAchievementsRelations = relations(
  usersAchievementsTable,
  ({ one }) => ({
    user: one(usersTable, {
      fields: [usersAchievementsTable.userId],
      references: [usersTable.id],
    }),
    achievement: one(achievementsTable, {
      fields: [usersAchievementsTable.achievementId],
      references: [achievementsTable.id],
    }),
  })
);

// export const pvpMatchesTable = pgTable("pvp_matches_table", {
//   id: serial("id").primaryKey(),
//   player1Id: integer("player1_id").references(() => usersTable.id),
//   player2Id: integer("player2_id").references(() => usersTable.id),
//   winnerId: integer("winner_id").references(() => usersTable.id),
//   startTime: timestamp("start_time").notNull().defaultNow(),
//   endTime: timestamp("end_time"),
// });

// export const pvpMatchesRelations = relations(pvpMatchesTable, ({ one }) => ({
//   player1: one(usersTable, {
//     fields: [pvpMatchesTable.player1Id],
//     references: [usersTable.id],
//   }),
//   player2: one(usersTable, {
//     fields: [pvpMatchesTable.player2Id],
//     references: [usersTable.id],
//   }),
//   winner: one(usersTable, {
//     fields: [pvpMatchesTable.winnerId],
//     references: [usersTable.id],
//   }),
// }));

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;
export type Levels = typeof levelsTable.$inferSelect;
