/*
  Warnings:

  - You are about to drop the column `file` on the `UserPost` table. All the data in the column will be lost.
  - Made the column `content` on table `UserPost` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "UserPost" DROP COLUMN "file",
ADD COLUMN     "fileKey" TEXT,
ADD COLUMN     "fileUrl" TEXT,
ALTER COLUMN "content" SET NOT NULL;
