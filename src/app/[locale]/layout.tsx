import "../globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { useLocale } from "next-intl";
import Navbar from "@/app/[locale]/components/navbar";
import Footer from "./components/footer";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Abdennour Tadjer | Software Developer Portfolio",
  description:
    "Explore the portfolio of Abdennour Tadjer, a passionate software developer specializing in web applications. Featuring projects built with PHP, Laravel, JavaScript, and MySQL, this portfolio showcases clean, efficient code and user-centered solutions. Discover innovative projects and contact for collaboration opportunities.",
  keywords:
    "Abdennour Tadjer, software developer, web development, PHP, Laravel, JavaScript, MySQL, portfolio, web applications, frontend development, backend development",
  applicationName: "My Portfolio",
  authors: {
    name: "Abdennour Tadjer",
    url: "https://abdennour-tadjer.vercel.app",
  },
  generator: "Next.js",
  creator: "Abdennour Tadjer",
  robots: "index, follow",
  openGraph: {
    title: "Abdennour Tadjer - Software Developer Portfolio",
    description:
      "Discover the projects and skills of Abdennour Tadjer, a software developer specializing in web applications using PHP, Laravel, JavaScript, and MySQL.",
    type: "website",
    url: "https://abdennour-tadjer.vercel.app",
    images: "/preview-image.png",
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        /> */}
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
        <Navbar />
        {children}
        <Toaster richColors />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
