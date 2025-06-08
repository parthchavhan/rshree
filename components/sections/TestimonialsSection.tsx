'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    name: "Yashodhara Enz",
    role: "Bride",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    stars: 5,
    text: "Out of all the gold stores in Udaipur - this is the one to go to. They are so kind, helpful and give a fair price for beautiful pieces. Glad to have found Radha Shree"
  },
  {
    id: 2,
    name: "Rajesh Soni",
    role: "Loyal Customer",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    stars: 5,
    text: "I've been a customer for over 10 years, and the quality of their jewelry is consistently exceptional. Their custom design service helped me create the perfect anniversary gift for my wife."
  },
  {
    id: 3,
    name: "Manav Jain",
    role: "Collector",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    stars: 5,
    text: "The vintage-inspired necklace I purchased is absolutely stunning. The craftsmanship is remarkable, and it's become my most treasured piece.Rshree truly creates heirloom-worthy jewelry."
  },
  {
    id: 4,
    name: "Rafiq",
    role: "First-time Buyer",
    image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    stars: 4,
    text: "As someone who knew little about jewelry, the staff atRshree was incredibly helpful and patient. They guided me through the entire process, and I ended up with a beautiful piece that perfectly suits my style."
  }
];

export const TestimonialsSection = () => {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <section className="section-padding bg-charcoal text-white">
      <div className="container-custom">
        <SectionTitle 
          subtitle="Customer Stories" 
          title="What Our Clients Say" 
          className="text-white"
        />
        
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -left-4 md:-left-8 -translate-y-1/2 z-10">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-10 h-10 rounded-full bg-gold text-white flex items-center justify-center hover:bg-gold-dark transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
          
          <div className="absolute top-1/2 -right-4 md:-right-8 -translate-y-1/2 z-10">
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-10 h-10 rounded-full bg-gold text-white flex items-center justify-center hover:bg-gold-dark transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          {/* Testimonials Slider */}
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonials-swiper !pb-14"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white bg-opacity-5 backdrop-blur-sm p-8 rounded-sm h-full flex flex-col"
                >
                  {/* Stars */}
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < testimonial.stars ? 'text-gold' : 'text-gray-400'}`} 
                        fill={i < testimonial.stars ? 'currentColor' : 'none'}
                      />
                    ))}
                  </div>
                  
                  {/* Testimonial Text */}
                  <p className="text-gray-300 italic mb-6 flex-grow">{testimonial.text}</p>
                  
                  {/* Customer Info */}
                  <div className="flex items-center">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif text-white">{testimonial.name}</h4>
                      <p className="text-gold text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};