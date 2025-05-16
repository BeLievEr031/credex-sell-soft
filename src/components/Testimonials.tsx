
import { useEffect, useState } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "IT Director",
    company: "TechVision Inc.",
    content:
      "SoftSell made it incredibly easy to recover value from our unused Adobe licenses after department restructuring. Their valuation was significantly higher than competitors, and payment was processed quickly.",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
  },
  {
    name: "Michael Chen",
    role: "Finance Manager",
    company: "Global Systems Ltd.",
    content:
      "After our company downsized, we had over 50 premium software licenses sitting idle. SoftSell's process was straightforward and secure. We received fair market value within days of submitting our license details.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
  },
  {
    name: "Rebecca Martinez",
    role: "CTO",
    company: "Innovate Solutions",
    content:
      "We were skeptical about selling our unused licenses, but SoftSell exceeded our expectations. The process was transparent from start to finish, and we received more than we anticipated for our enterprise software licenses.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
  },
  {
    name: "David Wilson",
    role: "Procurement Manager",
    company: "Atlas Corp",
    content:
      "SoftSell's expertise in the secondary software market is unparalleled. They found buyers for our specialized engineering software that other resellers wouldn't touch. Their market knowledge and customer service are top-notch.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
  },
];

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(document.querySelector(".testimonials-container") as Element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What Our <span className="gradient-text">Customers Say</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Don't just take our word for it - hear from businesses that have successfully sold their licenses through SoftSell
        </p>
      </div>

      <div
        className={`testimonials-container transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                <div className="p-1 h-full">
                  <Card className="bg-card p-6 rounded-xl border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full">
                    <div className="flex items-start">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover mr-4"
                      />
                      <div>
                        <p className="text-lg mb-4">"{testimonial.content}"</p>
                        <div className="mt-4">
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-muted-foreground text-sm">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-8">
            <CarouselPrevious 
              className="relative static left-0 translate-y-0 rounded-full" 
              variant="outline"
              size="default"
            >
              <ChevronLeft className="h-4 w-4" />
            </CarouselPrevious>
            <CarouselNext 
              className="relative static right-0 translate-y-0 rounded-full" 
              variant="outline"
              size="default"
            >
              <ChevronRight className="h-4 w-4" />
            </CarouselNext>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
