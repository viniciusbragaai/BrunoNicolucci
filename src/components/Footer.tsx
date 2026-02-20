import { Instagram, Youtube, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logoRG from '@/assets/logo-rg.png';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div className="md:col-span-1" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <img src={logoRG} alt="Reginaldo Gárcia" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-background/70 text-sm">Transformando vidas através do fitness e da consultoria personalizada.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#planos" className="hover:text-background transition-colors">Planos</a></li>
              <li><a href="#produtos" className="hover:text-background transition-colors">Produtos</a></li>
              <li><a href="#noticias" className="hover:text-background transition-colors">Notícias</a></li>
              <li><Link to="/membros" className="hover:text-background transition-colors">Área do Aluno</Link></li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Política de Reembolso</a></li>
              <li><a href="#" className="hover:text-background transition-colors">FAQ</a></li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-3">
              <motion.a href="#" className="p-3 bg-background/10 rounded-full hover:bg-background/20 transition-colors" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a href="#" className="p-3 bg-background/10 rounded-full hover:bg-background/20 transition-colors" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Youtube className="h-5 w-5" />
              </motion.a>
              <motion.a href="#" className="p-3 bg-background/10 rounded-full hover:bg-background/20 transition-colors" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <MessageCircle className="h-5 w-5" />
              </motion.a>
            </div>
            <p className="text-sm text-background/70 mt-4">Siga-nos para dicas diárias e conteúdo exclusivo!</p>
          </motion.div>
        </div>

        <motion.div className="mt-12 pt-6 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
          <p className="text-sm text-background/70">© 2026 Reginaldo Gárcia. Todos os direitos reservados.</p>
          <p className="text-sm text-background/70">Feito com 💪 para transformar vidas</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
