import { relations } from "drizzle-orm";
import {
  boolean,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const usersTable = pgTable("users_table", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  coins: integer("coins").notNull().default(0),
  xp: integer("xp").notNull().default(0),
  currentLevel: integer("current_level").notNull().default(1),
  avatar_id: integer("avatar_id")
    .notNull()
    .references(() => avatarsTable.id),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const usersRelations = relations(usersTable, ({ one }) => ({
  avatar: one(avatarsTable, {
    fields: [usersTable.avatar_id],
    references: [avatarsTable.id],
  }),
}));

export const avatarsTable = pgTable("avatars_table", {
  id: serial("id").primaryKey(),
  avatarName: text("avatar_name").notNull().unique(),
  avatarImage: text("avatar_image").notNull(),
});

export const levelsTable = pgTable("levels_table", {
  id: serial("id").primaryKey(),
  levelName: text("level_name").notNull().unique(),
  requiredXp: integer("required_xp").notNull(),
});

export const challengesTable = pgTable("challenges_table", {
  id: serial("id").primaryKey(),
  levelId: integer("level_id")
    .notNull()
    .references(() => levelsTable.id),
  challengeType: text("challenge_type").notNull(),
  challengeDescription: text("challenge_description").notNull(),
  correct_answer: text("correct_answer").notNull(),
  xp_reward: integer("xp_reward").notNull(),
  coins_reward: integer("coins_reward").notNull(),
});

export const challengesRelations = relations(challengesTable, ({ one }) => ({
  level: one(levelsTable, {
    fields: [challengesTable.levelId],
    references: [levelsTable.id],
  }),
}));

export const userChallengesTable = pgTable("user_challenges_table", {
  id: serial("id").primaryKey(),
  challengeId: integer("challenge_id").references(() => challengesTable.id),
  userId: integer("user_id").references(() => usersTable.id),
  completionTime: timestamp("completion_time").notNull().defaultNow(),
  completed: boolean("completed").notNull().default(false),
});

export const userChallengesRelations = relations(
  userChallengesTable,
  ({ one }) => ({
    challenge: one(challengesTable, {
      fields: [userChallengesTable.challengeId],
      references: [challengesTable.id],
    }),
    user: one(usersTable, {
      fields: [userChallengesTable.userId],
      references: [usersTable.id],
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

export const pvpMatchesTable = pgTable("pvp_matches_table", {
  id: serial("id").primaryKey(),
  player1Id: integer("player1_id").references(() => usersTable.id),
  player2Id: integer("player2_id").references(() => usersTable.id),
  winnerId: integer("winner_id").references(() => usersTable.id),
  startTime: timestamp("start_time").notNull().defaultNow(),
  endTime: timestamp("end_time"),
});

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;
