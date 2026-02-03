import { motion } from 'framer-motion';
import { CreditCard, Calendar, CheckCircle2, Clock, AlertCircle, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const currentSubscription = {
  plan: 'Plus',
  price: 'R$ 149,90',
  status: 'active',
  nextBilling: '15 de Fevereiro, 2026',
  startDate: '15 de Janeiro, 2026',
};

const paymentHistory = [
  {
    id: '1',
    date: '15 Jan 2026',
    amount: 'R$ 149,90',
    status: 'completed',
    method: '**** 4242',
    invoice: '#INV-2026001',
  },
  {
    id: '2',
    date: '15 Dez 2025',
    amount: 'R$ 149,90',
    status: 'completed',
    method: '**** 4242',
    invoice: '#INV-2025012',
  },
  {
    id: '3',
    date: '15 Nov 2025',
    amount: 'R$ 149,90',
    status: 'completed',
    method: '**** 4242',
    invoice: '#INV-2025011',
  },
  {
    id: '4',
    date: '15 Out 2025',
    amount: 'R$ 79,90',
    status: 'completed',
    method: '**** 4242',
    invoice: '#INV-2025010',
  },
];

const PaymentsTab = () => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return (
          <Badge className="bg-green-500/20 text-green-400 hover:bg-green-500/30">
            <CheckCircle2 className="h-3 w-3 mr-1" />
            Pago
          </Badge>
        );
      case 'pending':
        return (
          <Badge className="bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30">
            <Clock className="h-3 w-3 mr-1" />
            Pendente
          </Badge>
        );
      case 'failed':
        return (
          <Badge className="bg-red-500/20 text-red-400 hover:bg-red-500/30">
            <AlertCircle className="h-3 w-3 mr-1" />
            Falhou
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold mb-2 flex items-center gap-2">
          <CreditCard className="h-7 w-7 text-primary" />
          Pagamentos
        </h1>
        <p className="text-muted-foreground">
          Gerencie sua assinatura e histórico de pagamentos.
        </p>
      </div>

      {/* Current Subscription */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card className="glass-card-highlight border-primary/50">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Assinatura Atual</span>
              <Badge className="bg-primary/20 text-primary">Ativo</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold text-gradient-teal">
                  Plano {currentSubscription.plan}
                </h3>
                <p className="text-muted-foreground">
                  {currentSubscription.price} / mês
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" className="border-white/20">
                  Alterar Plano
                </Button>
                <Button variant="outline" className="border-destructive/50 text-destructive hover:bg-destructive/10">
                  Cancelar Assinatura
                </Button>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/10">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Próxima Cobrança</p>
                  <p className="font-medium">{currentSubscription.nextBilling}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/10">
                  <CreditCard className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Método de Pagamento</p>
                  <p className="font-medium">Cartão terminando em 4242</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Payment History */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle>Histórico de Pagamentos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {paymentHistory.map((payment, index) => (
                <motion.div
                  key={payment.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white/5 rounded-lg gap-3"
                >
                  <div className="flex items-center gap-4">
                    <div className="hidden sm:flex p-2 rounded-lg bg-white/10">
                      <CreditCard className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">{payment.invoice}</p>
                      <p className="text-sm text-muted-foreground">
                        {payment.date} • Cartão {payment.method}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-4">
                    <div className="text-right">
                      <p className="font-semibold text-primary">{payment.amount}</p>
                      {getStatusBadge(payment.status)}
                    </div>
                    <Button size="icon" variant="ghost" className="h-8 w-8">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Billing Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="glass-card border-white/10">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-semibold mb-1">Precisa de ajuda com cobranças?</h3>
                <p className="text-sm text-muted-foreground">
                  Entre em contato com nosso suporte para dúvidas sobre pagamentos.
                </p>
              </div>
              <Button variant="teal">
                Falar com Suporte
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default PaymentsTab;
