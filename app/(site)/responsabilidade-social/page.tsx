import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Responsabilidade Social",
  description: "Responsabilidade Social da FMP",
  path: "/responsabilidade-social",
});

export default function ResponsabilidadeSocialPage() {
  return (
    <PlaceholderPage
      title="Responsabilidade Social"
      description="Página sobre responsabilidade social"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Responsabilidade Social" },
      ]}
    />
  );
}

