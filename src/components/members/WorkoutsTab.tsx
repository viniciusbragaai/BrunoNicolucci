import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, FileText, Clock, ChevronRight, Dumbbell } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface WorkoutContent {
  id: string;
  title: string;
  description: string;
  type: 'video' | 'pdf' | 'article';
  duration?: string;
  thumbnail?: string;
}

interface WorkoutPlan {
  id: string;
  name: string;
  description: string;
  workouts: WorkoutContent[];
}

const workoutPlans: WorkoutPlan[] = [
  {
    id: '1',
    name: 'Treino A - Peito e Tríceps',
    description: 'Foco em hipertrofia para peito e tríceps',
    workouts: [
      {
        id: '1-1',
        title: 'Aquecimento Articular',
        description: 'Prepare seu corpo para o treino',
        type: 'video',
        duration: '5 min',
      },
      {
        id: '1-2',
        title: 'Supino Reto com Barra',
        description: '4 séries de 8-12 repetições',
        type: 'video',
        duration: '8 min',
      },
      {
        id: '1-3',
        title: 'Crucifixo com Halteres',
        description: '3 séries de 12-15 repetições',
        type: 'video',
        duration: '6 min',
      },
      {
        id: '1-4',
        title: 'Ficha de Treino PDF',
        description: 'Baixe sua ficha completa',
        type: 'pdf',
      },
    ],
  },
  {
    id: '2',
    name: 'Treino B - Costas e Bíceps',
    description: 'Desenvolvimento de costas e bíceps',
    workouts: [
      {
        id: '2-1',
        title: 'Barra Fixa',
        description: '4 séries até a falha',
        type: 'video',
        duration: '10 min',
      },
      {
        id: '2-2',
        title: 'Remada Curvada',
        description: '4 séries de 10-12 repetições',
        type: 'video',
        duration: '7 min',
      },
      {
        id: '2-3',
        title: 'Rosca Direta',
        description: '3 séries de 12 repetições',
        type: 'video',
        duration: '5 min',
      },
    ],
  },
  {
    id: '3',
    name: 'Treino C - Pernas Completo',
    description: 'Treino intenso para quadríceps, posteriores e glúteos',
    workouts: [
      {
        id: '3-1',
        title: 'Agachamento Livre',
        description: '5 séries de 8 repetições',
        type: 'video',
        duration: '12 min',
      },
      {
        id: '3-2',
        title: 'Leg Press 45°',
        description: '4 séries de 12-15 repetições',
        type: 'video',
        duration: '8 min',
      },
      {
        id: '3-3',
        title: 'Guia de Alimentação Pós-Treino',
        description: 'Maximize seus resultados',
        type: 'article',
      },
    ],
  },
];

const WorkoutsTab = () => {
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Play className="h-4 w-4" />;
      case 'pdf':
        return <FileText className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'video':
        return <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">Vídeo</Badge>;
      case 'pdf':
        return <Badge variant="secondary" className="bg-red-500/20 text-red-400">PDF</Badge>;
      case 'article':
        return <Badge variant="secondary" className="bg-green-500/20 text-green-400">Artigo</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold mb-2 flex items-center gap-2">
          <Dumbbell className="h-7 w-7 text-primary" />
          Meus Treinos
        </h1>
        <p className="text-muted-foreground">
          Acesse seus treinos personalizados e materiais de apoio.
        </p>
      </div>

      {/* Workout Plans */}
      <div className="space-y-4">
        {workoutPlans.map((plan, index) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="glass-card border-white/10 overflow-hidden">
              <button
                onClick={() => setExpandedPlan(expandedPlan === plan.id ? null : plan.id)}
                className="w-full text-left"
              >
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div>
                    <CardTitle className="text-lg">{plan.name}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedPlan === plan.id ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </motion.div>
                </CardHeader>
              </button>

              <AnimatePresence>
                {expandedPlan === plan.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardContent className="pt-0 space-y-3">
                      {plan.workouts.map((workout) => (
                        <motion.div
                          key={workout.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer group"
                        >
                          <div className="flex items-center gap-4">
                            <div className="p-2 rounded-lg bg-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                              {getTypeIcon(workout.type)}
                            </div>
                            <div>
                              <p className="font-medium">{workout.title}</p>
                              <p className="text-sm text-muted-foreground">{workout.description}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            {workout.duration && (
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Clock className="h-4 w-4" />
                                {workout.duration}
                              </div>
                            )}
                            {getTypeBadge(workout.type)}
                          </div>
                        </motion.div>
                      ))}
                    </CardContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <Card className="glass-card border-white/10">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="teal" className="flex-1">
              <Play className="h-4 w-4 mr-2" />
              Iniciar Próximo Treino
            </Button>
            <Button variant="outline" className="flex-1 border-white/20">
              <FileText className="h-4 w-4 mr-2" />
              Baixar Todas as Fichas
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WorkoutsTab;
