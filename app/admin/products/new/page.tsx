import prisma from "@/app/lib/prisma";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function NewProductPage() {
  const categories = await prisma.category.findMany();

  async function createProduct(data: FormData) {
    "use server";
    const name = data.get("name") as string;
    const shortDesc = data.get("shortDesc") as string;
    const longDesc = data.get("longDesc") as string;
    const images = (data.get("images") as string)
      .split(",")
      .map((url) => url.trim())
      .filter((url) => url);
    const featured = data.get("featured") === "on";
    const note = data.get("note") as string;
    const faqJson = data.get("faq") as string;
    const faq = faqJson ? JSON.parse(faqJson) : {};
    const categoryId = data.get("categoryId") as string;

    await prisma.product.create({
      data: { name, shortDesc, longDesc, images, featured, note, faq, categoryId },
    });
    redirect("/admin/products");
  }

  return (
    <form action={createProduct} className="space-y-4 max-w-lg">
      <h1 className="text-2xl font-bold">New Product</h1>

      <div>
        <label className="block mb-1">Name</label>
        <input name="name" required className="w-full border p-2 rounded" />
      </div>

      <div>
        <label className="block mb-1">Short Description</label>
        <input name="shortDesc" className="w-full border p-2 rounded" />
      </div>

      <div>
        <label className="block mb-1">Long Description</label>
        <textarea name="longDesc" className="w-full border p-2 rounded" />
      </div>

      <div>
        <label className="block mb-1">Images (comma separated URLs)</label>
        <input name="images" className="w-full border p-2 rounded" />
      </div>

      <div className="flex items-center">
        <input type="checkbox" name="featured" id="featured" className="mr-2" />
        <label htmlFor="featured">Featured</label>
      </div>

      <div>
        <label className="block mb-1">Note</label>
        <textarea name="note" className="w-full border p-2 rounded" />
      </div>

      <div>
        <label className="block mb-1">FAQ (JSON)</label>
        <textarea
          name="faq"
          placeholder='{"Question":"Answer"}'
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block mb-1">Category</label>
        <select name="categoryId" required className="w-full border p-2 rounded">
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        Create Product
      </button>
    </form>
  );
} 