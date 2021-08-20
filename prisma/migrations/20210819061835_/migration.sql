/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `CompanyPostLike` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[companyPostId]` on the table `CompanyPostLike` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CompanyPostLike.userId_unique" ON "CompanyPostLike"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "CompanyPostLike.companyPostId_unique" ON "CompanyPostLike"("companyPostId");
