import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const metrics = [
  { number: "200,000+", label: "Seedlings Produced", color: "from-primary to-primary/70" },
  { number: "60+", label: "Species Cultivated", color: "from-accent to-accent/70" },
  { number: "9+", label: "Hectares Regenerated", color: "from-secondary to-secondary/70" },
  { number: "1,200+", label: "People Trained", color: "from-primary to-accent" },
];

export const Impact = () => {
  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-primary via-primary/90 to-accent text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <TrendingUp className="w-5 h-5" />
            <span className="font-medium">Measurable Impact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Impact Dashboard
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Real results from our integrated approach to Amazon regeneration
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/15 transition-colors"
            >
              <div className={`text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-br ${metric.color} bg-clip-text text-transparent`}>
                {metric.number}
              </div>
              <div className="text-lg font-medium text-white/90">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recognition Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">🏆 World Economic Forum Recognition</h3>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Award winner of the WEF Amazon Bioeconomy Challenge, presented at Davos 2023
          </p>
        </motion.div>
      </div>
    </section>
  );
};
