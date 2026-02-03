import { motion, useInView, Variants } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  once?: boolean;
}

const getDirectionVariants = (direction: string): Variants => {
  const baseHidden = { opacity: 0 };
  const baseVisible = { opacity: 1, x: 0, y: 0 };

  switch (direction) {
    case 'up':
      return {
        hidden: { ...baseHidden, y: 50 },
        visible: baseVisible,
      };
    case 'down':
      return {
        hidden: { ...baseHidden, y: -50 },
        visible: baseVisible,
      };
    case 'left':
      return {
        hidden: { ...baseHidden, x: 50 },
        visible: baseVisible,
      };
    case 'right':
      return {
        hidden: { ...baseHidden, x: -50 },
        visible: baseVisible,
      };
    default:
      return {
        hidden: baseHidden,
        visible: { opacity: 1 },
      };
  }
};

const AnimatedSection = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  once = true,
}: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-100px' });

  const variants = getDirectionVariants(direction);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
