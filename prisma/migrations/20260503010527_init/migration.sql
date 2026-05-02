-- CreateTable
CREATE TABLE "Slug" (
    "id" SERIAL NOT NULL,
    "original" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Slug_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Slug_slug_key" ON "Slug"("slug");
