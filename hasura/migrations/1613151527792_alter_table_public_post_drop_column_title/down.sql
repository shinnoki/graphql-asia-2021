ALTER TABLE "public"."post" ADD COLUMN "title" text;
ALTER TABLE "public"."post" ALTER COLUMN "title" DROP NOT NULL;
