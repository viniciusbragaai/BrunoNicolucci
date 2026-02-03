import { Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';

interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Whey Protein Isolado 900g',
    price: 'R$ 189,90',
    originalPrice: 'R$ 229,90',
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=300&h=300&fit=crop',
    category: 'Suplementos',
  },
  {
    id: 2,
    name: 'Camiseta Dry Fit Team Nicolucci',
    price: 'R$ 89,90',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop',
    category: 'Vestuário',
  },
  {
    id: 3,
    name: 'Creatina Monohidratada 300g',
    price: 'R$ 129,90',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=300&h=300&fit=crop',
    category: 'Suplementos',
  },
  {
    id: 4,
    name: 'Shaker Premium 700ml',
    price: 'R$ 49,90',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=300&h=300&fit=crop',
    category: 'Acessórios',
  },
  {
    id: 5,
    name: 'Luvas de Treino Pro',
    price: 'R$ 79,90',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=300&h=300&fit=crop',
    category: 'Acessórios',
  },
  {
    id: 6,
    name: 'BCAA 2:1:1 - 120 caps',
    price: 'R$ 69,90',
    image: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=300&h=300&fit=crop',
    category: 'Suplementos',
  },
];

const ProductsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <section id="produtos" className="py-20 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Equipamentos e <span className="text-gradient-teal">Suplementos</span> Oficiais
            </h2>
            <p className="text-muted-foreground">
              Produtos selecionados pelo Team Nicolucci
            </p>
          </div>
          
          {/* Navigation Arrows - Desktop */}
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="p-2 rounded-full bg-secondary hover:bg-secondary/80 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="p-2 rounded-full bg-secondary hover:bg-secondary/80 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Products Carousel */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-5" style={{ width: 'max-content' }}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg" className="border-white/20 hover:bg-white/10">
            Ver Todos os Produtos
          </Button>
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="glass-card w-[280px] overflow-hidden hover-lift group snap-start">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className="text-xs font-medium px-2 py-1 bg-primary/80 rounded-full">
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold mb-2 line-clamp-2 h-12">{product.name}</h3>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-primary">{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through ml-2">
                {product.originalPrice}
              </span>
            )}
          </div>
          <Button size="icon" variant="teal" className="rounded-full h-10 w-10">
            <Plus className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
