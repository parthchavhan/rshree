'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ChevronRight } from 'lucide-react';

const collections = [
  {
    id: 1,
    title: "Diamond Rings",
    image: "/1.png",
    link: "#"
  },
  {
    id: 2,
    title: "Luxury Necklaces",
    image: "/2.png",
    link: "#"
  },
  {
    id: 3,
    title: "Elegant Earrings",
    image: "/8.png",
    link: "#"
  },
  {
    id: 4,
    title: "Bridal Sets",
    image: "/4.png",
    link: "#"
  }
];

export const CollectionsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  
  return (
    <section ref={sectionRef} className="section-padding">
      <motion.div style={{ opacity, scale }} className="container-custom">
        <SectionTitle 
          subtitle="Curated Selection" 
          title="Our Exquisite Collections" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden"
            >
              <div className="aspect-[3/4] relative">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60" />
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h3 className="font-serif text-2xl mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {collection.title}
                </h3>
                
                <a
                  href={collection.link}
                  className="inline-flex items-center text-gold transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <span className="border-b border-gold">View Collection</span>
                  <ChevronRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};