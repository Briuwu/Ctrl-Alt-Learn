DO $$ BEGIN
 CREATE TYPE "public"."challenge_type_enum" AS ENUM('learning', 'mini-challenge', 'boss');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "challenges_table" ALTER COLUMN "challenge_type" SET DATA TYPE challenge_type_enum;