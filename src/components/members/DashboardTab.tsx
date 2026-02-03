import { motion } from 'framer-motion';
import { TrendingUp, Calendar, Trophy, Flame, Target, Activity } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const stats = [
  { label: 'Dias de Treino', value: '24', icon: Calendar, color: 'text-blue-400' },
  { label: 'Sequência Atual', value: '7 dias', icon: Flame, color: 'text-orange-400' },
  { label: 'Meta Mensal', value: '80%', icon: Target, color: 'text-green-400' },
  { label: 'Calorias Queimadas', value: '12.4k', icon: Activity, color: 'text-red-400' },
];

const recentWorkouts = [
  { name: 'Treino A - Peito/Tríceps', date: 'Hoje', duration: '52 min', completed: true },
  { name: 'Treino B - Costas/Bíceps', date: 'Ontem', duration: '48 min', completed: true },
  { name: 'Treino C - Pernas', date: '2 dias atrás', duration: '55 min', completed: true },
  { name: 'Cardio HIIT', date: '3 dias atrás', duration: '30 min', completed: true },
];

const achievements = [
  { name: 'Primeira Semana', description: 'Complete 7 dias seguidos', progress: 100, icon: '🏆' },
  { name: 'Maratonista', description: 'Treine 30 dias no mês', progress: 80, icon: '🏃' },
  { name: 'Consistência', description: 'Mantenha a dieta por 2 semanas', progress: 60, icon: '🥗' },
];

const DashboardTab = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold mb-2">
          Olá! 👋
        </h1>
        <p className="text-muted-foreground">
          Acompanhe sua evolução e mantenha o foco nos seus objetivos.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="glass-card border-white/10">
              <CardContent className="p-4 lg:p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-lg bg-white/10 ${stat.color}`}>
                    <stat.icon className="h-5 w-5" />
                  </div>
                </div>
                <p className="text-2xl lg:text-3xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Workouts */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Treinos Recentes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentWorkouts.map((workout, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-white/5 rounded-lg"
                >
                  <div>
                    <p className="font-medium">{workout.name}</p>
                    <p className="text-sm text-muted-foreground">{workout.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-primary">{workout.duration}</p>
                    {workout.completed && (
                      <span className="text-xs text-green-400">✓ Completo</span>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-yellow-400" />
                Conquistas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{achievement.icon}</span>
                      <div>
                        <p className="font-medium">{achievement.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                    <span className="text-sm text-primary">{achievement.progress}%</span>
                  </div>
                  <Progress value={achievement.progress} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Weekly Progress Chart Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle>Progresso Semanal</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48 flex items-end justify-around gap-2">
              {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'].map((day, index) => {
                const heights = [60, 80, 45, 90, 70, 100, 30];
                return (
                  <div key={day} className="flex flex-col items-center gap-2 flex-1">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${heights[index]}%` }}
                      transition={{ delay: 0.7 + index * 0.05, duration: 0.5 }}
                      className="w-full max-w-[40px] bg-gradient-to-t from-primary to-teal-glow rounded-t-lg"
                    />
                    <span className="text-xs text-muted-foreground">{day}</span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default DashboardTab;
