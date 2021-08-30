/*
  Warnings:

  - You are about to drop the column `proceedState` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "proceedState",
ADD COLUMN     "authCode" INTEGER NOT NULL DEFAULT 0;
