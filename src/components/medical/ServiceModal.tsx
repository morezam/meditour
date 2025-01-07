import React from "react";
import { useLanguage } from "@/lib/LanguageContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Calendar,
  DollarSign,
  Clock,
  CheckCircle,
} from "lucide-react";

interface ServiceModalProps {
  title: string;
  description: string;
  imageUrl: string;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  onSchedule?: () => void;
}

const ServiceModal = ({
  title,
  description,
  imageUrl,
  isOpen,
  onOpenChange,
  onSchedule = () => console.log("Schedule consultation clicked"),
}: ServiceModalProps) => {
  const { t } = useLanguage();

  const benefits = [
    "State-of-the-art facilities",
    "Experienced medical team",
    "Personalized care approach",
    "International standards",
  ];

  const details = [
    { icon: Clock, label: "Recovery Time", value: "1-2 weeks" },
    { icon: Calendar, label: "Treatment Duration", value: "2-3 hours" },
    { icon: DollarSign, label: "Starting From", value: "$2,500" },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] p-0 bg-background">
        <ScrollArea className="max-h-[90vh]">
          <div className="p-6">
            <DialogHeader>
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-full object-cover"
                />
                <DialogTitle className="absolute bottom-4 right-4 text-2xl font-bold text-white z-20">
                  {title}
                </DialogTitle>
              </div>
              <DialogDescription className="text-right text-lg text-muted-foreground leading-relaxed">
                {description}
              </DialogDescription>
            </DialogHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-right">
                  Key Benefits
                </h3>
                <ul className="space-y-2">
                  {benefits.map((benefit, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-right animate-slide-in-right"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="text-muted-foreground flex-1">
                        {benefit}
                      </span>
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-right">
                  Procedure Details
                </h3>
                <div className="grid gap-3">
                  {details.map((detail, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-accent rounded-lg animate-fade-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <detail.icon className="h-5 w-5 text-primary" />
                      <div className="flex-1 text-right">
                        <p className="text-sm text-muted-foreground">
                          {detail.label}
                        </p>
                        <p className="font-semibold">{detail.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end sticky bottom-0 pt-4 border-t bg-background">
              <Button
                onClick={onSchedule}
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-6 px-8 flex items-center gap-2 text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                Schedule Consultation
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal;
