/*
  Warnings:

  - You are about to drop the column `address` on the `Company` table. All the data in the column will be lost.
  - Added the required column `addressStep1` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressStep2` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressStep3` to the `Company` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Company" DROP COLUMN "address",
ADD COLUMN     "addressStep1" TEXT NOT NULL,
ADD COLUMN     "addressStep2" TEXT NOT NULL,
ADD COLUMN     "addressStep3" TEXT NOT NULL;
