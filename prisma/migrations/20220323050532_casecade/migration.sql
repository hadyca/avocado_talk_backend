-- DropForeignKey
ALTER TABLE "CompanyPost" DROP CONSTRAINT "CompanyPost_companyId_fkey";

-- DropForeignKey
ALTER TABLE "CompanyPostComment" DROP CONSTRAINT "CompanyPostComment_companyPostId_fkey";

-- DropForeignKey
ALTER TABLE "CompanyPostLike" DROP CONSTRAINT "CompanyPostLike_companyPostId_fkey";

-- DropForeignKey
ALTER TABLE "CompanyPostReComment" DROP CONSTRAINT "CompanyPostReComment_companyPostCommentId_fkey";

-- DropForeignKey
ALTER TABLE "CompanyPostReCommentReport" DROP CONSTRAINT "CompanyPostReCommentReport_companyPostReCommentId_fkey";

-- DropForeignKey
ALTER TABLE "CompanyPostReport" DROP CONSTRAINT "CompanyPostReport_companyPostId_fkey";

-- DropForeignKey
ALTER TABLE "File" DROP CONSTRAINT "File_companyPostId_fkey";

-- AddForeignKey
ALTER TABLE "CompanyPost" ADD CONSTRAINT "CompanyPost_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyPostLike" ADD CONSTRAINT "CompanyPostLike_companyPostId_fkey" FOREIGN KEY ("companyPostId") REFERENCES "CompanyPost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyPostComment" ADD CONSTRAINT "CompanyPostComment_companyPostId_fkey" FOREIGN KEY ("companyPostId") REFERENCES "CompanyPost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyPostReComment" ADD CONSTRAINT "CompanyPostReComment_companyPostCommentId_fkey" FOREIGN KEY ("companyPostCommentId") REFERENCES "CompanyPostComment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_companyPostId_fkey" FOREIGN KEY ("companyPostId") REFERENCES "CompanyPost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyPostReport" ADD CONSTRAINT "CompanyPostReport_companyPostId_fkey" FOREIGN KEY ("companyPostId") REFERENCES "CompanyPost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyPostReCommentReport" ADD CONSTRAINT "CompanyPostReCommentReport_companyPostReCommentId_fkey" FOREIGN KEY ("companyPostReCommentId") REFERENCES "CompanyPostReComment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
