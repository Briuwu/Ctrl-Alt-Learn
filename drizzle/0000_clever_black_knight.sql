DO $$ BEGIN
 CREATE TYPE "public"."level_type" AS ENUM('learning', 'mini-challenge', 'boss', 'reward');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
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
CREATE TABLE IF NOT EXISTS "levels_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"stage_id" integer NOT NULL,
	"level_type" "level_type" NOT NULL,
	"level_description" text NOT NULL,
	"is_learning" boolean DEFAULT false NOT NULL,
	"is_reward" boolean DEFAULT false NOT NULL,
	"questions" jsonb
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "stages_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"level_name" text NOT NULL,
	"required_xp" integer NOT NULL,
	"stage_bg" text NOT NULL,
	CONSTRAINT "stages_table_level_name_unique" UNIQUE("level_name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_challenges_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"level_id" integer,
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
CREATE TABLE IF NOT EXISTS "users_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" text NOT NULL,
	"email" text NOT NULL,
	"coins" integer DEFAULT 0 NOT NULL,
	"xp" integer DEFAULT 0 NOT NULL,
	"current_level" integer DEFAULT 1 NOT NULL,
	"avatar_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_table_username_unique" UNIQUE("username"),
	CONSTRAINT "users_table_email_unique" UNIQUE("email")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "levels_table" ADD CONSTRAINT "levels_table_stage_id_stages_table_id_fk" FOREIGN KEY ("stage_id") REFERENCES "public"."stages_table"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_challenges_table" ADD CONSTRAINT "user_challenges_table_level_id_levels_table_id_fk" FOREIGN KEY ("level_id") REFERENCES "public"."levels_table"("id") ON DELETE no action ON UPDATE no action;
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
