
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold gradient-text">SoftSell</span>
          </div>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition">
            How It Works
          </a>
          <a href="#why-choose-us" className="text-sm font-medium hover:text-primary transition">
            Why Choose Us
          </a>
          <a href="#testimonials" className="text-sm font-medium hover:text-primary transition">
            Testimonials
          </a>
          <a 
            href="#contact" 
            className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition"
          >
            Contact Us
          </a>
        </nav>
        <div className="flex items-center md:hidden">
          <ThemeToggle />
        </div>
        <div className="hidden md:flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
