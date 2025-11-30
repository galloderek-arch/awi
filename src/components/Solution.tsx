import { motion } from "framer-motion";
import { Sprout, Factory, Lightbulb, Users, RefreshCw, Building2 } from "lucide-react";

const systemComponents = [
  {
    icon: Sprout,
    title: "Agroforestry & Seed Collection",
    description: "200,000+ seedlings, 60+ species, replacing slash-and-burn with regenerative systems"
  },
  {
    icon: Factory,
    title: "Bio-Factories",
    description: "Primary processing, bio-feed production, and value-added product development"
  },
  {
    icon: Lightbulb,
    title: "Green Technologies",
    description: "Solar energy, biodigesters for biogas, and bio-fertilizers from organic waste"
  },
  {
    icon: Users,
    title: "Social Technologies",
    description: "Training, education, citizenship programs, and community capacity building"
  },
  {
    icon: RefreshCw,
    title: "Circular Economy",
    description: "Regenerative consumer products and closed-loop resource management"
  },
  {
    icon: Building2,
    title: "Strategic Partnerships",
    description: "Collaboration with government, universities, NGOs, and blended finance"
  }
];

export const Solution = () => {
  return (
    <section id="solution" className="py-40 bg-muted relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute -right-32 top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute left-20 bottom-40 w-96 h-96 bg-secondary/5 organic-blob blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24 max-w-5xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
            Our Solution: The <br/>
            <span className="text-gradient-forest">Circular Regenerative System</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-8 rounded-full" />
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
            An integrated approach that connects forest mapping, sustainable production, community education, and regenerative markets
          </p>
        </motion.div>

        {/* Asymmetrical Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Large featured card - spans 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-2 md:row-span-2"
          >
            <motion.div
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.6 }}
              className="card-organic p-12 h-full backdrop-blur-sm border border-border/50 bg-gradient-to-br from-card to-card/50 relative overflow-hidden"
            >
              <div className="absolute -right-12 -top-12 w-48 h-48 bg-primary/5 organic-blob" />
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                  <Sprout className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-bold mb-6 tracking-tight">{systemComponents[0].title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{systemComponents[0].description}</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Smaller cards */}
          {systemComponents.slice(1, 3).map((component, index) => {
            const Icon = component.icon;
            return (
              <motion.div
                key={component.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="card-organic p-10 backdrop-blur-sm border border-border/50"
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/10 rounded-3xl flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.7 }}
                >
                  <Icon className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4 tracking-tight">{component.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{component.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Row - Equal cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {systemComponents.slice(3).map((component, index) => {
            const Icon = component.icon;
            return (
              <motion.div
                key={component.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="card-organic p-10 backdrop-blur-sm border border-border/50"
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-accent/10 rounded-3xl flex items-center justify-center mb-6"
                  whileHover={{ rotate: -360 }}
                  transition={{ duration: 0.7 }}
                >
                  <Icon className="w-8 h-8 text-secondary" />
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4 tracking-tight">{component.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{component.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Central Floating Circle Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-32 flex justify-center"
        >
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="relative w-80 h-80"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary rounded-full shadow-strong blur-sm opacity-70" />
            <div className="absolute inset-2 bg-background rounded-full flex items-center justify-center shadow-2xl">
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="text-center p-8"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <RefreshCw className="w-16 h-16 text-primary mx-auto mb-4" />
                </motion.div>
                <p className="font-bold text-2xl tracking-tight">Circular System</p>
                <p className="text-sm text-muted-foreground mt-2">Everything Connected</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
