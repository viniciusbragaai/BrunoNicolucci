import { Instagram, Youtube, MessageCircle } from 'lucide-react';
import logoBN from '@/assets/logo-bn.png';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src={logoBN} alt="Team Nicolucci" className="h-12 w-auto mb-4" />
            <p className="text-muted-foreground text-sm">
              Transformando vidas através do fitness e da consultoria personalizada.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#planos" className="hover:text-primary transition-colors">Planos</a></li>
              <li><a href="#produtos" className="hover:text-primary transition-colors">Produtos</a></li>
              <li><a href="#noticias" className="hover:text-primary transition-colors">Notícias</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Área do Aluno</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Política de Reembolso</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-3 bg-secondary rounded-full hover:bg-primary transition-colors group"
              >
                <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="p-3 bg-secondary rounded-full hover:bg-primary transition-colors group"
              >
                <Youtube className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="p-3 bg-secondary rounded-full hover:bg-primary transition-colors group"
              >
                <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Siga-nos para dicas diárias e conteúdo exclusivo!
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Team Nicolucci. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Feito com 💪 para transformar vidas
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
