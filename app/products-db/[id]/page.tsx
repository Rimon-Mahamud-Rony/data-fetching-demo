    
import { getProducts } from "@/app/prisma-db";
import EditProductForm from "./product-edit-form";
import { getProductById } from "@/app/prisma-db";
import { Product } from "../page";
import { notFound } from "next/navigation";



export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    
    const product = await getProductById(Number(id));
    
    console.log("Fetched product:", product); // Log the fetched product for debugging

  if (!product) {
    notFound();
  }
  
  return <EditProductForm product={product} />;
}
