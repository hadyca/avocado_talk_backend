-- AlterIndex
ALTER INDEX "Company_email_key" RENAME TO "Company.email_unique";

-- AlterIndex
ALTER INDEX "Company_userId_key" RENAME TO "Company.userId_unique";

-- AlterIndex
ALTER INDEX "CompanyPostLike_userId_companyPostId_key" RENAME TO "CompanyPostLike.userId_companyPostId_unique";

-- AlterIndex
ALTER INDEX "User_email_key" RENAME TO "User.email_unique";

-- AlterIndex
ALTER INDEX "User_username_key" RENAME TO "User.username_unique";

-- AlterIndex
ALTER INDEX "UserPostLike_userId_userPostId_key" RENAME TO "UserPostLike.userId_userPostId_unique";
