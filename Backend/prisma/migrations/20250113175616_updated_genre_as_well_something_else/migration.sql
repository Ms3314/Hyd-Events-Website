-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "genre" TEXT[],
ALTER COLUMN "deadline" SET DEFAULT NOW() + interval '7 days';

-- AlterTable
ALTER TABLE "Organization" ADD COLUMN     "about" TEXT;
