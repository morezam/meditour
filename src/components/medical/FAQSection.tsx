import React from "react";
import { useLanguage } from "@/lib/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs?: FAQItem[];
}

const FAQSection = () => {
  const { t } = useLanguage();
  const faqs = t("faq.items");
  console.log(faqs);

  return (
    <section className="w-full py-24 bg-gradient-to-br from-background to-background/50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-right mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-l from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
            {t("faq.title")}
          </h2>
          <p className="text-muted-foreground text-xl leading-relaxed">
            {t("faq.subtitle")}
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="bg-card border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-right text-lg hover:text-primary hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-right text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
