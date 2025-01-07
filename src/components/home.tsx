import React from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";
import Header from "./medical/Header";
import HeroSection from "./medical/HeroSection";
import ServicesSection from "./medical/ServicesSection";
import PriceComparison from "./medical/PriceComparison";
import TreatmentPackages from "./medical/TreatmentPackages";
import TestimonialsSection from "./medical/TestimonialsSection";
import ContactSection from "./medical/ContactSection";
import FAQSection from "./medical/FAQSection";
import Footer from "./medical/Footer";
import PatientJourneySection from "./medical/PatientJourneySection";

interface HomeProps {
  onLanguageChange?: (language: string) => void;
  onServiceClick?: (serviceId: string) => void;
  onContactSubmit?: (data: any) => void;
  onWhatsAppClick?: () => void;
  onTelegramClick?: () => void;
}

const Home = ({
  onServiceClick = (id: string) => console.log(`Service ${id} clicked`),
  onContactSubmit = () => console.log("Contact form submitted"),
  onWhatsAppClick = () => console.log("WhatsApp clicked"),
  onTelegramClick = () => console.log("Telegram clicked"),
}: HomeProps) => {
  const { dir, setLanguage } = useLanguage();
  const { theme } = useTheme();

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang as "ar" | "en" | "fa");
  };

  return (
    <div className="min-h-screen bg-background" dir={dir}>
      <Header onLanguageChange={handleLanguageChange} />
      <main>
        <div className="animate-fade-down">
          <HeroSection
            onContactClick={() => {
              const contactSection = document.getElementById("contact");
              contactSection?.scrollIntoView({ behavior: "smooth" });
            }}
            onWhatsAppClick={onWhatsAppClick}
          />
        </div>
        <div id="services" className="animate-fade-up [animation-delay:200ms]">
          <ServicesSection onServiceClick={onServiceClick} />
        </div>
        <div className="animate-fade-up [animation-delay:400ms]">
          <PriceComparison />
        </div>
        <div id="packages" className="animate-fade-up [animation-delay:600ms]">
          <TreatmentPackages />
        </div>
        <div className="animate-fade-up [animation-delay:800ms]">
          <PatientJourneySection />
        </div>
        <div
          id="testimonials"
          className="animate-fade-up [animation-delay:1000ms]"
        >
          <TestimonialsSection />
        </div>
        <div className="animate-fade-up [animation-delay:1200ms]">
          <FAQSection />
        </div>
        <div id="contact" className="animate-fade-up [animation-delay:1400ms]">
          <ContactSection
            onSubmit={onContactSubmit}
            onWhatsAppClick={onWhatsAppClick}
            onTelegramClick={onTelegramClick}
          />
        </div>
      </main>
      <div className="animate-fade-up [animation-delay:1600ms]">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
