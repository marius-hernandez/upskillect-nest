/*
  Warnings:

  - You are about to drop the column `instute` on the `Institute` table. All the data in the column will be lost.
  - Added the required column `institute` to the `Institute` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Institute" DROP COLUMN "instute",
ADD COLUMN     "institute" TEXT NOT NULL;
