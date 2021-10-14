/*
  Warnings:

  - You are about to drop the column `deletedAt` on the `UserPost` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CompanyPost" ADD COLUMN     "deleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "CompanyPostComment" ADD COLUMN     "deleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "UserPost" DROP COLUMN "deletedAt",
ADD COLUMN     "deleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "UserPostComment" ADD COLUMN     "deleted" BOOLEAN NOT NULL DEFAULT false;
