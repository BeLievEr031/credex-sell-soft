
import { useEffect, useState } from "react";
import { ShieldCheck, Star, Users, Briefcase } from "lucide-react";

const benefits = [
  {
    title: "Secure Transactions",
    description: "End-to-end encryption and secure transfer protocols protect your sensitive license data.",
    icon: ShieldCheck,
    color: "text-blue-500",
  },
  {
    title: "Best Market Value",
    description: "Our extensive network of buyers ensures you get the maximum value for your licenses.",
    icon: Star, 
    color: "text-amber-500",
  },
  {
    title: "5000+ Happy Customers",
    description: "Join thousands of satisfied businesses who have sold their unused licenses through our platform.",
    icon: Users,
    color: "text-purple-500",
  },
  {
    title: "Enterprise Ready",
    description: "Customized solutions for large organizations with volume license portfolios.",
    icon: Briefcase,
    color: "text-green-500",
  },
];

export default function WhyChooseUs() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleItems((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".benefit-item");
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section id="why-choose-us" className="section-container bg-muted/50 py-16 rounded-3xl">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Why Choose <span className="gradient-text">SoftSell</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          We've perfected the license resale process to maximize your return and minimize your effort
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {benefits.map((benefit, index) => {
          const BenefitIcon = benefit.icon;
          const isVisible = visibleItems.includes(index);

          return (
            <div
              key={index}
              data-index={index}
              className={`benefit-item text-center transition-all duration-700 delay-${index * 100} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-background border mb-5">
                <BenefitIcon className={`h-8 w-8 ${benefit.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground px-4">{benefit.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
