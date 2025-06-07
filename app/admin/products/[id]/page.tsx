import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/app/lib/prisma";

export const dynamic = "force-dynamic";

interface ProductPageProps {
  params: {
    id: string;
  };
}

async function getProduct(id: string) {
  const product = await prisma.product.findUnique({
    where: {
      id,
    },
    include: {
      category: true,
      reviews: {
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  if (!product) {
    notFound();
  }

  return product;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.id);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <div className="space-x-2">
          <Link
            href={`/admin/products/${product.id}/edit`}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
          >
            Edit
          </Link>
          <Link
            href={`/admin/products/${product.id}/delete`}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
          >
            Delete
          </Link>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-lg font-semibold mb-2">Product Details</h2>
              <dl className="space-y-2">
                <div className="flex">
                  <dt className="w-32 font-medium text-gray-500">Category:</dt>
                  <dd>{product.category.name}</dd>
                </div>
                <div className="flex">
                  <dt className="w-32 font-medium text-gray-500">Featured:</dt>
                  <dd>{product.featured ? "Yes" : "No"}</dd>
                </div>
                <div className="flex">
                  <dt className="w-32 font-medium text-gray-500">Created:</dt>
                  <dd>{new Date(product.createdAt).toLocaleString()}</dd>
                </div>
                <div className="flex">
                  <dt className="w-32 font-medium text-gray-500">Updated:</dt>
                  <dd>{new Date(product.updatedAt).toLocaleString()}</dd>
                </div>
              </dl>
            </div>

            {product.images.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold mb-2">Images</h2>
                <div className="grid grid-cols-2 gap-2">
                  {product.images.map((image, index) => (
                    <div key={index} className="aspect-square bg-gray-100 rounded overflow-hidden">
                      <img
                        src={image}
                        alt={`${product.name} - ${index + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://placehold.co/400x400?text=Image+Not+Found";
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {product.shortDesc && (
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-2">Short Description</h2>
              <p className="text-gray-700">{product.shortDesc}</p>
            </div>
          )}

          {product.longDesc && (
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-2">Long Description</h2>
              <p className="text-gray-700 whitespace-pre-line">{product.longDesc}</p>
            </div>
          )}

          {product.note && (
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-2">Additional Notes</h2>
              <p className="text-gray-700 whitespace-pre-line">{product.note}</p>
            </div>
          )}

          {product.faq && Object.keys(product.faq).length > 0 && (
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-2">FAQ</h2>
              <dl className="space-y-4">
                {Object.entries(product.faq).map(([question, answer], index) => (
                  <div key={index}>
                    <dt className="font-medium text-gray-900">{question}</dt>
                    <dd className="mt-1 text-gray-700">{answer as string}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Reviews ({product.reviews.length})</h2>
          
          {product.reviews.length === 0 ? (
            <p className="text-gray-500">No reviews yet.</p>
          ) : (
            <div className="space-y-4">
              {product.reviews.map((review) => (
                <div key={review.id} className="border-b pb-4">
                  <div className="flex justify-between">
                    <h3 className="font-medium">{review.name}</h3>
                    <div className="flex items-center">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i} className={`text-lg ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}>
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-500">
                        {new Date(review.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <p className="mt-1 text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 