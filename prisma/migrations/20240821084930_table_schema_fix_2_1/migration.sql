/*
  Warnings:

  - The primary key for the `Institute` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `instituteUuid` on the `Institute` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Institute" DROP CONSTRAINT "Institute_pkey",
DROP COLUMN "instituteUuid",
ALTER COLUMN "uuid" DROP DEFAULT,
ALTER COLUMN "uuid" SET DATA TYPE TEXT,
ADD CONSTRAINT "Institute_pkey" PRIMARY KEY ("uuid");
DROP SEQUENCE "Institute_uuid_seq";

-- CreateTable
CREATE TABLE "CourseList" (
    "uuid" TEXT NOT NULL,
    "courseUuid" TEXT NOT NULL,
    "instituteUuid" TEXT NOT NULL,

    CONSTRAINT "CourseList_pkey" PRIMARY KEY ("uuid")
);

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_instituteUuid_fkey" FOREIGN KEY ("instituteUuid") REFERENCES "Institute"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseList" ADD CONSTRAINT "CourseList_courseUuid_fkey" FOREIGN KEY ("courseUuid") REFERENCES "Course"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseList" ADD CONSTRAINT "CourseList_instituteUuid_fkey" FOREIGN KEY ("instituteUuid") REFERENCES "Institute"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
