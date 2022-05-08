-- CreateTable
CREATE TABLE "movies" (
    "id" SERIAL NOT NULL,
    "ator" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "banner" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "movies_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "movies_title_key" ON "movies"("title");
