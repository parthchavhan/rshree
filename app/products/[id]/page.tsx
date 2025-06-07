import prisma from "@/app/lib/prisma";
import { notFound } from "next/navigation";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

type Props = {
  params: { id: string };
};

interface FAQ {
  [question: string]: string; 
}

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  createdAt: Date; 
}

interface Product {
  id: string;
  name: string;
  images: string[];
  shortDesc?: string;
  longDesc?: string;
  note?: string;
  category: { name: string };
  faq?: FAQ;
  reviews: Review[];
}

export default async function ProductPage({ params }: Props) {
  const product = await prisma.product.findUnique({
    where: { id: params.id },
    include: {
      category: true,
      reviews: true,
    },
  });

  if (!product) return notFound();

  return (
    <div className="bg-[#f9fefc] text-[#084236] min-h-screen pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Product Title */}
        <h1 className="text-4xl font-bold mb-2 text-[#046c4e]">{product.name}</h1>
        <p className="text-sm text-[#0f5742] mb-6 italic">Category: {product.category.name}</p>

        {/* Product Images & Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Images */}
          <div className="space-y-4">
            {product.images.map((img: string | undefined, i: Key | null | undefined) => (
              <img
                key={i?.toString()}
                src={img}
                alt={`Product Image ${Number(i) + 1}`}
                className="w-full rounded-lg shadow-lg border border-[#cdeae1]"
              />
            ))}
          </div>

          {/* Details */}
          <div className="space-y-4 text-lg">
            {product.featured && (
              <span className="inline-block bg-[#d4f8ee] text-[#046c4e] font-semibold px-3 py-1 rounded-full">
                🌟 Featured Product
              </span>
            )}
            {product.shortDesc && <p className="text-[#125e4a]">{product.shortDesc}</p>}
            {product.longDesc && (
              <p className="text-[#0e4e3c] leading-relaxed">{product.longDesc}</p>
            )}
            {product.note && (
              <p className="bg-[#ecfdf8] text-[#0f5742] p-3 rounded-lg border border-[#cdeae1] italic">
                📝 <strong>Note:</strong> {product.note}
              </p>
            )}
          </div>
        </div>

        {/* FAQs */}
        {product.faq && (
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-[#046c4e] mb-4 border-b pb-1 border-[#aedfd1]">
              FAQs
            </h2>
            <div className="space-y-3">
              {Object.entries(product.faq).map(([q, a]) => (
                <div key={q}>
                  <p className="font-medium text-[#084236]">{q as string}</p>
                  <p className="text-[#0f5742]">{a as string}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Reviews */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-[#046c4e] mb-4 border-b pb-1 border-[#aedfd1]">
            Customer Reviews
          </h2>
          {product.reviews.length === 0 ? (
            <p className="text-gray-500">No reviews yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.reviews.map((review: { id: Key | null | undefined; name: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; rating: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; comment: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }) => (
                <div
                  key={review.id}
                  className="bg-white p-4 rounded-xl border border-[#d7f2e9] shadow-sm"
                >
                  <p className="text-[#046c4e] font-semibold">{review.name}</p>
                  <p className="text-yellow-500 mb-1">⭐ {review.rating} / 5</p>
                  <p className="text-[#0f5742]">{review.comment}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
