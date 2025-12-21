import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Tribunal Didático",
  description: "Tribunal Didático do NPJ",
  path: "/ensino/graduacao/npj/tribunal-didatico",
});

export default function TribunalDidaticoPage() {
  return (
    <PlaceholderPage
      title="Tribunal Didático"
      description="Página sobre o Tribunal Didático"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ensino", href: "/ensino" },
        { label: "Graduação", href: "/ensino/graduacao" },
        { label: "NPJ", href: "/ensino/graduacao/npj" },
        { label: "Tribunal Didático" },
      ]}
    />
  );
}

