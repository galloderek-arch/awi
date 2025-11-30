import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build a <span className="text-primary">Regenerative Future</span> Together
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We dream of building a tasty, healthy, and regenerative future with partners who share our vision for the Amazon.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-muted-foreground">+55-11-94656-1212</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Website</h3>
                  <a 
                    href="https://www.awisuperfoods.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    www.awisuperfoods.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground">
                    Manancial Celeste River Community<br />
                    Breves, Marajó Island, Pará, Brazil
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/10">
              <h3 className="font-semibold mb-3">Visit & Stay at Patú Anú</h3>
              <p className="text-muted-foreground mb-4">
                Our eco-lodge accommodates 35 guests (more with hammocks), perfect for retreats, training sessions, corporate meetings, or digital nomad experiences in the heart of the Amazon.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card p-8 rounded-2xl shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-6">Partnership Opportunities</h3>
            
            <div className="space-y-4 mb-8">
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-2">Investment Partners</h4>
                <p className="text-sm text-muted-foreground">Support scaling our regenerative model across the Amazon</p>
              </div>
              
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-2">Corporate Collaboration</h4>
                <p className="text-sm text-muted-foreground">ESG initiatives, sustainable sourcing, and impact programs</p>
              </div>
              
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-2">Academic & Research</h4>
                <p className="text-sm text-muted-foreground">Field studies, data collection, and innovation testing</p>
              </div>
              
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-2">NGO Partnerships</h4>
                <p className="text-sm text-muted-foreground">Joint programs for community development and conservation</p>
              </div>
            </div>

            <Button 
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              asChild
            >
              <a href="https://www.awisuperfoods.com" target="_blank" rel="noopener noreferrer">
                Get in Touch <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
