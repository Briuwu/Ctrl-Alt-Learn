CREATE TABLE IF NOT EXISTS "learnings_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"level_id" integer,
	"learning_content_id" integer NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "learnings_table" ADD CONSTRAINT "learnings_table_level_id_levels_table_id_fk" FOREIGN KEY ("level_id") REFERENCES "public"."levels_table"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
