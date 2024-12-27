import React from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/LanguageContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  onCtaClick?: () => void;
}

const ServiceCard = ({
  title,
  description,
  imageUrl,
  onCtaClick = () => console.log("CTA clicked"),
}: ServiceCardProps) => {
  const { t } = useLanguage();

  return (
    <Card className="group w-[350px] overflow-hidden bg-card hover:shadow-xl transition-all duration-300 rounded-2xl border-border shadow-lg hover:-translate-y-1">
      <div className="relative h-[200px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <CardTitle className="absolute bottom-4 left-4 right-4 text-xl font-bold text-right text-white z-20">
          {title}
        </CardTitle>
      </div>
      <CardContent className="p-6">
        <CardDescription className="text-right text-muted-foreground text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0">
        <Button
          onClick={onCtaClick}
          className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-6"
        >
          {t("services.learnMore")}
          <ArrowRight className="h-5 w-5" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
