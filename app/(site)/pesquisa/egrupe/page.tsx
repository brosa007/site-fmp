import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "EGRUPE",
  description: "EGRUPE da FMP",
  path: "/pesquisa/egrupe",
});

export default function EGRUPEPage() {
  return (
    <PlaceholderPage
      title="EGRUPE"
      description="Página sobre EGRUPE"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Pesquisa", href: "/pesquisa" },
        { label: "EGRUPE" },
      ]}
    />
  );
}

