/*
  Warnings:

  - You are about to drop the column `day` on the `CompanyPost` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CompanyPost" DROP COLUMN "day";

-- CreateTable
CREATE TABLE "WorkingDay" (
    "id" SERIAL NOT NULL,
    "companyPostId" INTEGER NOT NULL,
    "monday" BOOLEAN NOT NULL,
    "tuesday" BOOLEAN NOT NULL,
    "wednesday" BOOLEAN NOT NULL,
    "thursday" BOOLEAN NOT NULL,
    "friday" BOOLEAN NOT NULL,
    "saturday" BOOLEAN NOT NULL,
    "sunday" BOOLEAN NOT NULL,

    CONSTRAINT "WorkingDay_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "WorkingDay" ADD CONSTRAINT "WorkingDay_companyPostId_fkey" FOREIGN KEY ("companyPostId") REFERENCES "CompanyPost"("id") ON DELETE CASCADE ON UPDATE CASCADE;
