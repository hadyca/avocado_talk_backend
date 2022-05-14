/*
  Warnings:

  - Changed the type of `wage` on the `CompanyPost` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "CompanyPost" DROP COLUMN "wage",
ADD COLUMN     "wage" INTEGER NOT NULL;
