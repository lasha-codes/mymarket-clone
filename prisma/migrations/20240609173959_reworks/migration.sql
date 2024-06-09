/*
  Warnings:

  - You are about to drop the column `brand` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `color` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `model` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `offerType` on the `Product` table. All the data in the column will be lost.
  - Added the required column `bill` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactName` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactNumber` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "brand",
DROP COLUMN "color",
DROP COLUMN "model",
DROP COLUMN "offerType",
ADD COLUMN     "bill" TEXT NOT NULL,
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "contactName" TEXT NOT NULL,
ADD COLUMN     "contactNumber" TEXT NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "priceDealType" TEXT[],
ADD COLUMN     "youtubeURL" TEXT;
