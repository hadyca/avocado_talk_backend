/*
  Warnings:

  - You are about to drop the column `file` on the `CompanyPost` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CompanyPost" DROP COLUMN "file",
ADD COLUMN     "fileUrl" TEXT;
