-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "topic" TEXT DEFAULT E'business',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
