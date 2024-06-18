-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "availableForPurchase" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "inStock" INTEGER NOT NULL DEFAULT 1;
