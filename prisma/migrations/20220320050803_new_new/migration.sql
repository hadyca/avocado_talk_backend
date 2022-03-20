/*
  Warnings:

  - You are about to drop the column `aboutUs` on the `CompanyPost` table. All the data in the column will be lost.
  - You are about to drop the column `addressStep1` on the `CompanyPost` table. All the data in the column will be lost.
  - You are about to drop the column `addressStep2` on the `CompanyPost` table. All the data in the column will be lost.
  - You are about to drop the column `addressStep3` on the `CompanyPost` table. All the data in the column will be lost.
  - You are about to drop the column `companyName` on the `CompanyPost` table. All the data in the column will be lost.
  - You are about to drop the column `contactNumber` on the `CompanyPost` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `CompanyPost` table. All the data in the column will be lost.
  - You are about to drop the column `sector` on the `CompanyPost` table. All the data in the column will be lost.
  - You are about to drop the column `totalEmployees` on the `CompanyPost` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CompanyPost" DROP COLUMN "aboutUs",
DROP COLUMN "addressStep1",
DROP COLUMN "addressStep2",
DROP COLUMN "addressStep3",
DROP COLUMN "companyName",
DROP COLUMN "contactNumber",
DROP COLUMN "email",
DROP COLUMN "sector",
DROP COLUMN "totalEmployees";
