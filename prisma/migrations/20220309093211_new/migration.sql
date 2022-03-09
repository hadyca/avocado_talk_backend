/*
  Warnings:

  - Made the column `totalEmployees` on table `Company` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Company" ALTER COLUMN "totalEmployees" SET NOT NULL;
