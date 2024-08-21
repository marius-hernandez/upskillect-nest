/*
  Warnings:

  - The primary key for the `Course` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `institute` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `Course` table. All the data in the column will be lost.
  - The primary key for the `Institute` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Institute` table. All the data in the column will be lost.
  - Added the required column `instituteUuid` to the `Course` table without a default value. This is not possible if the table is not empty.
  - The required column `uuid` was added to the `Course` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "Course" DROP CONSTRAINT "Course_pkey",
DROP COLUMN "id",
DROP COLUMN "institute",
DROP COLUMN "location",
ADD COLUMN     "instituteUuid" TEXT NOT NULL,
ADD COLUMN     "uuid" TEXT NOT NULL,
ADD CONSTRAINT "Course_pkey" PRIMARY KEY ("uuid");

-- AlterTable
ALTER TABLE "Institute" DROP CONSTRAINT "Institute_pkey",
DROP COLUMN "id",
ADD COLUMN     "uuid" SERIAL NOT NULL,
ADD CONSTRAINT "Institute_pkey" PRIMARY KEY ("uuid");
