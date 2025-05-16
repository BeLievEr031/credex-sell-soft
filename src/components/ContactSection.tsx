
import { useEffect, useState } from "react";
import ContactForm from "./ContactForm";

export default function ContactSection() {
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

    observer.observe(document.querySelector(".contact-container") as Element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="section-container">
      <div
        className={`contact-container transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="gradient-text">Unlock Value</span> from Your Unused Licenses?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Fill out the form and our license specialists will provide you with a no-obligation valuation within 24 hours.
            </p>
            
            <div className="bg-muted/60 p-6 rounded-xl mb-8">
              <h3 className="font-semibold text-xl mb-4">Common Questions</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">What types of licenses can I sell?</h4>
                  <p className="text-muted-foreground">We accept most major software licenses, including Microsoft, Adobe, AutoCAD, and many others.</p>
                </div>
                
                <div>
                  <h4 className="font-medium">How is my license valued?</h4>
                  <p className="text-muted-foreground">We analyze current market demand, remaining license duration, and transfer costs to provide the best possible valuation.</p>
                </div>
                
                <div>
                  <h4 className="font-medium">Is my data secure?</h4>
                  <p className="text-muted-foreground">Absolutely. We use bank-level encryption to protect all your sensitive information.</p>
                </div>
              </div>
            </div>
          </div>
          
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
