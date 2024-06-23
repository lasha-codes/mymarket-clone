-- CreateTable
CREATE TABLE "Offers" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "sellerId" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Offers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Offers" ADD CONSTRAINT "Offers_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
