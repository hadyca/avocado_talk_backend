/*
  Warnings:

  - You are about to drop the `Username` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Username" DROP CONSTRAINT "Username_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "usernameEditDate" TEXT;

-- DropTable
DROP TABLE "Username";
