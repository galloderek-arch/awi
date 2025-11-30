import { motion } from "framer-motion";
import { Leaf, Zap, Egg, Grape, GraduationCap } from "lucide-react";
import agroforestryImage from "@/assets/agroforestry.jpg";
import nurseryImage from "@/assets/nursery.jpg";

const programs = [
  {
    icon: Leaf,
    title: "Nurseries & Agroforestry",
    stats: ["200,000+ seedlings", "60+ species", "9+ hectares regenerated"],
    description: "Including 'forgotten' Amazonian palms, replacing slash-and-burn with regenerative systems"
  },
  {
    icon: Zap,
    title: "Circular Socio-Bioeconomy",
    stats: ["Bio-feed production", "Biogas & electricity", "Bio-fertilizers"],
    description: "Palm seed cakes for aquaculture, biodigesters, black soldier fly larvae integration"
  },
  {
    icon: Egg,
    title: "Sustainable Protein",
    stats: ["Free-range chickens", "Floating fish tanks", "Ethical eggs"],
    description: "Forest-based feed systems providing income for riverside women"
  },
  {
    icon: Grape,
    title: "Value-Added Products",
    stats: ["Amazonian cocoa", "Cubiu products", "Jams & condiments"],
    description: "Women-led processing entrepreneurship creating artisanal superfoods"
  },
  {
    icon: GraduationCap,
    title: "Education & Training",
    stats: ["1,200+ trained since 2017", "University partnerships", "Community building"],
    description: "'Learning by doing' approach with technical institutes and local communities"
  }
];

export const Programs = () => {
  return (
    <section id="programs" className="py-32 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Flowing River Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="river-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(200, 75%, 50%)" />
              <stop offset="50%" stopColor="hsl(165, 70%, 40%)" />
              <stop offset="100%" stopColor="hsl(145, 65%, 45%)" />
            </linearGradient>
          </defs>
          <path d="M0,100 Q250,50 500,100 T1000,100 T1500,100 T2000,100 V400 H0 Z" 
                fill="url(#river-gradient)" className="river-flow" opacity="0.3" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            What We <span className="text-gradient-river">Flow</span>
          </h2>
          <div className="w-32 h-1 mx-auto mb-6 rounded-full" style={{ background: 'var(--gradient-rainbow)' }} />
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our programs integrate ecological regeneration with community empowerment and sustainable livelihoods
          </p>
        </motion.div>

        {/* Full-Bleed Image Gallery - Asymmetrical */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-20 -mx-4 md:mx-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 rounded-[3rem] overflow-hidden shadow-medium group relative"
          >
            <div className="relative overflow-hidden h-[400px]">
              <motion.img 
                src={agroforestryImage} 
                alt="Agroforestry systems with community members" 
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 rounded-[3rem] overflow-hidden shadow-medium group relative"
          >
            <div className="relative overflow-hidden h-[400px]">
              <motion.img 
                src={nurseryImage} 
                alt="Native seedling nursery" 
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/40 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Programs - Flowing Layout */}
        <div className="space-y-16">
          {programs.map((program, index) => {
            const Icon = program.icon;
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`flex flex-col md:flex-row items-center gap-8 ${!isEven ? 'md:flex-row-reverse' : ''}`}
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.4 }}
                  className="w-full md:w-1/3"
                >
                  <div className="hexagon w-48 h-48 mx-auto flex items-center justify-center"
                       style={{ 
                         background: `linear-gradient(135deg, hsl(${index * 50}, 70%, 50%), hsl(${index * 50 + 60}, 65%, 55%))`,
                         opacity: 0.15
                       }}>
                    <Icon className="w-20 h-20" style={{ color: `hsl(${index * 50}, 70%, 40%)` }} />
                  </div>
                </motion.div>
                
                <div className="w-full md:w-2/3 flowing-content p-8 md:p-10 rounded-[2.5rem]">
                  <h3 className="text-3xl font-bold mb-4 tracking-tight">{program.title}</h3>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    {program.stats.map((stat, i) => (
                      <motion.span 
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * i }}
                        className="px-4 py-2 rounded-full text-sm font-medium"
                        style={{ 
                          background: `hsl(${i * 30 + index * 50}, 65%, 95%)`,
                          color: `hsl(${i * 30 + index * 50}, 70%, 40%)`
                        }}
                      >
                        {stat}
                      </motion.span>
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed text-lg">{program.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
