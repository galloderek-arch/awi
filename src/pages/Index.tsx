import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Challenge } from "@/components/Challenge";
import { Solution } from "@/components/Solution";
import { Programs } from "@/components/Programs";
import { Impact } from "@/components/Impact";
import { Products } from "@/components/Products";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Challenge />
      <Solution />
      <Programs />
      <Impact />
      <Products />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
