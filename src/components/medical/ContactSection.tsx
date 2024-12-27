import React from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Send, MessageSquare } from "lucide-react";

interface ContactSectionProps {
  onSubmit?: (data: any) => void;
  onWhatsAppClick?: () => void;
  onTelegramClick?: () => void;
  isSubmitting?: boolean;
  showConfirmation?: boolean;
}

const ContactSection = ({
  onSubmit = () => console.log("Form submitted"),
  onWhatsAppClick = () => console.log("WhatsApp clicked"),
  onTelegramClick = () => console.log("Telegram clicked"),
  isSubmitting = false,
  showConfirmation = false,
}: ContactSectionProps) => {
  const { t } = useLanguage();

  return (
    <section className="w-full py-24 bg-gradient-to-br from-background to-background/50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-right mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-l from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
            {t("contact.title")}
          </h2>
          <p className="text-muted-foreground text-xl leading-relaxed">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <Card className="bg-card border-border shadow-xl rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-l from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 text-white p-8">
              <CardTitle className="text-right text-2xl">
                {t("contact.form.title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  onSubmit(e);
                }}
              >
                <div>
                  <Input
                    placeholder={t("contact.form.fullName")}
                    className="text-right bg-accent/50 border-0 focus-visible:ring-2 focus-visible:ring-ring h-12"
                    dir="rtl"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder={t("contact.form.email")}
                    className="text-right bg-accent/50 border-0 focus-visible:ring-2 focus-visible:ring-ring h-12"
                    dir="rtl"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder={t("contact.form.message")}
                    className="text-right bg-accent/50 border-0 focus-visible:ring-2 focus-visible:ring-ring min-h-[120px]"
                    dir="rtl"
                  />
                </div>
                <div className="text-right">
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-6 flex items-center justify-center gap-2 text-lg"
                    disabled={isSubmitting}
                  >
                    {t("contact.form.send")}
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
              </form>

              {showConfirmation && (
                <div className="mt-6 p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-xl text-right border border-green-200 dark:border-green-900">
                  {t("contact.form.success")}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Direct Contact Options */}
          <div className="space-y-6">
            <Card className="bg-card border-border shadow-xl rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <div className="text-right mb-8">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    {t("contact.directContact.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("contact.directContact.subtitle")}
                  </p>
                </div>

                <div className="space-y-4">
                  <Button
                    variant="outline"
                    className="w-full justify-between bg-card hover:bg-accent border-2 border-green-500 dark:border-green-600 text-green-600 dark:text-green-500 hover:text-green-700 dark:hover:text-green-400 rounded-xl py-6 text-lg"
                    onClick={onWhatsAppClick}
                  >
                    <span>{t("contact.directContact.whatsapp")}</span>
                    <MessageSquare className="h-6 w-6" />
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full justify-between bg-card hover:bg-accent border-2 border-blue-500 dark:border-blue-600 text-blue-600 dark:text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 rounded-xl py-6 text-lg"
                    onClick={onTelegramClick}
                  >
                    <span>{t("contact.directContact.telegram")}</span>
                    <MessageCircle className="h-6 w-6" />
                  </Button>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-br from-accent to-accent/50 rounded-xl text-right border border-border">
                  <p className="text-primary dark:text-primary-foreground text-lg">
                    {t("contact.directContact.available")}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
