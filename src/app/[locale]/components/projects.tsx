import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";

import CrtiImg from "@/assets/projects/crti-project-management-app/img.png";
import EcommerceImg from "@/assets/projects/e-commerce-management-application/img.png";
import BestTourImg from "@/assets/projects/best-tour-travel-agency-website/img.png";
import SagimexProImg from "@/assets/projects/sagimex-pro-business-website/img.png";
import Image, { StaticImageData } from "next/image";

const projects = [
  {
    slug: "crti-project-management-app",
    extern: false,
    img: CrtiImg,
  },
  {
    slug: "e-commerce-management-application",
    extern: false,
    img: EcommerceImg,
  },
  {
    slug: "best-tour-travel-agency-website",
    extern: false,
    img: BestTourImg,
  },
  {
    slug: "sagimex-pro-business-website",
    extern: true,
    url: "https://sagimexpro.dz",
    img: SagimexProImg,
  },
];

export default function Projects() {
  const t = useTranslations();

  return (
    <section id="projects" className="mb-16">
      <h2 className="text-3xl font-bold mb-4">{t("projectsTitle")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            slug={project.slug}
            extern={project.extern}
            url={project.url ?? ""}
            img={project.img}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  slug,
  extern,
  url,
  img,
}: {
  slug: string;
  extern: boolean;
  url: string;
  img: StaticImageData;
}) {
  const m = useTranslations();
  const t = useTranslations(`projects.${slug}`);

  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-lg transition duration-200">
      <Image
        src={img}
        alt={`image ${t("name")}`}
        className="w-full h-52 object-cover object-top"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{t("name")}</h3>
        <p className="text-muted-foreground mb-4">{t("description")}</p>
        <div className="flex justify-center">
          {!extern ? (
            <Link href={`/projects/${slug}`} passHref>
              <Button variant="outline">{m("viewProject")}</Button>
            </Link>
          ) : (
            <a href={url} target="_blank">
              <Button variant="outline">{m("liveDemo")}</Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
