'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Award, Gem, Clock, Shield } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: <Gem className="w-6 h-6 text-brugandy" />,
    title: "Premium Quality",
    description: "Only the finest materials and gemstones are used in our jewelry pieces."
  },
  {
    id: 2,
    icon: <Award className="w-6 h-6 text-brugandy" />,
    title: "Expert Craftsmanship",
    description: "Each piece is meticulously crafted by our skilled artisans with decades of experience."
  },
  {
    id: 3,
    icon: <Clock className="w-6 h-6 text-brugandy" />,
    title: "Timeless Designs",
    description: "Our designs transcend trends, offering elegance that lasts a lifetime."
  },
  {
    id: 4,
    icon: <Shield className="w-6 h-6 text-brugandy" />,
    title: "Certified Authenticity",
    description: "Every gemstone and diamond comes with certification of authenticity and quality."
  }
];

export const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.1, 0.3], [50, 0]);
  
  return (
    <section ref={sectionRef} className="section-padding overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div 
            style={{ scale: imageScale }}
            className="relative"
          >
            <div className="aspect-[4/5] relative z-10">
              <Image
                src="/1.png"
                alt="Jewelry craftsman at work"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-sm"
              />
            </div>
            <div className="absolute top-8 -right-8 w-32 h-32 bg-gold rounded-sm -z-10" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-burgundy rounded-sm -z-10" />
          </motion.div>
          
          {/* Content Side */}
          <motion.div style={{ opacity: textOpacity, y: textY }}>
            <span className="text-brugandy uppercase tracking-wider font-medium">Our Heritage</span>
            <h2 className="font-serif text-4xl mb-6 mt-2">Crafting Elegance Since 1952</h2>
            <p className="text-gray-700 mb-8">
              For over seven decades,Rshree has been synonymous with unparalleled craftsmanship and 
              timeless elegance. What began as a small family workshop has evolved into a renowned name in 
              fine jewelry, while preserving the artisanal techniques and commitment to quality that defined 
              our humble beginnings.
            </p>
            <p className="text-gray-700 mb-8">
              Each piece in our collection tells a story of heritage, passion, and meticulous attention to detail. 
              Our master craftsmen blend traditional techniques with innovative design to create jewelry that 
              transcends generations.
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              {features.map((feature) => (
                <div key={feature.id} className="flex items-start">
                  <div className="mr-4 mt-1">{feature.icon}</div>
                  <div>
                    <h4 className="font-serif text-lg mb-2">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};