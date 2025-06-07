import { prisma } from "@/app/lib/prisma";
import Link from "next/link";

export default async function ProductsPage() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
    include: { category: true },
  });

  return (
    <div className="p-6 bg-[#f9f5f0] min-h-screen">
      <h1 className="text-3xl font-bold text-[#8d6748] mb-6">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <div className="bg-white shadow rounded-xl p-4 hover:shadow-lg transition">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-64 object-cover rounded"
              />
              <h2 className="text-xl font-semibold text-[#6b4c3b] mt-4">{product.name}</h2>
              <p className="text-sm text-gray-600">{product.shortDesc}</p>
              <p className="text-sm text-gray-500 italic mt-1">Category: {product.category.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}