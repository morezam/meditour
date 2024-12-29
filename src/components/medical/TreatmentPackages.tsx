import React from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CircleDot,
  Sparkles,
  Building,
  Map,
  UtensilsCrossed,
  Gift,
  ArrowRight,
  Check,
} from "lucide-react";

interface PackageFeature {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface TreatmentPackage {
  id: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  popular?: boolean;
}

const TreatmentPackages = () => {
  const { t } = useLanguage();

  const features: PackageFeature[] = [
    {
      icon: CircleDot,
      title: t("packages.features.dental.title"),
      description: t("packages.features.dental.description"),
    },
    {
      icon: Sparkles,
      title: t("packages.features.aesthetic.title"),
      description: t("packages.features.aesthetic.description"),
    },
    {
      icon: Building,
      title: t("packages.features.accommodation.title"),
      description: t("packages.features.accommodation.description"),
    },
    {
      icon: Map,
      title: t("packages.features.tours.title"),
      description: t("packages.features.tours.description"),
    },
    {
      icon: UtensilsCrossed,
      title: t("packages.features.cuisine.title"),
      description: t("packages.features.cuisine.description"),
    },
    {
      icon: Gift,
      title: t("packages.features.souvenirs.title"),
      description: t("packages.features.souvenirs.description"),
    },
  ];

  const packages: TreatmentPackage[] = [
    {
      id: "essential",
      title: t("packages.essential.title"),
      description: t("packages.essential.description"),
      features: [
        t("packages.essential.features.consultation"),
        t("packages.essential.features.treatment"),
        t("packages.essential.features.accommodation"),
        t("packages.essential.features.transfer"),
      ],
      price: "$2,999",
    },
    {
      id: "premium",
      title: t("packages.premium.title"),
      description: t("packages.premium.description"),
      features: [
        t("packages.premium.features.allEssential"),
        t("packages.premium.features.luxury"),
        t("packages.premium.features.tours"),
        t("packages.premium.features.concierge"),
        t("packages.premium.features.cuisine"),
        t("packages.premium.features.souvenirs"),
      ],
      price: "$4,999",
      popular: true,
    },
    {
      id: "luxury",
      title: t("packages.luxury.title"),
      description: t("packages.luxury.description"),
      features: [
        t("packages.luxury.features.allPremium"),
        t("packages.luxury.features.vip"),
        t("packages.luxury.features.exclusive"),
        t("packages.luxury.features.family"),
        t("packages.luxury.features.extended"),
        t("packages.luxury.features.gifts"),
      ],
      price: "$7,999",
    },
  ];

  return (
    <section className="w-full overflow-x-hidden py-24 bg-gradient-to-br from-background to-background/50">
      <div className="container mx-auto px-4">
        <div className="text-right mb-16 animate-fade-down">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-l from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
            {t("packages.title")}
          </h2>
          <p className="text-muted-foreground text-xl leading-relaxed max-w-3xl mr-auto">
            {t("packages.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-right">
                <feature.icon className="h-8 w-8 mb-4 text-primary float-right animate-float" />
                <h3 className="text-xl font-semibold mb-2 text-foreground clear-right">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="essential" dir="rtl" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 animate-fade-up">
            {packages.map((pkg) => (
              <TabsTrigger
                key={pkg.id}
                value={pkg.id}
                className="relative py-4 transition-all duration-300 hover:-translate-y-1"
              >
                {pkg.popular && (
                  <span className="absolute -top-2 px-2 py-0.5 text-xs font-semibold bg-green-500 text-white rounded-full animate-bounce-in">
                    {t("packages.popular")}
                  </span>
                )}
                {pkg.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {packages.map((pkg) => (
            <TabsContent key={pkg.id} value={pkg.id}>
              <Card className="bg-card border-border animate-scale-up">
                <CardContent className="p-8">
                  <div className="text-right mb-6">
                    <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {pkg.description}
                    </p>
                    <div className="text-3xl font-bold text-primary mb-6 animate-pulse-soft">
                      {pkg.price}
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8 ">
                    {pkg.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex opacity-0 translate-x-full items-center gap-3 text-right animate-slide-in-right"
                        style={{
                          animationDelay: `${index * 100}ms`,
                          animationFillMode: "forwards",
                        }}
                      >
                        <span className="text-foreground flex-1">
                          {feature}
                        </span>
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 animate-rotate-in" />
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-6 flex items-center justify-center gap-2 text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    size="lg"
                  >
                    {t("packages.customize")}
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default TreatmentPackages;
