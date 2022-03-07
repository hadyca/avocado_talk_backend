-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "avatar" TEXT,
    "bio" TEXT,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserPost" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "UserPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserPostLike" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "userPostId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserPostLike_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserPostComment" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "userPostId" INTEGER NOT NULL,
    "payload" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserPostComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserPostReComment" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "userPostCommentId" INTEGER NOT NULL,
    "payload" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserPostReComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "companyName" TEXT NOT NULL,
    "addressStep1" TEXT NOT NULL,
    "addressStep2" TEXT NOT NULL,
    "addressStep3" TEXT NOT NULL,
    "sector" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "aboutUs" TEXT NOT NULL,
    "contactNumber" TEXT NOT NULL,
    "totalEmployees" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompanyPost" (
    "id" SERIAL NOT NULL,
    "companyId" INTEGER NOT NULL,
    "postSector" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "CompanyPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompanyPostLike" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "companyPostId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CompanyPostLike_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompanyPostComment" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "companyPostId" INTEGER NOT NULL,
    "payload" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CompanyPostComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompanyPostReComment" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "companyPostCommentId" INTEGER NOT NULL,
    "payload" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CompanyPostReComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "File" (
    "id" SERIAL NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "fileKey" TEXT NOT NULL,
    "userPostId" INTEGER,
    "companyPostId" INTEGER,

    CONSTRAINT "File_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserPostReport" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "reason" TEXT NOT NULL,
    "userPostId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "check" BOOLEAN NOT NULL DEFAULT false,
    "delete" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "UserPostReport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserPostCommentReport" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "reason" TEXT NOT NULL,
    "userPostCommentId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "check" BOOLEAN NOT NULL DEFAULT false,
    "delete" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "UserPostCommentReport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserPostReCommentReport" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "reason" TEXT NOT NULL,
    "userPostReCommentId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "check" BOOLEAN NOT NULL DEFAULT false,
    "delete" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "UserPostReCommentReport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompanyPostReport" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "reason" TEXT NOT NULL,
    "companyPostId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "check" BOOLEAN NOT NULL DEFAULT false,
    "delete" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "CompanyPostReport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompanyPostCommentReport" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "reason" TEXT NOT NULL,
    "companyPostCommentId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "check" BOOLEAN NOT NULL DEFAULT false,
    "delete" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "CompanyPostCommentReport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompanyPostReCommentReport" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "reason" TEXT NOT NULL,
    "companyPostReCommentId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "check" BOOLEAN NOT NULL DEFAULT false,
    "delete" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "CompanyPostReCommentReport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_FollowRelation" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_FavoriteRelation" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserPostLike_userId_userPostId_key" ON "UserPostLike"("userId", "userPostId");

-- CreateIndex
CREATE UNIQUE INDEX "Company_userId_key" ON "Company"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Company_email_key" ON "Company"("email");

-- CreateIndex
CREATE UNIQUE INDEX "CompanyPostLike_userId_companyPostId_key" ON "CompanyPostLike"("userId", "companyPostId");

-- CreateIndex
CREATE UNIQUE INDEX "_FollowRelation_AB_unique" ON "_FollowRelation"("A", "B");

-- CreateIndex
CREATE INDEX "_FollowRelation_B_index" ON "_FollowRelation"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FavoriteRelation_AB_unique" ON "_FavoriteRelation"("A", "B");

-- CreateIndex
CREATE INDEX "_FavoriteRelation_B_index" ON "_FavoriteRelation"("B");

-- AddForeignKey
ALTER TABLE "UserPost" ADD CONSTRAINT "UserPost_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPostLike" ADD CONSTRAINT "UserPostLike_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPostLike" ADD CONSTRAINT "UserPostLike_userPostId_fkey" FOREIGN KEY ("userPostId") REFERENCES "UserPost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPostComment" ADD CONSTRAINT "UserPostComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPostComment" ADD CONSTRAINT "UserPostComment_userPostId_fkey" FOREIGN KEY ("userPostId") REFERENCES "UserPost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPostReComment" ADD CONSTRAINT "UserPostReComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPostReComment" ADD CONSTRAINT "UserPostReComment_userPostCommentId_fkey" FOREIGN KEY ("userPostCommentId") REFERENCES "UserPostComment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyPost" ADD CONSTRAINT "CompanyPost_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyPostLike" ADD CONSTRAINT "CompanyPostLike_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyPostLike" ADD CONSTRAINT "CompanyPostLike_companyPostId_fkey" FOREIGN KEY ("companyPostId") REFERENCES "CompanyPost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyPostComment" ADD CONSTRAINT "CompanyPostComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyPostComment" ADD CONSTRAINT "CompanyPostComment_companyPostId_fkey" FOREIGN KEY ("companyPostId") REFERENCES "CompanyPost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyPostReComment" ADD CONSTRAINT "CompanyPostReComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyPostReComment" ADD CONSTRAINT "CompanyPostReComment_companyPostCommentId_fkey" FOREIGN KEY ("companyPostCommentId") REFERENCES "CompanyPostComment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_userPostId_fkey" FOREIGN KEY ("userPostId") REFERENCES "UserPost"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_companyPostId_fkey" FOREIGN KEY ("companyPostId") REFERENCES "CompanyPost"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPostReport" ADD CONSTRAINT "UserPostReport_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPostReport" ADD CONSTRAINT "UserPostReport_userPostId_fkey" FOREIGN KEY ("userPostId") REFERENCES "UserPost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPostCommentReport" ADD CONSTRAINT "UserPostCommentReport_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPostCommentReport" ADD CONSTRAINT "UserPostCommentReport_userPostCommentId_fkey" FOREIGN KEY ("userPostCommentId") REFERENCES "UserPostComment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPostReCommentReport" ADD CONSTRAINT "UserPostReCommentReport_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPostReCommentReport" ADD CONSTRAINT "UserPostReCommentReport_userPostReCommentId_fkey" FOREIGN KEY ("userPostReCommentId") REFERENCES "UserPostReComment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyPostReport" ADD CONSTRAINT "CompanyPostReport_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyPostReport" ADD CONSTRAINT "CompanyPostReport_companyPostId_fkey" FOREIGN KEY ("companyPostId") REFERENCES "CompanyPost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyPostCommentReport" ADD CONSTRAINT "CompanyPostCommentReport_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyPostCommentReport" ADD CONSTRAINT "CompanyPostCommentReport_companyPostCommentId_fkey" FOREIGN KEY ("companyPostCommentId") REFERENCES "CompanyPostComment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyPostReCommentReport" ADD CONSTRAINT "CompanyPostReCommentReport_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyPostReCommentReport" ADD CONSTRAINT "CompanyPostReCommentReport_companyPostReCommentId_fkey" FOREIGN KEY ("companyPostReCommentId") REFERENCES "CompanyPostReComment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FollowRelation" ADD FOREIGN KEY ("A") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FollowRelation" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FavoriteRelation" ADD FOREIGN KEY ("A") REFERENCES "CompanyPost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FavoriteRelation" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
