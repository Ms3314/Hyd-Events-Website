/*
  Warnings:

  - You are about to drop the column `Description` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `event_date` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `event_image` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `form_clicks` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `registration_link` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `Socials` on the `Organization` table. All the data in the column will be lost.
  - You are about to drop the `_OrganizationToEvent` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `description` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eventDate` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organizationId` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `registrationLink` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_OrganizationToEvent" DROP CONSTRAINT "_OrganizationToEvent_A_fkey";

-- DropForeignKey
ALTER TABLE "_OrganizationToEvent" DROP CONSTRAINT "_OrganizationToEvent_B_fkey";

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "Description",
DROP COLUMN "event_date",
DROP COLUMN "event_image",
DROP COLUMN "form_clicks",
DROP COLUMN "registration_link",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "eventDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "eventImage" TEXT,
ADD COLUMN     "formClicks" INTEGER,
ADD COLUMN     "organizationId" INTEGER NOT NULL,
ADD COLUMN     "registrationLink" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Organization" DROP COLUMN "Socials",
ADD COLUMN     "socials" TEXT[];

-- DropTable
DROP TABLE "_OrganizationToEvent";

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
