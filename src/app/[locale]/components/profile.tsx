import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail } from "lucide-react";
import { HireMe } from "./hire-me";

import ProfileImg from "@/assets/profile/img.jpg";

export default function Profile() {
  const t = useTranslations();

  return (
    <section id="profile" className="mb-16">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <img
          src={ProfileImg.src}
          alt="profile picture"
          className="w-64 h-64 rounded-full object-cover hover:scale-105 "
        />
        <div>
          <h2 className="text-4xl font-bold mb-2">{t("name")}</h2>
          <p className="text-xl text-muted-foreground mb-4">{t("role")}</p>
          <p className="text-lg mb-4">{t("intro")}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge>React</Badge>
            <Badge>Node.js</Badge>
            <Badge>TypeScript</Badge>
            <Badge>AWS</Badge>
            <Badge>Docker</Badge>
          </div>
          <div className="flex items-center gap-2">
            <Button>
              <Mail className="mr-2 h-4 w-4" /> {t("contactMe")}
            </Button>
            <HireMe
              trans={{
                hireMe: t("hireMe"),
                hireMeTitle: t("hireMeTitle"),
                hireMeDescription: t("hireMeDescription"),
                formName: t("form.name"),
                formEmail: t("form.email"),
                formMessage: t("form.message"),
                formSendMessage: t("form.sendMessage"),
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}