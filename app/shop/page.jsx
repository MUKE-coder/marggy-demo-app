import { getProducts } from "@/actions/products";
import LoadingProducts from "@/components/LoadingProducts";
import Link from "next/link";
import { Suspense } from "react";

export default async function Shop() {
  const products = await getProducts();
  console.log(products);
  return (
    <Suspense fallback={<LoadingProducts />}>
      <div className="container max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <h2 className="py-2 text-3xl">Products({products.length})</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {products.map((item, i) => {
            return (
              <Link key={i} href={"#"} className="rounded">
                <img src={item.image} alt="" />
                <div className="flex">
                  <h2 className="line-clamp-1">{item.name}</h2>
                  <p>${item.price}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Suspense>
  );
}
