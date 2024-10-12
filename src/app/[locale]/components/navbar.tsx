import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Globe, Menu } from "lucide-react";
import { LangSwitcher } from "@/components/common/LangSwitcher";

export default function Navbar() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <header className="sticky top-0 z-10 backdrop-blur-sm bg-background/90 border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">{t("name")}</h1>
        <nav className="hidden md:flex items-center space-x-4">
          <ul className="flex gap-4 rtl:me-4">
            <li>
              <Link href="/#profile" className="hover:text-primary">
                {t("nav.profile")}
              </Link>
            </li>
            <li>
              <Link href="/#about" className="hover:text-primary">
                {t("nav.about")}
              </Link>
            </li>
            <li>
              <Link href="/#projects" className="hover:text-primary">
                {t("nav.projects")}
              </Link>
            </li>
            <li>
              <Link href="/#experience" className="hover:text-primary">
                {t("nav.experience")}
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-primary">
                {t("nav.contact")}
              </Link>
            </li>
          </ul>
          <LangSwitcher />
          {/* <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          title={t.toggleTheme}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">{t.toggleTheme}</span>
        </Button> */}
        </nav>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4">
              <a href="#profile" className="hover:text-primary">
                {t("nav.profile")}
              </a>
              <a href="#about" className="hover:text-primary">
                {t("nav.about")}
              </a>
              <a href="#projects" className="hover:text-primary">
                {t("nav.projects")}
              </a>
              <a href="#experience" className="hover:text-primary">
                {t("nav.experience")}
              </a>
              <a href="#contact" className="hover:text-primary">
                {t("nav.contact")}
              </a>
            </nav>
            <div className="mt-4 space-y-4 flex justify-end">
              <LangSwitcher
                trigger={
                  <Button variant="ghost" size="sm">
                    <Globe className="ltr:mr-2 ml-2 h-4 w-4" />
                    {locale === "en"
                      ? "English"
                      : locale === "fr"
                      ? "Français"
                      : "العربية"}
                  </Button>
                }
              />
              {/* <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start"
                  >
                    <Globe className="mr-2  h-4 w-4" />
                    {locale === "en"
                      ? "English"
                      : locale === "fr"
                      ? "Français"
                      : "العربية"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={switchLang("en")}>
                    English
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={switchLang("fr")}>
                    Français
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={switchLang("ar")}>
                    العربية
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu> */}
              {/* <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-full justify-start"
            >
              <Sun className="mr-2 h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="mr-2 h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              {t.toggleTheme}
            </Button> */}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
