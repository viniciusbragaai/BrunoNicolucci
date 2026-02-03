import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-gym.jpg';

interface PlanFeature {
  text: string;
  included: boolean;
}

interface Plan {
  name: string;
  subtitle: string;
  price: string;
  period: string;
  features: PlanFeature[];
  isPopular?: boolean;
}

const plans: Plan[] = [
  {
    name: 'Iniciante',
    subtitle: 'Para quem está começando',
    price: 'R$ 79,90',
    period: '/mês',
    features: [
      { text: 'Treino personalizado básico', included: true },
      { text: 'Suporte via WhatsApp', included: true },
      { text: 'Acompanhamento mensal', included: true },
      { text: 'Acesso à comunidade', included: false },
      { text: 'Consultoria nutricional', included: false },
    ],
  },
  {
    name: 'Plus',
    subtitle: 'O mais escolhido',
    price: 'R$ 149,90',
    period: '/mês',
    isPopular: true,
    features: [
      { text: 'Treino personalizado avançado', included: true },
      { text: 'Suporte via WhatsApp 24h', included: true },
      { text: 'Acompanhamento semanal', included: true },
      { text: 'Acesso à comunidade VIP', included: true },
      { text: 'Consultoria nutricional básica', included: true },
    ],
  },
  {
    name: 'Premium',
    subtitle: 'Experiência completa',
    price: 'R$ 299,90',
    period: '/mês',
    features: [
      { text: 'Treino 100% personalizado', included: true },
      { text: 'Suporte prioritário 24h', included: true },
      { text: 'Acompanhamento diário', included: true },
      { text: 'Acesso VIP + Lives exclusivas', included: true },
      { text: 'Nutricionista dedicado', included: true },
    ],
  },
];

const HeroPlans = () => {
  return (
    <section id="planos" className="relative min-h-screen flex items-center pt-24 pb-16">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Transforme seu <span className="text-gradient-teal">Corpo</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano ideal para você e comece sua jornada com a Team Nicolucci
          </p>
        </div>

        {/* Plans Grid - Desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PlanCard key={plan.name} plan={plan} delay={index * 100} />
          ))}
        </div>

        {/* Plans Carousel - Mobile */}
        <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory">
          <div className="flex gap-4" style={{ width: 'max-content' }}>
            {plans.map((plan, index) => (
              <div key={plan.name} className="w-[300px] snap-center">
                <PlanCard plan={plan} delay={index * 100} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const PlanCard = ({ plan, delay }: { plan: Plan; delay: number }) => {
  return (
    <div
      className={`relative ${plan.isPopular ? 'glass-card-highlight' : 'glass-card'} p-6 hover-lift group`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Popular Badge */}
      {plan.isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-1 bg-primary px-3 py-1 rounded-full text-xs font-semibold">
            <Star className="h-3 w-3 fill-current" />
            Mais Popular
          </div>
        </div>
      )}

      {/* Plan Header */}
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
        <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
      </div>

      {/* Price */}
      <div className="text-center mb-6">
        <span className="text-4xl font-bold">{plan.price}</span>
        <span className="text-muted-foreground">{plan.period}</span>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {plan.features.map((feature) => (
          <li key={feature.text} className="flex items-start gap-2">
            <Check
              className={`h-5 w-5 shrink-0 mt-0.5 ${
                feature.included ? 'text-primary' : 'text-muted-foreground/30'
              }`}
            />
            <span className={feature.included ? '' : 'text-muted-foreground/50 line-through'}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        variant={plan.isPopular ? 'teal' : 'outline'}
        className="w-full"
        size="lg"
      >
        Assinar Agora
      </Button>

      {/* Subtle Glow on Hover */}
      {plan.isPopular && (
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 rounded-2xl animate-glow" />
        </div>
      )}
    </div>
  );
};

export default HeroPlans;
