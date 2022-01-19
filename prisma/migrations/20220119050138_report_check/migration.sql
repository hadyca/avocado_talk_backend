-- AlterTable
ALTER TABLE "CompanyPostCommentReport" ADD COLUMN     "check" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "delete" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "CompanyPostReCommentReport" ADD COLUMN     "check" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "delete" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "CompanyPostReport" ADD COLUMN     "check" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "delete" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "UserPostCommentReport" ADD COLUMN     "check" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "delete" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "UserPostReCommentReport" ADD COLUMN     "check" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "delete" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "UserPostReport" ADD COLUMN     "check" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "delete" BOOLEAN NOT NULL DEFAULT false;
