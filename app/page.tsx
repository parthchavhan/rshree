import { HeroSection } from '@/components/sections/HeroSection';
import { CollectionsSection } from '@/components/sections/CollectionsSection';
import { FeaturedProducts } from '@/components/sections/FeaturedProducts';
import { AboutSection } from '@/components/sections/AboutSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { InstagramFeed } from '@/components/sections/InstagramFeed';
import { NewsletterSection } from '@/components/sections/NewsletterSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <CollectionsSection />
      <FeaturedProducts />
      <AboutSection />
      {/* <TestimonialsSection /> */}
      <InstagramFeed />
      <NewsletterSection />
    </>
  );
}