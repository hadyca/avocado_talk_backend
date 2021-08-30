/*
  Warnings:

  - You are about to drop the column `secretConfirm` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "secretConfirm",
ADD COLUMN     "proceedState" INTEGER NOT NULL DEFAULT 0;
