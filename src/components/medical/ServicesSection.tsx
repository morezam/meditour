import React from "react";
import ServiceCard from "./ServiceCard";
import { useLanguage } from "@/lib/LanguageContext";

interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

interface ServicesSectionProps {
  onServiceClick?: (serviceId: string) => void;
}

const ServicesSection = ({
  onServiceClick = (id: string) => console.log(`Service ${id} clicked`),
}: ServicesSectionProps) => {
  const { t } = useLanguage();
  const services = t("services.items");

  return (
    <section className="w-full py-24 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="text-right max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-l from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
            {t("services.title")}
          </h2>
          <p className="text-muted-foreground text-xl leading-relaxed">
            {t("services.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 justify-items-center max-w-7xl mx-auto">
          {services.map((service: Service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              onCtaClick={() => onServiceClick(service.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
