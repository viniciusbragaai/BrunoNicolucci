import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import logoRG from '@/assets/logo-rg.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { user, signOut } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <img src={logoRG} alt="Reginaldo Gárcia" className="h-10 w-auto" />
        </a>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex flex-1 max-w-md mx-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar planos, produtos, artigos..."
              className="w-full h-10 pl-10 pr-4 bg-secondary rounded-full border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            />
          </div>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              <Button variant="outline" size="sm" asChild>
                <Link to="/membros">Área do Membro</Link>
              </Button>
              <Button variant="teal" size="sm" onClick={() => signOut()}>
                Sair
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" size="sm" asChild>
                <Link to="/auth">Login</Link>
              </Button>
              <Button variant="teal" size="sm" asChild>
                <Link to="/auth">Cadastrar</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 hover:bg-accent rounded-full transition-colors"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-accent rounded-full transition-colors"
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
              className="w-full h-10 pl-10 pr-4 bg-secondary rounded-full border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden px-4 pb-4 animate-fade-up bg-background border-t border-border">
          <div className="flex flex-col gap-3 pt-3">
            <a href="#planos" className="py-2 px-4 hover:bg-accent rounded-lg transition-colors text-foreground">
              Planos
            </a>
            <a href="#produtos" className="py-2 px-4 hover:bg-accent rounded-lg transition-colors text-foreground">
              Produtos
            </a>
            <a href="#noticias" className="py-2 px-4 hover:bg-accent rounded-lg transition-colors text-foreground">
              Notícias
            </a>
            {user ? (
              <>
                <Link to="/membros" className="py-2 px-4 hover:bg-accent rounded-lg transition-colors text-foreground">
                  Área do Membro
                </Link>
                <div className="pt-2">
                  <Button variant="teal" className="w-full" onClick={() => signOut()}>
                    Sair
                  </Button>
                </div>
              </>
            ) : (
              <div className="flex gap-3 pt-2">
                <Button variant="outline" className="flex-1" asChild>
                  <Link to="/auth">Login</Link>
                </Button>
                <Button variant="teal" className="flex-1" asChild>
                  <Link to="/auth">Cadastrar</Link>
                </Button>
              </div>
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
