import prisma from "@/app/lib/prisma";
import { redirect } from "next/navigation";

type Props = { params: { id: string } };

export const dynamic = "force-dynamic";

export default async function EditProductPage({ params }: Props) {
  const product = await prisma.product.findUnique({ where: { id: params.id } });
  const categories = await prisma.category.findMany();
  if (!product) return <p>Product not found</p>;

  async function updateProduct(data: FormData) {
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

    await prisma.product.update({
      where: { id: params.id },
      data: { name, shortDesc, longDesc, images, featured, note, faq, categoryId },
    });
    redirect("/admin/products");
  }

  return (
    <form action={updateProduct} className="space-y-4 max-w-lg">
      <h1 className="text-2xl font-bold">Edit Product</h1>

      <div>
        <label className="block mb-1">Name</label>
        <input name="name" defaultValue={product.name} required className="w-full border p-2 rounded" />
      </div>

      <div>
        <label className="block mb-1">Short Description</label>
        <input name="shortDesc" defaultValue={product.shortDesc || ""} className="w-full border p-2 rounded" />
      </div>

      <div>
        <label className="block mb-1">Long Description</label>
        <textarea name="longDesc" defaultValue={product.longDesc || ""} className="w-full border p-2 rounded" />
      </div>

      <div>
        <label className="block mb-1">Images (comma separated URLs)</label>
        <input
          name="images"
          defaultValue={product.images.join(",")}
          className="w-full border p-2 rounded"
        />
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          name="featured"
          id="featured"
          defaultChecked={product.featured}
          className="mr-2"
        />
        <label htmlFor="featured">Featured</label>
      </div>

      <div>
        <label className="block mb-1">Note</label>
        <textarea name="note" defaultValue={product.note || ""} className="w-full border p-2 rounded" />
      </div>

      <div>
        <label className="block mb-1">FAQ (JSON)</label>
        <textarea
          name="faq"
          defaultValue={product.faq ? JSON.stringify(product.faq) : ""}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block mb-1">Category</label>
        <select name="categoryId" defaultValue={product.categoryId} required className="w-full border p-2 rounded">
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Update Product
      </button>
    </form>
  );
} 