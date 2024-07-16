CREATE TABLE IF NOT EXISTS "achievements_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"achievement_name" text NOT NULL,
	"achievement_description" text NOT NULL,
	"xp_reward" integer NOT NULL,
	"coins_reward" integer NOT NULL,
	CONSTRAINT "achievements_table_achievement_name_unique" UNIQUE("achievement_name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "avatars_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"avatar_name" text NOT NULL,
	"avatar_image" text NOT NULL,
	CONSTRAINT "avatars_table_avatar_name_unique" UNIQUE("avatar_name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "challenges_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"level_id" integer NOT NULL,
	"challenge_type" text NOT NULL,
	"challenge_description" text NOT NULL,
	"correct_answer" text NOT NULL,
	"xp_reward" integer NOT NULL,
	"coins_reward" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "levels_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"level_name" text NOT NULL,
	"required_xp" integer NOT NULL,
	CONSTRAINT "levels_table_level_name_unique" UNIQUE("level_name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "pvp_matches_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"player1_id" integer,
	"player2_id" integer,
	"winner_id" integer,
	"start_time" timestamp DEFAULT now() NOT NULL,
	"end_time" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_challenges_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"challenge_id" integer,
	"user_id" integer,
	"completion_time" timestamp DEFAULT now() NOT NULL,
	"completed" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users_achievements_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer,
	"achievement_id" integer,
	"achieved_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
DROP TABLE "posts_table";--> statement-breakpoint
DROP TABLE "test_table";--> statement-breakpoint
ALTER TABLE "users_table" ADD COLUMN "username" text NOT NULL;--> statement-breakpoint
ALTER TABLE "users_table" ADD COLUMN "coins" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "users_table" ADD COLUMN "xp" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "users_table" ADD COLUMN "current_level" integer DEFAULT 1 NOT NULL;--> statement-breakpoint
ALTER TABLE "users_table" ADD COLUMN "avatar_id" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "users_table" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "challenges_table" ADD CONSTRAINT "challenges_table_level_id_levels_table_id_fk" FOREIGN KEY ("level_id") REFERENCES "public"."levels_table"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "pvp_matches_table" ADD CONSTRAINT "pvp_matches_table_player1_id_users_table_id_fk" FOREIGN KEY ("player1_id") REFERENCES "public"."users_table"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "pvp_matches_table" ADD CONSTRAINT "pvp_matches_table_player2_id_users_table_id_fk" FOREIGN KEY ("player2_id") REFERENCES "public"."users_table"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "pvp_matches_table" ADD CONSTRAINT "pvp_matches_table_winner_id_users_table_id_fk" FOREIGN KEY ("winner_id") REFERENCES "public"."users_table"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_challenges_table" ADD CONSTRAINT "user_challenges_table_challenge_id_challenges_table_id_fk" FOREIGN KEY ("challenge_id") REFERENCES "public"."challenges_table"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_challenges_table" ADD CONSTRAINT "user_challenges_table_user_id_users_table_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users_table"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users_achievements_table" ADD CONSTRAINT "users_achievements_table_user_id_users_table_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users_table"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users_achievements_table" ADD CONSTRAINT "users_achievements_table_achievement_id_achievements_table_id_fk" FOREIGN KEY ("achievement_id") REFERENCES "public"."achievements_table"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users_table" ADD CONSTRAINT "users_table_avatar_id_avatars_table_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."avatars_table"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "users_table" DROP COLUMN IF EXISTS "name";--> statement-breakpoint
ALTER TABLE "users_table" DROP COLUMN IF EXISTS "age";--> statement-breakpoint
ALTER TABLE "users_table" ADD CONSTRAINT "users_table_username_unique" UNIQUE("username");