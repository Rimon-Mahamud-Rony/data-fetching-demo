"use client";

import Link from "next/link";
import CommonPageDesign from "../components/commonPageDesign";
import { removeProduct, type FormState } from "../action/products"; 
import DeleteButton from "../components/ui/deleteButton";
import { useOptimistic, useState, useEffect } from "react";
import { toast } from "react-toastify";



export type Product = { 
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export const ProductDetail = ({ products }: { products: Product[] }) => {
  const [optimisticProducts, setOptimisticProducts] = useOptimistic(
    products,

    (currentProducts, productId) => {
      return currentProducts.filter((product) => product.id !== productId); //update just the product with the given id, remove it from the list
    },
  );

  // 👇 removeProduct-এর result ধরে রাখার জন্য state
 // const [deleteResult, setDeleteResult] = useState<{ success: boolean } | null>( null,);

  const removeProductbyId = async (productId: number) => {
    // Optimistically update the UI
    setOptimisticProducts(productId);
    // await removeProduct(productId); // Call the server action to remove the product
   
    const result = await removeProduct(
      productId,
      true,
      { errors: {}, success: false },
      new FormData(),
    );

    if (result.success) {
      toast.success(
        "Product optimistically Deleted Successfully without useeffect",
      );
    }
   // setDeleteResult(result); // 👈 result টা state-এ সেট করা হচ্ছে
  };

  // 👇 এই useEffect deleteResult.success পরিবর্তন হলে ট্রিগার হবে

  /*useEffect(() => {
    if (deleteResult?.success) {
      toast.success("Product optimistically Deleted Successfully");
    }
  }, [deleteResult]);*/

  

  return (
    <CommonPageDesign>
      <section className="relative w-full max-w-3/4 rounded-md border border-cyan-100 bg-slate-800 p-10 shadow-4xl backdrop-blur-4xl">
        {optimisticProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-4 py-16">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01M21 12A9 9 0 113 12a9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-red-200">
              No products available
            </h2>
            <p className="max-w-xl text-center text-red-300">
              There are currently no products in the database. Add products to
              make them available for editing, deleting, and display.
            </p>
            <div className="flex gap-3">
              <Link href="/products-db-create">
                <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded shadow">
                  Add Product
                </button>
              </Link>
              <button
                className="bg-transparent border border-red-600 text-red-200 hover:bg-red-700/10 font-medium py-2 px-4 rounded"
                onClick={() => toast.info("No products to manage yet")}
              >
                Learn more
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 justify-end mb-4">
              <div className="flex justify-end">
                <h1 className="text-2xl font-semibold tracking-tight text-slate-300 py-2 text-center">
                  ALL PRODUCTS
                </h1>
              </div>

              <div className="flex justify-end">
                <div>
                  <h1 className="text-xl font-semibold text-slate-300  text-center">
                    Add Products
                  </h1>
                </div>
                <div>
                  <Link href="/products-db-create">
                    <button className="bg-green-500 hover:bg-green-700 text-white cursor-pointer rounded-full shadow-2xl w-8 h-8 flex items-center justify-center ml-2">
                      +
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <table className="w-full text-left text-sm ">
              <thead>
                <tr className="border-b border-slate-200 ">
                  <th className="px-6 py-3 font-medium text-slate-500">
                    Title
                  </th>
                  <th className="px-6 py-3 font-medium text-slate-500">
                    Price
                  </th>
                  <th className="px-6 py-3 font-medium text-slate-500">
                    Description
                  </th>
                  <th className="px-6 py-3 font-medium text-slate-500 text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {/* {products.map((product) => ( */}
                {optimisticProducts.map((product) => (
                  <tr
                    key={product.id}
                    className="transition-colors hover:bg-slate-700"
                  >
                    <td className="px-6 py-4 font-medium text-white">
                      {product.title}
                    </td>
                    <td className="px-6 py-4 text-white">
                      <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                        ${product.price.toFixed(2)}
                      </span>
                    </td>
                    <td className="px-6 py-4 max-w-xs truncate text-white">
                      {product.description ?? (
                        <span className="italic text-slate-400">
                          No description
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-4">
                        <Link href={`/products-db/${product.id}`}>
                          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
                            Edit
                          </button>
                        </Link>
                        {/* <form action={removeProduct.bind(null, product.id)}>
                      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Delete
                      </button>
                    </form> */}

                        <DeleteButton id={product.id} />

                        <form action={removeProductbyId.bind(null, product.id)}>
                          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            Delete in Optimistic way
                          </button>
                        </form>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </section>
    </CommonPageDesign>
  );
};;
