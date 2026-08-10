import { PrismaClient } from "@/app/generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const adapter = new PrismaBetterSqlite3({
  url: "file:app.db",
});

const prisma = new PrismaClient({ adapter });

export const seedProducts = async () => {
  const count = await prisma.product.count();
  if (count === 0) {
    await prisma.product.createMany({
      data: [
        { title: "product-1", price: 100, description: "description-1" },
        { title: "product-2", price: 200, description: "description-2" },
        { title: "product-3", price: 300, description: "description-3" },
      ],
    });
  }
};

export const getProducts = async () => {
  //await seedProducts();
  return prisma.product.findMany();
};

export const getProductById = async (id:string | number) => {
  await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate a delay of 1 second
  return prisma.product.findUnique({
    where: { id: Number(id) },
  });
}

export async function addProduct(
  title: string,
  price: number,
  description: string
) {
  return await prisma.product.create({
    data: {
      title,
      price,
      description,
    },
  });
}

export async function updateProduct(
  id: number,
  title: string,
  price: number,
  description: string
) {
  return await prisma.product.update({
    where: { id },
    data: {
      title,
      price,
      description,
    },
  });
}

export async function deleteProduct(id: number) {
  return await prisma.product.delete({
    where: { id },
  });
}
