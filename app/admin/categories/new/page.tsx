import prisma from "@/app/lib/prisma";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default function NewCategoryPage() {
  async function createCategory(data: FormData) {
    "use server";
    const name = data.get("name") as string;
    await prisma.category.create({ data: { name } });
    redirect("/admin/categories");
  }

  return (
    <form action={createCategory} className="space-y-4 max-w-md">
      <h1 className="text-2xl font-bold">New Category</h1>
      <div>
        <label className="block mb-1">Name</label>
        <input name="name" required className="w-full border p-2 rounded" />
      </div>
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        Create Category
      </button>
    </form>
  );
} 