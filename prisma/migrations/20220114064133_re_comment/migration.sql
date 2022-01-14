-- CreateTable
CREATE TABLE "UserPostReComment" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "userPostCommentId" INTEGER NOT NULL,
    "payload" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompanyPostReComment" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "companyPostCommentId" INTEGER NOT NULL,
    "payload" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserPostReComment" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPostReComment" ADD FOREIGN KEY ("userPostCommentId") REFERENCES "UserPostComment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyPostReComment" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyPostReComment" ADD FOREIGN KEY ("companyPostCommentId") REFERENCES "CompanyPostComment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
