/*
  Warnings:

  - You are about to drop the `_FavoriteRelation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_FavoriteRelation" DROP CONSTRAINT "_FavoriteRelation_A_fkey";

-- DropForeignKey
ALTER TABLE "_FavoriteRelation" DROP CONSTRAINT "_FavoriteRelation_B_fkey";

-- DropTable
DROP TABLE "_FavoriteRelation";

-- CreateTable
CREATE TABLE "_UserFavoriteRelation" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CompanyFavoriteRelation" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UserFavoriteRelation_AB_unique" ON "_UserFavoriteRelation"("A", "B");

-- CreateIndex
CREATE INDEX "_UserFavoriteRelation_B_index" ON "_UserFavoriteRelation"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CompanyFavoriteRelation_AB_unique" ON "_CompanyFavoriteRelation"("A", "B");

-- CreateIndex
CREATE INDEX "_CompanyFavoriteRelation_B_index" ON "_CompanyFavoriteRelation"("B");

-- AddForeignKey
ALTER TABLE "_UserFavoriteRelation" ADD FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserFavoriteRelation" ADD FOREIGN KEY ("B") REFERENCES "UserPost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CompanyFavoriteRelation" ADD FOREIGN KEY ("A") REFERENCES "CompanyPost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CompanyFavoriteRelation" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
