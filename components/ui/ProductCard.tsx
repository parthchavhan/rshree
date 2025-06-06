'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  hoverImage?: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
  discount?: number;
}

export const ProductCard = ({
  id,
  name,
  price,
  image,
  hoverImage,
  category,
  isNew = false,
  isSale = false,
  discount = 0
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Calculate sale price if applicable
  const salePrice = isSale && discount > 0 
    ? price - (price * (discount / 100)) 
    : null;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden mb-4">
        {/* Product Image */}
        <div className="aspect-square relative">
          <Image
            src={isHovered && hoverImage ? hoverImage : image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
        </div>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {isNew && (
            <span className="bg-gold text-white text-xs uppercase tracking-wider py-1 px-2">
              New
            </span>
          )}
          {isSale && (
            <span className="bg-gold text-white text-xs uppercase tracking-wider py-1 px-2">
              Sale
            </span>
          )}
        </div>
        
        {/* over Actions */}
        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gold hover:text-white transition-all duration-300">
              <Heart className="w-5 h-5" />
            </button>
            {/* <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gold hover:text-white transition-all duration-300">
              <ShoppingBag className="w-5 h-5" />
            </button> */}
          </div>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="text-center">
        <p className="text-sm text-gray-500 mb-1">{category}</p>
        <h3 className="font-serif font-medium mb-2">{name}</h3>
        {/* <div className="flex justify-center items-center gap-2">
          {salePrice ? (
            <>
              <span className="text-burgundy font-medium">${salePrice.toFixed(2)}</span>
              <span className="text-gray-400 line-through text-sm">${price.toFixed(2)}</span>
            </>
          ) : (
            <span className="text-burgundy font-medium">${price.toFixed(2)}</span>
          )}
        </div> */}
      </div>
    </motion.div>
  );
};