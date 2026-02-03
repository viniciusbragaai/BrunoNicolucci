import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
}

const articles: NewsArticle[] = [
  {
    id: 1,
    title: '5 Exercícios Essenciais para Hipertrofia',
    excerpt: 'Descubra os movimentos que não podem faltar no seu treino para maximizar os ganhos musculares.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop',
    date: '28 Jan 2026',
    category: 'Treino',
  },
  {
    id: 2,
    title: 'Nutrição Pré-Treino: O Que Comer?',
    excerpt: 'Aprenda a montar refeições que vão potencializar seu desempenho na academia.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop',
    date: '25 Jan 2026',
    category: 'Nutrição',
  },
  {
    id: 3,
    title: 'Live Especial: Tirando Dúvidas ao Vivo',
    excerpt: 'Participe da nossa live exclusiva neste sábado e tenha suas perguntas respondidas pelo Bruno.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop',
    date: '22 Jan 2026',
    category: 'Comunidade',
  },
  {
    id: 4,
    title: 'Suplementação: Mitos e Verdades',
    excerpt: 'Separamos fato de ficção quando o assunto é suplementação esportiva.',
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=600&h=400&fit=crop',
    date: '18 Jan 2026',
    category: 'Suplementos',
  },
];

const NewsSection = () => {
  return (
    <section id="noticias" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Updates do <span className="text-gradient-teal">Team Nicolucci</span>
          </h2>
          <p className="text-muted-foreground">
            Dicas, novidades e conteúdo exclusivo para você
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article, index) => (
            <ArticleCard key={article.id} article={article} featured={index === 0} />
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-10">
          <Button variant="outline" className="border-white/20 hover:bg-white/10 group">
            Ver Todas as Notícias
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

const ArticleCard = ({ article, featured }: { article: NewsArticle; featured?: boolean }) => {
  return (
    <article
      className={`glass-card overflow-hidden hover-lift cursor-pointer group ${
        featured ? 'md:col-span-2 lg:col-span-2 lg:row-span-2' : ''
      }`}
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${featured ? 'aspect-[16/9] lg:aspect-[4/3]' : 'aspect-video'}`}>
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="text-xs font-medium px-2 py-1 bg-primary/80 rounded-full">
            {article.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className={`p-4 ${featured ? 'md:p-6' : ''}`}>
        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
          <Calendar className="h-4 w-4" />
          {article.date}
        </div>
        <h3 className={`font-bold mb-2 group-hover:text-primary transition-colors ${featured ? 'text-xl md:text-2xl' : 'text-lg'}`}>
          {article.title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2">{article.excerpt}</p>
      </div>
    </article>
  );
};

export default NewsSection;
