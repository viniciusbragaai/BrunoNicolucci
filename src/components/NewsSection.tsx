import { Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';

interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
}

const articles: NewsArticle[] = [
  { id: 1, title: '5 Exercícios Essenciais para Hipertrofia', excerpt: 'Descubra os movimentos que não podem faltar no seu treino para maximizar os ganhos musculares.', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop', date: '28 Jan 2026', category: 'Treino' },
  { id: 2, title: 'Nutrição Pré-Treino: O Que Comer?', excerpt: 'Aprenda a montar refeições que vão potencializar seu desempenho na academia.', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop', date: '25 Jan 2026', category: 'Nutrição' },
  { id: 3, title: 'Live Especial: Tirando Dúvidas ao Vivo', excerpt: 'Participe da nossa live exclusiva neste sábado e tenha suas perguntas respondidas pelo Reginaldo.', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop', date: '22 Jan 2026', category: 'Comunidade' },
  { id: 4, title: 'Suplementação: Mitos e Verdades', excerpt: 'Separamos fato de ficção quando o assunto é suplementação esportiva.', image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=600&h=400&fit=crop', date: '18 Jan 2026', category: 'Suplementos' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const NewsSection = () => {
  return (
    <section id="noticias" className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection direction="up" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
            Updates de <span className="text-gradient-blue">Reginaldo Gárcia</span>
          </h2>
          <p className="text-muted-foreground">Dicas, novidades e conteúdo exclusivo para você</p>
        </AnimatedSection>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
          {articles.map((article, index) => (
            <ArticleCard key={article.id} article={article} featured={index === 0} />
          ))}
        </motion.div>

        <AnimatedSection direction="up" delay={0.3} className="text-center mt-10">
          <Button variant="outline" className="group">
            Ver Todas as Notícias
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

const ArticleCard = ({ article, featured }: { article: NewsArticle; featured?: boolean }) => {
  return (
    <motion.article
      variants={cardVariants}
      className={`clean-card overflow-hidden cursor-pointer group bg-background ${featured ? 'md:col-span-2 lg:col-span-2 lg:row-span-2' : ''}`}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <div className={`relative overflow-hidden ${featured ? 'aspect-[16/9] lg:aspect-[4/3]' : 'aspect-video'}`}>
        <motion.img src={article.image} alt={article.title} className="w-full h-full object-cover" whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} />
        <div className="absolute top-3 left-3">
          <span className="text-xs font-medium px-2 py-1 bg-primary text-primary-foreground rounded-full">{article.category}</span>
        </div>
      </div>
      <div className={`p-4 ${featured ? 'md:p-6' : ''}`}>
        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
          <Calendar className="h-4 w-4" />
          {article.date}
        </div>
        <h3 className={`font-bold mb-2 group-hover:text-primary transition-colors text-foreground ${featured ? 'text-xl md:text-2xl' : 'text-lg'}`}>{article.title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2">{article.excerpt}</p>
      </div>
    </motion.article>
  );
};

export default NewsSection;
