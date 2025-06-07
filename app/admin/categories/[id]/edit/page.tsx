import React from "react";
import { notFound } from "next/navigation";
import { prisma } from "@/app/lib/prisma";
import CategoryForm from "../../_components/CategoryForm";

export const dynamic = "force-dynamic";

interface EditCategoryPageProps {
  params: {
    id: string;
  };
}

async function getCategory(id: string) {
  const category = await prisma.category.findUnique({
    where: {
      id,
    },
  });

  if (!category) {
    notFound();
  }

  return category;
}

export default async function EditCategoryPage({ params }: EditCategoryPageProps) {
  const category = await getCategory(params.id);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Edit Category</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <CategoryForm category={category} />
      </div>
    </div>
  );
} 