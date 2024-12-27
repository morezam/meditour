import React from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";
import Header from "./medical/Header";
import HeroSection from "./medical/HeroSection";
import ServicesSection from "./medical/ServicesSection";
import PriceComparison from "./medical/PriceComparison";
import TestimonialsSection from "./medical/TestimonialsSection";
import ContactSection from "./medical/ContactSection";

interface HomeProps {
  onLanguageChange?: (language: string) => void;
  onNavigate?: (section: string) => void;
  onServiceClick?: (serviceId: string) => void;
  onContactSubmit?: (data: any) => void;
  onWhatsAppClick?: () => void;
  onTelegramClick?: () => void;
}

const Home = ({
  onNavigate = () => console.log("Navigation clicked"),
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
      <Header onLanguageChange={handleLanguageChange} onNavigate={onNavigate} />
      <main>
        <HeroSection
          onContactClick={() => onNavigate("contact")}
          onWhatsAppClick={onWhatsAppClick}
        />
        <ServicesSection onServiceClick={onServiceClick} />
        <PriceComparison />
        <TestimonialsSection />
        <ContactSection
          onSubmit={onContactSubmit}
          onWhatsAppClick={onWhatsAppClick}
          onTelegramClick={onTelegramClick}
        />
      </main>
      <div className="w-[800px] h-[600px]"></div>
    </div>
  );
};

export default Home;
