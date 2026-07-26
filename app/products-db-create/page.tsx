import CommonPageDesign from "../components/commonPageDesign";
import { addProduct } from "../prisma-db";
import { redirect } from "next/navigation";

export default function AddProductsPage() {
    
    async function createProduct( formData: FormData) {
        "use server";
        const title = formData.get("title") as string;
        const price = formData.get("price") as string;
        const description = formData.get("description") as string;

        await addProduct(title, parseInt(price), description);

        redirect("/products-db");
    }
    
    return (
      <CommonPageDesign>
        <section className="relative w-full max-w-3/4 rounded-md border border-cyan-100 bg-slate-800 p-10 shadow-4xl backdrop-blur-4xl">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-300 py-2 text-center">
            Add Product
          </h1>
          <form action={createProduct} className="flex flex-col gap-4">
            <label htmlFor="title" className="text-slate-300">
              Product Title:
            </label>
            <input
              type="text"
              name="title"
              placeholder="Product Title"
              className="bg-slate-600 text-slate-300 placeholder:text-slate-500 border border-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 p-4"
            />
            <label htmlFor="price" className="text-slate-300">
              Price:
            </label>
            <input
              type="number"
              name="price"
              placeholder="Price"
              className="bg-slate-600 text-slate-300 placeholder:text-slate-500 border border-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 p-4"
            />
            <label htmlFor="description" className="text-slate-300">
              Description:
            </label>
            <input
              type="text"
              name="description"
              placeholder="Description"
              className="bg-slate-600 text-slate-300 placeholder:text-slate-500 border border-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 p-4"
            />
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
            >
              Add Product
            </button>
          </form>
        </section>
      </CommonPageDesign>
    );
}
