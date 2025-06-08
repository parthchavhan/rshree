// app/products/[id]/page.tsx
import prisma from "@/app/lib/prisma";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function ProductDetail({ params }: { params: { id: string } }) {
  const product = await prisma.product.findUnique({
    where: { id: params.id },
    include: { category: true, reviews: true },
  });

  if (!product) return notFound();

  return (
    <div className="max-w-6xl mx-auto p-6 text-emerald-900">
      <h1 className="text-3xl font-bold mb-4 text-gold">{product.name}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          {product.images.map((url, idx) => (
            <Image
              key={idx}
              src={url}
              alt={product.name}
              width={600}
              height={400}
              className="rounded-xl border shadow-lg"
            />
          ))}
        </div>

        <div>
          {product.featured && (
            <span className="text-sm bg-gold text-white px-3 py-1 rounded-full">Featured</span>
          )}

          <p className="mt-4 text-lg">{product.shortDesc}</p>
          <p className="mt-2 text-sm text-gray-700">{product.longDesc}</p>

          {product.note && (
            <div className="mt-4 text-sm text-gray-600">
              <strong>Note:</strong> {product.note}
            </div>
          )}

          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gold mb-2">FAQs</h2>
            {product.faq && Object.entries(product.faq as Record<string, string>).map(([q, a], i) => (
              <div key={i} className="mb-2">
                <strong>Q:</strong> {q}
                <br />
                <strong>A:</strong> {a}
              </div>
            ))}
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gold mb-2">Reviews</h2>
            {product.reviews.length > 0 ? (
              product.reviews.map((review, i) => (
                <div key={i} className="border-t pt-2 mt-2">
                  <p><strong>{review.name}</strong> ({review.rating}/5)</p>
                  <p>{review.comment}</p>
                </div>
              ))
            ) : (
              <p>No reviews yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
