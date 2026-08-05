import Link from "next/link";
import CommonPageDesign from "../components/commonPageDesign";
import { getProducts } from "@/app/prisma-db";
import { removeProduct } from "../action/products";
import DeleteButton from "../components/ui/deleteButton";



export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export default async function ProductsPage() {
  const products: Product[] = await getProducts();
  return (
    <CommonPageDesign>
      <section className="relative w-full max-w-3/4 rounded-md border border-cyan-100 bg-slate-800 p-10 shadow-4xl backdrop-blur-4xl">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-300 py-2 text-center">
          Products
        </h1>

        <table className="w-full text-left text-sm ">
          <thead>
            <tr className="border-b border-slate-200 ">
              <th className="px-6 py-3 font-medium text-slate-500">Title</th>
              <th className="px-6 py-3 font-medium text-slate-500">Price</th>
              <th className="px-6 py-3 font-medium text-slate-500">
                Description
              </th>
              <th className="px-6 py-3 font-medium text-slate-500 text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {products.map((product) => (
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
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Edit
                      </button>
                    </Link>
                    {/* <form action={removeProduct.bind(null, product.id)}>
                      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Delete
                      </button>
                    </form> */}
                    <DeleteButton id={product.id} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </CommonPageDesign>
  );
}
