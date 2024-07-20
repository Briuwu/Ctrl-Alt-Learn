DO $$ BEGIN
 CREATE TYPE "public"."challenge_type" AS ENUM('learning', 'mini-challenge', 'boss');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DROP TABLE "pvp_matches_table";--> statement-breakpoint
ALTER TABLE "challenges_table" ALTER COLUMN "challenge_type" SET DATA TYPE challenge_type;