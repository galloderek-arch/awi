import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, Users, MapPin } from "lucide-react";

const challenges = [
  {
    icon: AlertTriangle,
    title: "Forest Loss",
    description: "20% of Brazil's Amazon forest has been destroyed, threatening biodiversity and climate stability"
  },
  {
    icon: TrendingDown,
    title: "Extreme Poverty",
    description: "Limited income opportunities and slash-and-burn agriculture perpetuate cycles of poverty"
  },
  {
    icon: Users,
    title: "Social Vulnerability",
    description: "Low access to healthcare, education, and economic opportunities, especially for women"
  },
  {
    icon: MapPin,
    title: "Breves' Story",
    description: "Former timber capital now facing unemployment and poverty after resource depletion"
  }
];

export const Challenge = () => {
  return (
    <section id="challenge" className="py-32 bg-background relative overflow-hidden">
      {/* Decorative Organic Shape */}
      <div className="absolute -left-48 top-1/4 w-96 h-96 bg-accent/5 organic-blob-2 blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
            The Challenge Facing <br/><span className="text-primary">Marajó Island</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full" />
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            The Amazon and its communities face interconnected environmental, economic, and social crises that require systemic solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15, 
                  ease: [0.22, 1, 0.36, 1] 
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="card-organic p-10 group cursor-pointer backdrop-blur-sm border border-border/50"
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl flex items-center justify-center mb-6 group-hover:from-accent/30 group-hover:to-accent/10 transition-all duration-500"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.7 }}
                >
                  <Icon className="w-8 h-8 text-accent" />
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4 tracking-tight">{challenge.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{challenge.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
