import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations();

  return (
    <section id="contact" className="mb-16">
      <h2 className="text-3xl font-bold mb-4">{t("contactTitle")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <form className="space-y-4">
          <Input type="text" placeholder={t("form.name")} />
          <Input type="email" placeholder={t("form.email")} />
          <Textarea placeholder={t("form.message")} />
          <Button type="submit">{t("form.sendMessage")}</Button>
        </form>
        <div className="space-y-4">
          <p className="text-lg">{t("contactText")}</p>
          <div className="flex gap-4">
            <a href={process.env.GITHUB_URL} className="text-foreground hover:text-primary">
              <Github className="w-6 h-6" />
            </a>
            <a href={process.env.LINKEDIN_URL} className="text-foreground hover:text-primary">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href={`mailto:${process.env.EMAIL_ADDRESS}`} className="text-foreground hover:text-primary">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
