import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

interface HeroSectionProps {
  onContactClick?: () => void;
  onWhatsAppClick?: () => void;
}

const HeroSection = ({
  onContactClick = () => console.log("Contact clicked"),
  onWhatsAppClick = () => console.log("WhatsApp clicked"),
}: HeroSectionProps) => {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-[90vh] w-full bg-white overflow-hidden">
      {/* Background Video/Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/90 to-purple-600/90 mix-blend-multiply" />
        <img
          src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=2000"
          alt="Medical Facility"
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
      </div>

      {/* Content Container */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-end py-24">
        <div className="text-right max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            {t("hero.title")}
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-12 leading-relaxed">
            {t("hero.subtitle")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-6 justify-end">
            <Button
              onClick={onWhatsAppClick}
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-3 text-lg py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {t("hero.whatsappButton")}
              <MessageCircle className="h-6 w-6" />
            </Button>

            <Button
              onClick={onContactClick}
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-white/30 flex items-center gap-3 text-lg py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {t("hero.contactButton")}
              <Phone className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="absolute bottom-12 left-8 flex gap-6">
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-lg">
            <p className="text-white text-sm font-medium">ISO 9001:2015</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-lg">
            <p className="text-white text-sm font-medium">JCI Accredited</p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
};

export default HeroSection;
