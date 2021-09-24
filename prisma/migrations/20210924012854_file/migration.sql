/*
  Warnings:

  - You are about to drop the column `fileKey` on the `CompanyPost` table. All the data in the column will be lost.
  - You are about to drop the column `fileUrl` on the `CompanyPost` table. All the data in the column will be lost.
  - You are about to drop the column `fileKey` on the `UserPost` table. All the data in the column will be lost.
  - You are about to drop the column `fileUrl` on the `UserPost` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CompanyPost" DROP COLUMN "fileKey",
DROP COLUMN "fileUrl";

-- AlterTable
ALTER TABLE "UserPost" DROP COLUMN "fileKey",
DROP COLUMN "fileUrl";

-- CreateTable
CREATE TABLE "File" (
    "id" SERIAL NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "fileKey" TEXT NOT NULL,
    "userPostId" INTEGER,
    "companyPostId" INTEGER,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "File" ADD FOREIGN KEY ("userPostId") REFERENCES "UserPost"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "File" ADD FOREIGN KEY ("companyPostId") REFERENCES "CompanyPost"("id") ON DELETE SET NULL ON UPDATE CASCADE;
