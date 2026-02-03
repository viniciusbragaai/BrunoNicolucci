import Header from '@/components/Header';
import HeroPlans from '@/components/HeroPlans';
import ProductsSection from '@/components/ProductsSection';
import NewsSection from '@/components/NewsSection';
import CheckoutSimulation from '@/components/CheckoutSimulation';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroPlans />
        <ProductsSection />
        <NewsSection />
        <CheckoutSimulation />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
