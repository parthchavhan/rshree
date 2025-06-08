import prisma from "@/app/lib/prisma";
import Link from "next/link";

export default async function CategoriesPage() {
  const categories = await prisma.category.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-[#f9fefc] p-8">
      <h1 className="text-3xl font-bold text-[#16543a] mb-6 text-center">Shop by Category</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {categories.map((category) => (
          <Link key={category.id} href={`/products?category=${category.id}`}>
            <div className="border border-[#c59d5f] bg-white shadow-sm hover:shadow-lg p-6 rounded-xl transition">
              <h2 className="text-xl font-semibold text-[#16543a]">{category.name}</h2>
              <p className="text-sm text-gray-600 mt-1">Explore exquisite jewellery</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
