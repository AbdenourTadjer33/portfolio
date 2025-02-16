import "../globals.css";
import type { Metadata } from "next";
import { useLocale } from "next-intl";
import Navbar from "@/app/[locale]/components/navbar";
import Footer from "./components/footer";
import { getTranslations } from "next-intl/server";
import Providers from "../providers";
import { Toaster } from "sonner";
import Script from 'next/script';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata");

  return {
    metadataBase: new URL(process.env.SITE_URL!),
    title: t("title"),
    description: t("description"),
    keywords:
      "Abdennour Tadjer, Abdenour, Tadjer, abdennour, abdenour tadjer, tadjer, dz developer, Abdenour Tadjer, abdennour.tadjer, abdenour.tadjer, software developer, web development, PHP, Laravel, JavaScript, MySQL, portfolio, web applications, frontend development, backend development",
    applicationName: "My Portfolio",
    authors: {
      name: "Abdennour Tadjer",
      url: "https://abdennour-tadjer.vercel.app",
    },
    generator: "Next.js",
    creator: "Abdennour Tadjer",
    robots: "index, follow",
    openGraph: {
      siteName: "Abdennour Tadjer Portfolio's",
      title: t("title"),
      description: t("og-description"),
      type: "website",
      url: "https://abdennour-tadjer.vercel.app",
      images: t("preview-image"),
    },
    alternates: {
      canonical: "https://abdennour-tadjer.fotysolutions.com",
      languages: {
        en: "/en",
        fr: "/fr",
        ar: "/ar",
      },
    },
  };
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const locale = useLocale();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <head>
        <meta
          name="google-site-verification"
          content="yOZjx0tfJnSMoBstTi-z9hjnbeuy3EwSmWCT--g5Axg"
        />
        {process.env.NODE_ENV === 'production' && (
          <Script
              src={process.env.TRACKING_SOURCE}
              data-website-id={process.env.TRACKING_WEBSITE_ID}
              strategy="afterInteractive"
          />
        )}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="antialiased">
        <Providers>
          <Navbar />
          {children}
          <Toaster richColors />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
