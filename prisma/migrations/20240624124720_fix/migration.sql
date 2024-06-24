/*
  Warnings:

  - Made the column `acepted` on table `Messages` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Messages" ALTER COLUMN "acepted" SET NOT NULL,
ALTER COLUMN "acepted" SET DEFAULT false;
