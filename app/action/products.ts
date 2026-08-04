"use server";
import { addProduct, updateProduct } from "../prisma-db";
import { redirect } from "next/navigation";


export type Error = {
  title?: string;
  price?: string;
  description?: string;
};

export type FormState = {
  errors: Error;
  success?: boolean;
};

export async function createProduct(prevState: FormState, formData: FormData): Promise<FormState> {
  const title = formData.get("title") as string;
  const price = formData.get("price") as string;
  const description = formData.get("description") as string;

  const errors: Error = {};

  if (!title) {
    errors.title = "Title is required";
  }

  if (!price) {
    errors.price = "Price is required";
  } else if (isNaN(parseInt(price))) {
    errors.price = "Price must be a valid number";
  }

  if (!description) {
    errors.description = "Description is required";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  await addProduct(title, parseInt(price), description);

  //await updateProduct(title, parseInt(price), description);
  // redirect("/products-db");
  
  return {
    errors: {},
    success: true,
  };
  
  
}

export async function editProduct(
  id: number,
  prevState: FormState,
  formData: FormData
) {
  //const id = formData.get("id") as string; //bind na kore pathate chaile
  const title = formData.get("title") as string;
  const price = formData.get("price") as string;
  const description = formData.get("description") as string;

  const errors: Error = {};

  if (!title) {
    errors.title = "Title is required";
  }

  if (!price) {
    errors.price = "Price is required";
  } else if (isNaN(parseInt(price))) {
    errors.price = "Price must be a valid number";
  }

  if (!description) {
    errors.description = "Description is required";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  //await addProduct(title, parseInt(price), description);

  //await updateProduct(parseInt(id), title, parseInt(price), description); ////bind na kore pathate chaile

  await updateProduct(id, title, parseInt(price), description);

  return {
    errors: {},
    success: true,
  };

  //redirect("/products-db");
}