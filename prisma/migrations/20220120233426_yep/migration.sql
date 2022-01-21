-- RenameIndex
ALTER INDEX "Company.email_unique" RENAME TO "Company_email_key";

-- RenameIndex
ALTER INDEX "Company.userId_unique" RENAME TO "Company_userId_key";

-- RenameIndex
ALTER INDEX "CompanyPostLike.userId_companyPostId_unique" RENAME TO "CompanyPostLike_userId_companyPostId_key";

-- RenameIndex
ALTER INDEX "User.email_unique" RENAME TO "User_email_key";

-- RenameIndex
ALTER INDEX "User.username_unique" RENAME TO "User_username_key";

-- RenameIndex
ALTER INDEX "UserPostLike.userId_userPostId_unique" RENAME TO "UserPostLike_userId_userPostId_key";
