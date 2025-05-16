
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/hooks/use-theme";
import ChatWidget from "@/components/ChatWidget";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen flex flex-col">
        <Header />
        <main>
          <HeroSection />
          <HowItWorks />
          <WhyChooseUs />
          <Testimonials />
          <ContactSection />
          <FAQ />
          <ChatWidget />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
