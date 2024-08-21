-- CreateTable
CREATE TABLE "Course" (
    "id" SERIAL NOT NULL,
    "courseTitle" TEXT NOT NULL,
    "institute" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "rating" DECIMAL(65,30) NOT NULL,
    "startsAt" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);
