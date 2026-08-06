"use client";
import { useActionState, useEffect } from "react";
import { FormState, removeProduct } from "@/app/action/products";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";


// const initialState = {
//   success: false,
//   error: {},
// };

const initialState: FormState = {
  success: false,
  errors: {},
};
 
export default function DeleteButton({ id }: { id: number }) {

    const removeProductWithId = removeProduct.bind(null, id);
    
    const [state, formAction, pending] = useActionState(
        removeProductWithId,
        initialState
    );

    useEffect(() => {
      if (state.success) {
          toast.success("Product deleted successfully!");
          redirect("/products-db");
      }
    }, [state]);

    
    return (
      <form action={formAction}>
        <button
          type="submit"
          disabled={pending}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
        >
          {pending ? "Deleting..." : "Delete Product"}
        </button>
      </form>
    );
}