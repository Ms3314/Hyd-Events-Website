/*
  Warnings:

  - You are about to drop the column `socials` on the `Organization` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "deadline" TIMESTAMP(3) NOT NULL DEFAULT NOW() + interval '7 days',
ADD COLUMN     "location" TEXT NOT NULL DEFAULT 'Online';

-- AlterTable
ALTER TABLE "Organization" DROP COLUMN "socials",
ADD COLUMN     "instagram" TEXT DEFAULT '',
ADD COLUMN     "website" TEXT DEFAULT '';
