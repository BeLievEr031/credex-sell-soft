
import { useEffect, useState } from "react";
import { FileUp, Star, Rocket } from "lucide-react";

const steps = [
  {
    title: "Upload License",
    description: "Securely submit your software license details through our encrypted portal.",
    icon: FileUp,
    color: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-500",
  },
  {
    title: "Get Valuation",
    description: "Our AI-powered system analyzes current market data to provide you with the best possible valuation.",
    icon: Star,
    color: "bg-purple-100 dark:bg-purple-900/30",
    iconColor: "text-purple-500",
  },
  {
    title: "Get Paid",
    description: "Accept our offer and receive payment via your preferred method within 48 hours.",
    icon: Rocket,
    color: "bg-green-100 dark:bg-green-900/30",
    iconColor: "text-green-500",
  },
];

export default function HowItWorks() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute("data-index"));
          setVisibleItems((prev) => [...prev, index]);
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll(".step-item");
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section id="how-it-works" className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          How It <span className="gradient-text">Works</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Our streamlined process makes selling your unused software licenses quick and profitable
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => {
          const StepIcon = step.icon;
          const isVisible = visibleItems.includes(index);

          return (
            <div
              key={index}
              data-index={index}
              className={`step-item p-6 rounded-2xl border bg-card transition-all duration-700 
                hover:shadow-lg hover:-translate-y-2 hover:border-primary/30 cursor-pointer
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div 
                className={`${step.color} p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6
                transition-transform duration-300 group-hover:scale-110`}
              >
                <StepIcon className={`${step.iconColor} h-8 w-8 transition-transform duration-300 hover:scale-110`} />
              </div>
              <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 hover:text-primary">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
