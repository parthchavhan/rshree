import prisma from "@/app/lib/prisma";
import Link from "next/link";
import { redirect } from "next/navigation";

type Props = { params: { id: string } };

export const dynamic = "force-dynamic";

export default async function DeleteProductPage({ params }: Props) {
  async function deleteProduct() {
    "use server";
    await prisma.product.delete({ where: { id: params.id } });
    redirect("/admin/products");
  }

  const product = await prisma.product.findUnique({ where: { id: params.id } });
  if (!product) return <p>Product not found</p>;

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Delete Product</h1>
      <p>Are you sure you want to delete <strong>{product.name}</strong>?</p>
      <div className="space-x-2">
        <form action={deleteProduct} className="inline">
          <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded">
            Yes, Delete
          </button>
        </form>
        <Link href="/admin/products" className="bg-gray-300 px-4 py-2 rounded">
          Cancel
        </Link>
      </div>
    </div>
  );
} 