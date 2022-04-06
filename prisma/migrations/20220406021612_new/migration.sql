-- CreateTable
CREATE TABLE "UserReport" (
    "id" SERIAL NOT NULL,
    "FromUserId" INTEGER NOT NULL,
    "ToUserId" INTEGER NOT NULL,
    "reason" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "check" BOOLEAN NOT NULL DEFAULT false,
    "delete" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "UserReport_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserReport" ADD CONSTRAINT "UserReport_FromUserId_fkey" FOREIGN KEY ("FromUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserReport" ADD CONSTRAINT "UserReport_ToUserId_fkey" FOREIGN KEY ("ToUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
