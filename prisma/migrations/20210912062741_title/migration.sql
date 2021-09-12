/*
  Warnings:

  - Added the required column `title` to the `UserPost` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserPost" ADD COLUMN     "title" TEXT NOT NULL;
