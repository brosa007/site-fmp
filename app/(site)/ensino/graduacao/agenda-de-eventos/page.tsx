import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Agenda de Eventos",
  description: "Agenda de eventos da graduação",
  path: "/ensino/graduacao/agenda-de-eventos",
});

export default function AgendaDeEventosPage() {
  return (
    <PlaceholderPage
      title="Agenda de Eventos"
      description="Página sobre a agenda de eventos"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ensino", href: "/ensino" },
        { label: "Graduação", href: "/ensino/graduacao" },
        { label: "Agenda de Eventos" },
      ]}
    />
  );
}

