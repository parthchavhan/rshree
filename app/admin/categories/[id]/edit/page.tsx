import prisma from "@/app/lib/prisma";
import { redirect } from "next/navigation";

type Props = { params: { id: string } };

export const dynamic = "force-dynamic";

export default async function EditCategoryPage({ params }: Props) {
  const category = await prisma.category.findUnique({ where: { id: params.id } });
  if (!category) return <p>Category not found</p>;

  async function updateCategory(data: FormData) {
    "use server";
    const name = data.get("name") as string;
    await prisma.category.update({ where: { id: params.id }, data: { name } });
    redirect("/admin/categories");
  }

  return (
    <form action={updateCategory} className="space-y-4 max-w-md">
      <h1 className="text-2xl font-bold">Edit Category</h1>
      <div>
        <label className="block mb-1">Name</label>
        <input name="name" defaultValue={category.name} required className="w-full border p-2 rounded" />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Update Category
      </button>
    </form>
  );
} 