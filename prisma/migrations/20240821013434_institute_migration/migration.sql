-- CreateTable
CREATE TABLE "Institute" (
    "id" SERIAL NOT NULL,
    "institute" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "rating" DECIMAL(65,30) NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Institute_pkey" PRIMARY KEY ("id")
);
