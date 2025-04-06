
import { useIsMobile } from '@/hooks/use-mobile';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { Users, Briefcase, Award, Clock } from 'lucide-react';

const statistics = [
  {
    id: 1,
    value: 200,
    label: 'Clients Worldwide',
    icon: <Users className="h-8 w-8" />,
    suffix: '+',
  },
  {
    id: 2,
    value: 500,
    label: 'Projects Completed',
    icon: <Briefcase className="h-8 w-8" />,
    suffix: '+',
  },
  {
    id: 3,
    value: 50,
    label: 'Awards Won',
    icon: <Award className="h-8 w-8" />,
    suffix: '+',
  },
  {
    id: 4,
    value: 10,
    label: 'Years Experience',
    icon: <Clock className="h-8 w-8" />,
    suffix: '+',
  },
];

const StatsSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statistics.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white/10 rounded-full">
                  {stat.icon}
                </div>
              </div>
              <AnimatedCounter 
                end={stat.value} 
                duration={isMobile ? 1000 : 2000} 
                suffix={stat.suffix} 
              />
              <p className="mt-2 text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
