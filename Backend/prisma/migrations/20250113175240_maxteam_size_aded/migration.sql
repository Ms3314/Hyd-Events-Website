-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "MaxSize" INTEGER NOT NULL DEFAULT 1,
ALTER COLUMN "deadline" SET DEFAULT NOW() + interval '7 days';
