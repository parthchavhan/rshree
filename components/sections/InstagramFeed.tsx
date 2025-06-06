'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';

const instagramPosts = [
  {
    id: 1,
    image: "/1.png",
    likes: 243,
    link: "#"
  },
  {
    id: 2,
    image: "/2.png",
    likes: 512,
    link: "#"
  },
  {
    id: 3,
    image: "/3.png",
    likes: 327,
    link: "#"
  },
  {
    id: 4,
    image: "/4.png",
    likes: 189,
    link: "#"
  },
  {
    id: 5,
    image: "/5.png",
    likes: 456,
    link: "#"
  },
  {
    id: 6,
    image: "/6.png",
    likes: 291,
    link: "#"
  }
];

export const InstagramFeed = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionTitle 
          subtitle="Social Media" 
          title="Follow Us On Instagram" 
        />
        
        <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative overflow-hidden"
            >
              <div className="aspect-square relative">
                <Image
                  src={post.image}
                  alt={`Instagram post ${post.id}`}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                  <Instagram className="text-white w-6 h-6 mb-2" />
                  <span className="text-white text-sm">{post.likes} likes</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-charcoal hover:text-gold transition-colors"
          >
            <Instagram className="w-5 h-5 mr-2" />
            <span>@Rshree</span>
          </a>
        </div>
      </div>
    </section>
  );
};