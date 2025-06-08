// File: app/products/page.tsx
import prisma from "@/app/lib/prisma";
import Link from "next/link";

interface SearchParams {
  searchParams?: { category?: string };
}

export default async function ProductsPage({ searchParams }: SearchParams) {
  const categoryId = searchParams?.category;
  const products = await prisma.product.findMany({
    where: categoryId ? { categoryId } : {},
    include: { category: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-[#f9fefc] p-8">
      <h1 className="text-3xl font-bold text-[#16543a] mb-6 text-center">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <div className="border border-[#c59d5f] bg-white shadow-sm hover:shadow-lg p-6 rounded-xl transition">
              <img
                src={product.images[0] || "/placeholder.png"}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-[#16543a]">{product.name}</h2>
              {product.shortDesc && <p className="text-sm text-gray-600 mt-1">{product.shortDesc}</p>}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
