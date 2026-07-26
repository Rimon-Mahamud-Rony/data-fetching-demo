import CommonPageDesign from "../components/commonPageDesign";

import { getProducts } from "@/app/prisma-db";
type Product = {
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
                    <button className="rounded-sm px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:bg-emerald-100 hover:text-emerald-900 border border-emerald-200 disabled:opacity-50 cursor-pointer" >
                      Edit
                    </button>
                    <button className="rounded-sm px-3 py-1.5 text-xs font-medium text-red-600 transition hover:bg-red-50 disabled:opacity-50 border border-red-500 cursor-pointer">
                      Delete
                    </button>
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
