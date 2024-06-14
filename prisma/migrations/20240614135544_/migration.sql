/*
  Warnings:

  - You are about to drop the column `productId` on the `Messages` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Messages" DROP CONSTRAINT "Messages_productId_fkey";

-- AlterTable
ALTER TABLE "Messages" DROP COLUMN "productId",
ADD COLUMN     "offerProductId" TEXT;

-- AddForeignKey
ALTER TABLE "Messages" ADD CONSTRAINT "Messages_offerProductId_fkey" FOREIGN KEY ("offerProductId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
