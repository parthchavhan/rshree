'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const heroSlides = [
  {
    id: 1,
    title: "Timeless Elegance",
    subtitle: "Exquisite Diamond Collection",
    description: "Discover our handcrafted diamond jewelry, where every piece tells a story of elegance and craftsmanship.",
    image: "/b1.png",
    cta: "Explore Collection"
  },
  {
    id: 2,
    title: "Bridal Perfection",
    subtitle: "Wedding Collection 2025",
    description: "Begin your forever with our stunning collection of engagement rings and wedding bands.",
    image: "https://images.pexels.com/photos/10982876/pexels-photo-10982876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    cta: "View Bridal Sets"
  },
  {
    id: 3,
    title: "Heritage & Artistry",
    subtitle: "Signature Gold Collection",
    description: "Meticulous craftsmanship meets timeless design in our exclusive gold jewelry collection.",
    image: "/b2.png",
    cta: "Shop Gold Jewelry"
  }
];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60" />
          </div>
          
          {/* Content */}
          <div className="relative z-20 h-full flex items-center">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={index === currentSlide ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="max-w-xl text-white"
              >
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={index === currentSlide ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6 }}
                  className="uppercase tracking-wider text-gold mb-2 block"
                >
                  {slide.subtitle}
                </motion.span>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={index === currentSlide ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="font-serif mb-4 leading-tight"
                >
                  {slide.title}
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={index === currentSlide ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mb-8 text-lg"
                >
                  {slide.description}
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={index === currentSlide ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <a 
                    href="#" 
                    className="btn-primary flex items-center group"
                  >
                    <span>{slide.cta}</span>
                    <ChevronRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Slide Controls */}
      <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center">
        <div className="flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? 'bg-gold' : 'bg-white bg-opacity-50'
              } transition-all duration-300 hover:bg-gold`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};