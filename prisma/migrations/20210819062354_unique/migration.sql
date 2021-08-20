/*
  Warnings:

  - A unique constraint covering the columns `[userId,companyPostId]` on the table `CompanyPostLike` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,userPostId]` on the table `UserPostLike` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CompanyPostLike.userId_companyPostId_unique" ON "CompanyPostLike"("userId", "companyPostId");

-- CreateIndex
CREATE UNIQUE INDEX "UserPostLike.userId_userPostId_unique" ON "UserPostLike"("userId", "userPostId");
