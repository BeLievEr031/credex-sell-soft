
import React from "react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section id="faq" className="section-container">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Find answers to common questions about selling your unused software licenses
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-medium">
              How do I know if my license is eligible for resale?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Most perpetual software licenses from major vendors can be resold. Enterprise agreements, volume licenses, and perpetual licenses are typically eligible. Subscription-based licenses usually cannot be resold. Contact us for a free evaluation of your specific licenses.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-medium">
              How much can I get for my unused licenses?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              License values vary based on software type, version, demand, and quantity. Generally, you can expect between 15-50% of the original purchase price. Our valuation experts will provide a fair market assessment within 24 hours of submission.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-medium">
              Is selling unused software licenses legal?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Yes, in most jurisdictions, the resale of software licenses is protected under the first-sale doctrine or similar legal principles. We ensure all transactions comply with relevant software license agreements and legal requirements in your region.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg font-medium">
              How long does the entire process take?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              From initial submission to payment, the process typically takes 1-2 weeks. After we receive your license information, you'll get a valuation within 24 hours. Once you accept the offer, payment is processed within 3-5 business days after all documentation is verified.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-lg font-medium">
              What happens to my licenses after I sell them?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              We handle the complete transfer process, ensuring the licenses are properly decommissioned from your systems and transferred to the new owner. You'll receive documentation confirming the transfer is complete for your compliance records.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
