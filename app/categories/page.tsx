'use client';

import React from 'react';
import Link from 'next/link';

// Mock categories for now (replace with dynamic fetch if needed)
const categories = [
  {
    id: 'gold-jewellery',
    title: 'Gold Jewellery',
    description: 'Explore timeless gold pieces crafted with elegance.',
    image: '/images/categories/gold.jpg'
  },
  {
    id: 'diamond-jewellery',
    title: 'Diamond Jewellery',
    description: 'Shine bright with our premium diamond collections.',
    image: '/images/categories/diamond.jpg'
  },
  {
    id: 'wedding-collection',
    title: 'Wedding Collection',
    description: 'Celebrate your big day with exclusive wedding sets.',
    image: '/images/categories/wedding.jpg'
  },
  {
    id: 'dailywear',
    title: 'Dailywear',
    description: 'Subtle & elegant pieces for your everyday style.',
    image: '/images/categories/dailywear.jpg'
  }
];

export default function CategoryPage() {
  return (
    <div className="min-h-screen bg-[#fffaf1] text-[#3d3d3d] px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10">Our Categories</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              href={`/category/${cat.id}`}
              key={cat.id}
              className="group bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-1 group-hover:text-[#b88846] transition-colors duration-300">
                  {cat.title}
                </h2>
                <p className="text-sm text-[#666]">{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}