import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Extensão",
  description: "Extensão da FMP",
  path: "/extensao",
});

export default function ExtensaoPage() {
  return (
    <PlaceholderPage
      title="Extensão"
      description="Página sobre extensão"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Extensão" }]}
    />
  );
}

