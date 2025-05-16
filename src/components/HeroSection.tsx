
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Calculate SVG animation based on mouse position
  const moveX = mousePosition.x * 20 - 10;
  const moveY = mousePosition.y * 20 - 10;

  return (
    <div className="relative pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5 z-0" />
      
      {/* Animated SVG shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <svg 
          className="absolute top-20 -right-20 md:right-10 w-64 h-64 opacity-20 transition-transform duration-300 ease-out"
          style={{ transform: `translate(${moveX * -1}px, ${moveY * -1}px)` }}
          viewBox="0 0 200 200" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            fill="currentColor" 
            d="M47.7,-51.1C62.9,-33.9,77.2,-16.9,78.1,1.1C79.1,19,66.7,38.1,51.5,48.9C36.3,59.8,18.1,62.4,-0.4,62.8C-18.9,63.2,-37.8,61.5,-50.9,50.7C-64,39.9,-71.3,19.9,-72.1,-0.7C-72.8,-21.4,-67.1,-42.8,-53.5,-60C-39.9,-77.2,-19.9,-90.3,-1.5,-88.7C17,-87.1,33.9,-70.7,47.7,-51.1Z" 
            transform="translate(100 100)" 
          />
        </svg>
        
        <svg 
          className="absolute bottom-10 -left-20 md:left-10 w-72 h-72 opacity-10 transition-transform duration-300 ease-out"
          style={{ transform: `translate(${moveX}px, ${moveY}px)` }}
          viewBox="0 0 200 200" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            fill="currentColor" 
            d="M48.2,-57.1C61.8,-45.2,71.8,-28.5,76.1,-9.8C80.3,8.9,78.9,29.5,68.9,44.1C58.8,58.7,40.1,67.2,20.5,73.2C0.9,79.2,-19.6,82.7,-35.7,75.4C-51.8,68.1,-63.5,50,-69.7,30.7C-75.9,11.4,-76.5,-9.1,-69.8,-25.6C-63.1,-42.1,-49.1,-54.6,-34.1,-66.2C-19.1,-77.7,-3.1,-88.3,11.5,-85.4C26.1,-82.5,52.1,-67.1,48.2,-57.1Z" 
            transform="translate(100 100)" 
          />
        </svg>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-32 md:pb-40">
        <div 
          className={`max-w-3xl mx-auto text-center transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            <span className="block">Unlock the Value of Your</span>
            <span className="gradient-text">Unused Software Licenses</span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Turn your dormant software assets into immediate revenue with our secure,
            hassle-free license resale platform.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-lg font-medium rounded-lg hover:bg-primary/90 transition-colors hover-scale group"
            >
              Sell Your Licenses
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 bg-muted text-foreground px-6 py-3 text-lg font-medium rounded-lg hover:bg-muted/80 transition-colors hover:shadow-md"
            >
              Learn How It Works
            </a>
          </div>
        </div>
      </div>

      {/* Abstract shapes */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </div>
  );
}
