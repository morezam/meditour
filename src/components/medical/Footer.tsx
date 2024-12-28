import React from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();
  const footerItems = t("footer.items");

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-right">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="https://api.dicebear.com/7.x/initials/svg?seed=MT&backgroundColor=4f46e5"
                alt={t("footer.companyName")}
                className="h-10 w-10 rounded-lg"
              />
              <h3 className="text-xl font-bold text-foreground">
                {t("footer.companyName")}
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t("footer.subtitle")}
            </p>
            <div className="flex gap-4 justify-end">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {footerItems.map((footerItem) => (
            <div key={footerItem.header}>
              <h3 className="text-lg font-semibold mb-6 text-foreground">
                {footerItem.header}
              </h3>
              <ul className="space-y-3">
                {footerItem.links.map((item) => (
                  <li key={item.title}>
                    <a
                      href={item.link}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">
              {t("footer.contact")}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 flex-shrink-0" />
                <span>{t("footer.address")}</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span dir="ltr">+98 21 1234 5678</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span dir="ltr">info@medicaltourism.com</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} {t("footer.companyName")}.{" "}
            {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
