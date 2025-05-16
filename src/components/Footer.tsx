
import { ThemeToggle } from "./ThemeToggle";

export default function Footer() {
  return (
    <footer className="bg-muted/30 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-bold gradient-text">SoftSell</span>
            <p className="mt-2 text-muted-foreground max-w-md">
              The premier platform for selling unused software licenses securely and profitably.
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} SoftSell. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold mb-3">Platform</h4>
            <ul className="space-y-2">
              <li><a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition">How It Works</a></li>
              <li><a href="#why-choose-us" className="text-muted-foreground hover:text-foreground transition">Why Choose Us</a></li>
              <li><a href="#testimonials" className="text-muted-foreground hover:text-foreground transition">Testimonials</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition">FAQ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition">Guides</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
