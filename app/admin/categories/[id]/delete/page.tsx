import prisma from "@/app/lib/prisma";
import Link from "next/link";
import { redirect } from "next/navigation";

type Props = { params: { id: string } };

export const dynamic = "force-dynamic";

export default async function DeleteCategoryPage({ params }: Props) {
  async function deleteCategory() {
    "use server";
    await prisma.category.delete({ where: { id: params.id } });
    redirect("/admin/categories");
  }

  const category = await prisma.category.findUnique({ where: { id: params.id } });
  if (!category) return <p>Category not found</p>;

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Delete Category</h1>
      <p>Are you sure you want to delete <strong>{category.name}</strong>?</p>
      <div className="space-x-2">
        <form action={deleteCategory} className="inline">
          <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded">
            Yes, Delete
          </button>
        </form>
        <Link href="/admin/categories" className="bg-gray-300 px-4 py-2 rounded">
          Cancel
        </Link>
      </div>
    </div>
  );
} 