import React from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";

const PatientJourneySection = () => {
  const { t } = useLanguage();
  const steps = t("patientJourney.items");

  return (
    <section className="w-full py-24 bg-gradient-to-br from-accent to-accent/50">
      <div className="container mx-auto px-4">
        <div className="text-right mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 py-2 bg-gradient-to-l from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
            {t("patientJourney.title")}
          </h2>
          <p className="text-muted-foreground text-xl leading-relaxed">
            {t("patientJourney.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-6 text-right">
                <div className="flex items-center gap-4 mb-4">
                  <step.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatientJourneySection;
