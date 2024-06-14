-- AlterTable
ALTER TABLE "Messages" ADD COLUMN     "productId" TEXT;

-- AddForeignKey
ALTER TABLE "Messages" ADD CONSTRAINT "Messages_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
