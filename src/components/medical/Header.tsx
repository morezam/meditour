import React from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe, Menu, Moon, Sun } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface HeaderProps {
  onLanguageChange?: (language: string) => void;
  onNavigate?: (section: string) => void;
}

const Header = ({
  onLanguageChange = () => console.log("Language changed"),
  onNavigate = () => console.log("Navigation clicked"),
}: HeaderProps) => {
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const handleLanguageChange = (newLang: string) => {
    setLanguage(newLang as "ar" | "en" | "fa");
    onLanguageChange(newLang);
  };

  return (
    <header className="sticky top-0 w-full h-20 bg-background/80 backdrop-blur-lg border-b border-border z-50 px-4 md:px-6">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="https://api.dicebear.com/7.x/initials/svg?seed=MT&backgroundColor=4f46e5"
            alt="Medical Tourism Logo"
            className="h-12 w-12 rounded-xl shadow-lg"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <NavigationMenu dir={language === "en" ? "ltr" : "rtl"}>
            <NavigationMenuList className="space-x-2">
              {[
                { key: "services", label: t("header.services") },
                { key: "doctors", label: t("header.doctors") },
                { key: "testimonials", label: t("header.testimonials") },
                { key: "contact", label: t("header.contact") },
              ].map((item) => (
                <NavigationMenuItem key={item.key}>
                  <NavigationMenuTrigger
                    onClick={() => onNavigate(item.key)}
                    className="bg-transparent hover:bg-accent transition-colors"
                  >
                    {item.label}
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="hover:bg-accent"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          {/* Language Selector */}
          <Select onValueChange={handleLanguageChange} defaultValue={language}>
            <SelectTrigger className="w-[120px] bg-accent border-0 hover:bg-accent/80 transition-colors">
              <Globe className="mr-2 h-4 w-4 text-foreground" />
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ar">العربية</SelectItem>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="fa">فارسی</SelectItem>
            </SelectContent>
          </Select>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-accent">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side={language === "en" ? "right" : "left"}
                className="w-[300px] bg-background/95 backdrop-blur-lg"
              >
                <nav
                  className="flex flex-col space-y-4 mt-6"
                  dir={language === "en" ? "ltr" : "rtl"}
                >
                  {[
                    { key: "services", label: t("header.services") },
                    { key: "doctors", label: t("header.doctors") },
                    { key: "testimonials", label: t("header.testimonials") },
                    { key: "contact", label: t("header.contact") },
                  ].map((item) => (
                    <Button
                      key={item.key}
                      variant="ghost"
                      className="w-full justify-start hover:bg-accent hover:text-primary transition-colors"
                      onClick={() => onNavigate(item.key)}
                    >
                      {item.label}
                    </Button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
