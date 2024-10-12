import { useLocale } from "next-intl";

export default function Project() {
  const locale = useLocale();

  let MDXContent;
  switch (locale) {
    case "en":
      MDXContent = require("./en.mdx").default;
      break;
    case "fr":
      MDXContent = require("./fr.mdx").default;
      break;
    case "ar": 
      MDXContent = require("./ar.mdx").default;
      break;
  }

  return <MDXContent />;
}
