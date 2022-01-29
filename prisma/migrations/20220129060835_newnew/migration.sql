-- DropForeignKey
ALTER TABLE "CompanyPostCommentReport" DROP CONSTRAINT "CompanyPostCommentReport_companyPostCommentId_fkey";

-- DropForeignKey
ALTER TABLE "UserPostReComment" DROP CONSTRAINT "UserPostReComment_userPostCommentId_fkey";

-- AddForeignKey
ALTER TABLE "UserPostReComment" ADD CONSTRAINT "UserPostReComment_userPostCommentId_fkey" FOREIGN KEY ("userPostCommentId") REFERENCES "UserPostComment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyPostCommentReport" ADD CONSTRAINT "CompanyPostCommentReport_companyPostCommentId_fkey" FOREIGN KEY ("companyPostCommentId") REFERENCES "CompanyPostComment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
