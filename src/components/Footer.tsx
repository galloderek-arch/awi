export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Patú Anú</h3>
            <p className="text-primary-foreground/80">
              A Laboratory of the Amazon Socio-Bioeconomy in Practice
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#challenge" className="hover:text-white transition-colors">The Challenge</a></li>
              <li><a href="#solution" className="hover:text-white transition-colors">Our Solution</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Programs</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Phone: +55-11-94656-1212</li>
              <li>
                <a 
                  href="https://www.awisuperfoods.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  www.awisuperfoods.com
                </a>
              </li>
              <li>Breves, Marajó Island, Brazil</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Patú Anú Eco-Farm School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
