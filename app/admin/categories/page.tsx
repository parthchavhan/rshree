import prisma from "@/app/lib/prisma";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function CategoriesPage() {
  const categories = await prisma.category.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Categories</h1>
        <Link href="/admin/categories/new" className="bg-blue-600 text-white px-4 py-2 rounded">
          New Category
        </Link>
      </div>
      <table className="min-w-full bg-white shadow rounded">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id} className="border-t">
              <td className="px-4 py-2">{category.name}</td>
              <td className="px-4 py-2 space-x-2">
                <Link href={`/admin/categories/${category.id}/edit`} className="text-blue-600 hover:underline">
                  Edit
                </Link>
                <Link href={`/admin/categories/${category.id}/delete`} className="text-red-600 hover:underline">
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 