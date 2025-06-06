'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ProductCard } from '@/components/ui/ProductCard';

// Mock product data
const products = [
  {
    id: "1",
    name: "Diamond Engagement Ring",
    price: 1299.99,
    image: "/1.png",
    hoverImage: "/5.png",
    category: "Rings",
    isNew: true,
    collections: ["new-arrivals", "rings", "bridal"]
  },
  {
    id: "2",
    name: "Sapphire Pendant Necklace",
    price: 849.99,
    image: "/2.png",
    hoverImage: "/3.png",
    category: "Necklaces",
    collections: ["necklaces", "birthstones"]
  },
  {
    id: "3",
    name: "Pearl Drop Earrings",
    price: 599.99,
    image: "/3.png",
    hoverImage: "/8.png",
    category: "Earrings",
    isSale: true,
    discount: 15,
    collections: ["earrings", "sale"]
  },
  {
    id: "4",
    name: "Gold Tennis Bracelet",
    price: 1199.99,
    image: "/4.png",
    hoverImage: "/1.png",
    category: "Bracelets",
    isNew: true,
    collections: ["new-arrivals", "bracelets", "gold"]
  },
  {
    id: "5",
    name: "Diamond Stud Earrings",
    price: 499.99,
    image: "/5.png",
    hoverImage: "/2.png",
    category: "Earrings",
    collections: ["earrings", "diamonds"]
  },
  {
    id: "6",
    name: "Emerald Halo Ring",
    price: 1899.99,
    image: "/6.png",
    hoverImage: "/6.png",
    category: "Rings",
    collections: ["rings", "gemstones"]
  },
  {
    id: "7",
    name: "Rose Gold Chain",
    price: 399.99,
    image: "/7.png",
    hoverImage: "/7.png",
    category: "Necklaces",
    isSale: true,
    discount: 20,
    collections: ["necklaces", "sale", "gold"]
  },
  {
    id: "8",
    name: "Diamond Wedding Band",
    price: 1499.99,
    image: "/8.png",
    hoverImage: "/4.png",
    category: "Rings",
    isNew: true,
    collections: ["new-arrivals", "rings", "bridal"]
  }
];

// Filter categories
const filterCategories = [
  { id: "all", label: "All Jewelry" },
  { id: "new-arrivals", label: "New Arrivals" },
  { id: "rings", label: "Rings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "earrings", label: "Earrings" },
  { id: "bracelets", label: "Bracelets" },
  { id: "bridal", label: "Bridal" },
  { id: "sale", label: "Sale" }
];

export const FeaturedProducts = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const filteredProducts = activeFilter === "all" 
    ? products 
    : products.filter(product => product.collections?.includes(activeFilter));
  
  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        <SectionTitle 
          subtitle="Handcrafted Elegance" 
          title="Our Featured Collection" 
        />
        
        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filterCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-sm transition-colors duration-300 ${
                activeFilter === category.id 
                  ? 'bg-gold text-white' 
                  : 'bg-white text-charcoal hover:bg-gold hover:text-white'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              hoverImage={product.hoverImage}
              category={product.category}
              isNew={product.isNew}
              isSale={product.isSale}
              discount={product.discount}
            />
          ))}
        </div>
        
        {/* View All Button */}
        <div className="mt-12 text-center">
          <motion.a 
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="btn-outline inline-block"
          >
            View All Jewelry
          </motion.a>
        </div>
      </div>
    </section>
  );
};