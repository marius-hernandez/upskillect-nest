/*
  Warnings:

  - You are about to drop the column `coursesUuid` on the `Institute` table. All the data in the column will be lost.
  - Added the required column `instute` to the `Institute` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_instituteUuid_fkey";

-- DropForeignKey
ALTER TABLE "CourseList" DROP CONSTRAINT "CourseList_courseUuid_fkey";

-- DropForeignKey
ALTER TABLE "CourseList" DROP CONSTRAINT "CourseList_instituteUuid_fkey";

-- AlterTable
ALTER TABLE "Institute" DROP COLUMN "coursesUuid",
ADD COLUMN     "instute" TEXT NOT NULL;
