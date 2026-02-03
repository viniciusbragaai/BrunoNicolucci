import { CreditCard, Shield, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CheckoutSimulation = () => {
  return (
    <section className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Checkout <span className="text-gradient-teal">Seguro</span>
            </h2>
            <p className="text-muted-foreground">
              Cobrança recorrente simples e transparente
            </p>
          </div>

          {/* Checkout Card */}
          <div className="glass-card p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left - Order Summary */}
              <div>
                <h3 className="text-xl font-bold mb-4">Resumo do Pedido</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <div>
                      <p className="font-semibold">Plano Plus</p>
                      <p className="text-sm text-muted-foreground">Consultoria mensal</p>
                    </div>
                    <span className="font-bold">R$ 149,90</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <RefreshCw className="h-4 w-4" />
                    <span>Renovação Automática Mensal</span>
                  </div>

                  <div className="bg-secondary/50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>R$ 149,90</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-muted-foreground">Desconto</span>
                      <span className="text-green-500">-R$ 0,00</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-white/10">
                      <span className="font-semibold">Total/mês</span>
                      <span className="text-2xl font-bold text-primary">R$ 149,90</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Payment Form Simulation */}
              <div>
                <h3 className="text-xl font-bold mb-4">Dados do Pagamento</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Número do Cartão</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="0000 0000 0000 0000"
                        className="w-full h-12 px-4 bg-secondary rounded-lg border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        disabled
                      />
                      <CreditCard className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Validade</label>
                      <input
                        type="text"
                        placeholder="MM/AA"
                        className="w-full h-12 px-4 bg-secondary rounded-lg border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        disabled
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">CVV</label>
                      <input
                        type="text"
                        placeholder="000"
                        className="w-full h-12 px-4 bg-secondary rounded-lg border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        disabled
                      />
                    </div>
                  </div>

                  <Button variant="teal" size="lg" className="w-full mt-4">
                    Confirmar Assinatura
                  </Button>

                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Shield className="h-4 w-4" />
                    <span>Pagamento 100% seguro e criptografado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutSimulation;
