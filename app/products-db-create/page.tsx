"use client";
import CommonPageDesign from "../components/commonPageDesign";

import { SubmitButton } from "../components/ui/submit";
import { useActionState } from "react";
import { FormState, createProduct } from "../action/products";
import { toast } from "react-toastify";
//import { redirect } from "next/navigation";
import {useRouter} from "next/navigation";
import { useEffect } from "react";
import Link from "next/link"


export default function AddProductsPage() {

  const router = useRouter();
    
  const initalState: FormState = {
    errors: {},
    success: false,
  };

  const [state, formAction, isPending] = useActionState(
    createProduct,
    initalState
  );    

  useEffect(() => {
    if (state.success) {
      toast.success("Product Added Successfully");
     //redirect("/products-db");
      router.push("/products-db"); //client side navigation
    }
  }, [state.success]);
  
    return (
      <CommonPageDesign>
        <section className="w-full max-w-2xl rounded-xl border border-slate-700 bg-slate-900/80 p-10 shadow-4xl backdrop-blur-3xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-white">Add Product</h1>
            <p className="mt-2 text-sm text-slate-400">
              Fill in the information below to create a new product. {"  "}
            <Link href="products-db" className="text-sm text-yellow-300 underline">Product List </Link>
            </p>
          </div>

          <form action={formAction} className="space-y-3">
            {/* Product Title */}
            <div>
              <label
                htmlFor="title"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Product Title
              </label>

              <input
                id="title"
                type="text"
                name="title"
                placeholder="Enter product title"
                className="w-full rounded-sm border border-slate-700 bg-slate-800 px-4 py-3 text-slate-200 placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20"
              />

              {state.errors.title && (
                <p className="mt-2 text-sm text-red-400">
                  {state.errors.title}
                </p>
              )}
            </div>

            {/* Price */}
            <div>
              <label
                htmlFor="price"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Price
              </label>

              <input
                id="price"
                type="number"
                name="price"
                placeholder="$0.00"
                className="w-full rounded-sm border border-slate-700 bg-slate-800 px-4 py-3 text-slate-200 placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20"
              />

              {state.errors.price && (
                <p className="mt-2 text-sm text-red-400">
                  {state.errors.price}
                </p>
              )}
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Description
              </label>

              <textarea
                id="description"
                name="description"
                rows={2}
                placeholder="Write a short description..."
                className="w-full resize-none rounded-sm border border-slate-700 bg-slate-800 px-4 py-3 text-slate-200 placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20"
              />

              {state.errors.description && (
                <p className="mt-2 text-sm text-red-400">
                  {state.errors.description}
                </p>
              )}
            </div>

            <div className="pt-2">
              <SubmitButton
                submitText="Add Product"
                submittingText="Adding..."
              />
            </div>
          </form>
        </section>
      </CommonPageDesign>
    );
}
