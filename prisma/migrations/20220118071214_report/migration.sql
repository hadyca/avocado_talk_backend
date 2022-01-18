/*
  Warnings:

  - Added the required column `companyPostCommentId` to the `Report` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyPostId` to the `Report` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyPostReCommentId` to the `Report` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Report" ADD COLUMN     "companyPostCommentId" INTEGER NOT NULL,
ADD COLUMN     "companyPostId" INTEGER NOT NULL,
ADD COLUMN     "companyPostReCommentId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_companyPostId_fkey" FOREIGN KEY ("companyPostId") REFERENCES "CompanyPost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_companyPostCommentId_fkey" FOREIGN KEY ("companyPostCommentId") REFERENCES "CompanyPostComment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_companyPostReCommentId_fkey" FOREIGN KEY ("companyPostReCommentId") REFERENCES "CompanyPostReComment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
