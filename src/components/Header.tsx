import { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoBN from '@/assets/logo-bn.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <img src={logoBN} alt="Team Nicolucci" className="h-10 w-auto" />
        </a>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex flex-1 max-w-md mx-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar planos, produtos, artigos..."
              className="w-full h-10 pl-10 pr-4 bg-secondary rounded-full border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" size="sm" className="border-white/20 hover:bg-white/10">
            Login
          </Button>
          <Button variant="teal" size="sm">
            Cadastrar
          </Button>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      {isSearchOpen && (
        <div className="md:hidden px-4 pb-4 animate-fade-up">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar..."
              className="w-full h-10 pl-10 pr-4 bg-secondary rounded-full border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden px-4 pb-4 animate-fade-up">
          <div className="flex flex-col gap-3">
            <a href="#planos" className="py-2 px-4 hover:bg-white/10 rounded-lg transition-colors">
              Planos
            </a>
            <a href="#produtos" className="py-2 px-4 hover:bg-white/10 rounded-lg transition-colors">
              Produtos
            </a>
            <a href="#noticias" className="py-2 px-4 hover:bg-white/10 rounded-lg transition-colors">
              Notícias
            </a>
            <div className="flex gap-3 pt-2">
              <Button variant="outline" className="flex-1 border-white/20 hover:bg-white/10">
                Login
              </Button>
              <Button variant="teal" className="flex-1">
                Cadastrar
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
