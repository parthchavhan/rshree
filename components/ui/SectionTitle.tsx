import { motion } from 'framer-motion';

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionTitle = ({ 
  subtitle, 
  title, 
  alignment = 'center',
  className = ''
}: SectionTitleProps) => {
  const getAlignment = () => {
    switch (alignment) {
      case 'left':
        return 'text-left';
      case 'right':
        return 'text-right';
      default:
        return 'text-center';
    }
  };

  return (
    <div className={`mb-12 ${getAlignment()} ${className}`}>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-gold uppercase tracking-wider mb-2"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`font-serif relative pb-4 ${alignment === 'center' ? 'mx-auto after:left-1/2 after:-translate-x-1/2' : ''}`}
      >
        {title}
      </motion.h2>
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: alignment === 'center' ? '60px' : '100px' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className={`h-0.5 bg-gold mt-2 ${alignment === 'center' ? 'mx-auto' : alignment === 'right' ? 'ml-auto' : ''}`}
      />
    </div>
  );
};