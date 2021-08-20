-- AlterTable
ALTER TABLE "CompanyPost" ADD COLUMN     "fileKey" TEXT,
ALTER COLUMN "file" DROP NOT NULL;
