import React from "react";
import { useLanguage } from "@/lib/LanguageContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  country: string;
  quote: string;
  avatarUrl: string;
}

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "محمد عبدالله",
    country: "الإمارات العربية المتحدة",
    quote:
      "تجربة علاجية متميزة في إيران. الخدمات الطبية عالية الجودة وبأسعار معقولة.",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mohammed",
  },
  {
    id: 2,
    name: "فاطمة الحسيني",
    country: "الكويت",
    quote:
      "الأطباء محترفون والمرافق الطبية حديثة. أنا سعيدة جداً بنتائج العلاج.",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fatima",
  },
  {
    id: 3,
    name: "أحمد المنصوري",
    country: "قطر",
    quote: "خدمة ممتازة وعناية شخصية رائعة. أنصح بشدة بالعلاج الطبي في إيران.",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed",
  },
];

const TestimonialsSection = ({
  testimonials = defaultTestimonials,
}: TestimonialsSectionProps) => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-gradient-to-br from-indigo-600 to-purple-600 w-full relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQ4YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnptMC0xMmMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] opacity-10" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {t("testimonials.title")}
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="bg-white/10 backdrop-blur-sm border-0 shadow-xl h-full">
                  <CardContent className="p-8 flex flex-col items-center text-center h-full">
                    <Avatar className="w-20 h-20 mb-6 ring-4 ring-white/20">
                      <AvatarImage
                        src={testimonial.avatarUrl}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <Quote className="w-8 h-8 text-white/40 mb-6" />
                    <p className="text-white/90 mb-6 text-right text-lg leading-relaxed">
                      {testimonial.quote}
                    </p>
                    <div className="mt-auto">
                      <h4 className="font-semibold text-xl text-white mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-white/60">{testimonial.country}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-12 bg-white/10 hover:bg-white/20 border-0 text-white" />
          <CarouselNext className="-right-12 bg-white/10 hover:bg-white/20 border-0 text-white" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
