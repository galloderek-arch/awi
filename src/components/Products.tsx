import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import productsImage from "@/assets/products.jpg";

const productList = [
  { name: "Amazonian Cocoa", description: "Grown in agroforestry systems" },
  { name: "Cubiu Products", description: "Jellies and juices from Amazonian tomato" },
  { name: "Artisanal Jams", description: "Made from native forest fruits" },
  { name: "Natural Condiments", description: "Palm hearts and traditional recipes" },
  { name: "Ethical Eggs", description: "Free-range from forest-fed chickens" },
];

export const Products = () => {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-6">
            <ShoppingBag className="w-5 h-5" />
            <span className="font-medium">Awi Superfoods</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ethical Indulgence<br />
            <span className="text-gradient-sunset">From Forest to Table</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Regenerative products that support Amazon communities and ecosystems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <img 
              src={productsImage} 
              alt="Awi Superfoods products" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              {productList.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground">{product.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8"
            >
              <Button 
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground w-full sm:w-auto"
                asChild
              >
                <a href="https://www.awisuperfoods.com" target="_blank" rel="noopener noreferrer">
                  Visit Awi Superfoods
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
