"use client";
import { useActionState, useEffect } from "react";
import { FormState, removeProduct } from "@/app/action/products";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";


// const initialState = {
//   success: false,
//   error: {},
// };

const initialState: FormState = {
  success: false,
  errors: {},
};
 
export default function DeleteButton({ id }: { id: number }) {
  const router = useRouter();

  //const removeProductWithId = removeProduct.bind(null, id);

  // 👇 bind এর বদলে explicit wrapper — টাইপ সঠিকভাবে infer হবে
  const removeProductWithId = async (
    prevState: FormState,
    formData: FormData,
  ): Promise<FormState> => {
    //return removeProduct(id, true, prevState, formData);

    const result = await removeProduct(id, true, prevState, formData);

    if (result.success) {
      toast.success("Product deleted successfully!");
      //redirect("/products-db");
      router.push("/products-db"); //client side navigation
    }

    return result; // 👈 এটা যোগ করুন — এখন সব path-এ FormState রিটার্ন হচ্ছে
  };

  const [state, formAction, pending] = useActionState(
    removeProductWithId,
    initialState,
  );

  useEffect(() => {
    if (state.success) {
      toast.success("Product deleted successfully!");
      //redirect("/products-db");
      router.push("/products-db"); //client side navigation
    }
  }, [state]);

  return (
    <form action={formAction}>
      <button
        type="submit"
        disabled={pending}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
      >
        {pending ? "Deleting..." : "Delete"}
      </button>
    </form>
  );
}