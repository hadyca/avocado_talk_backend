/*
  Warnings:

  - Added the required column `postSector` to the `CompanyPost` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CompanyPost" ADD COLUMN     "postSector" TEXT NOT NULL;
