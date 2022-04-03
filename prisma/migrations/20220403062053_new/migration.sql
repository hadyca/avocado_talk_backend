/*
  Warnings:

  - You are about to drop the column `avatar` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "File" DROP CONSTRAINT "File_userPostId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "avatar",
ADD COLUMN     "avatarKey" TEXT,
ADD COLUMN     "avatarUrl" TEXT;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_userPostId_fkey" FOREIGN KEY ("userPostId") REFERENCES "UserPost"("id") ON DELETE CASCADE ON UPDATE CASCADE;
