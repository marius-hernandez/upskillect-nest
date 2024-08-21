/*
  Warnings:

  - You are about to drop the column `institute` on the `Institute` table. All the data in the column will be lost.
  - Added the required column `coursesUuid` to the `Institute` table without a default value. This is not possible if the table is not empty.
  - Added the required column `instituteUuid` to the `Institute` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Institute" DROP COLUMN "institute",
ADD COLUMN     "coursesUuid" TEXT NOT NULL,
ADD COLUMN     "instituteUuid" TEXT NOT NULL;
