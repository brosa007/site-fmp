import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import Link from "next/link";

interface PlaceholderPageProps {
  title: string;
  description?: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
  links?: Array<{ label: string; href: string }>;
}

export function PlaceholderPage({
  title,
  description,
  breadcrumbs = [],
  links = [],
}: PlaceholderPageProps) {
  return (
    <div>
      {breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}
      <h1 className="mb-4 text-4xl font-bold">{title}</h1>
      {description && (
        <p className="text-muted-foreground mb-8 text-lg">{description}</p>
      )}
      {links.length > 0 && (
        <div className="mt-8">
          <h2 className="mb-4 text-2xl font-semibold">Páginas relacionadas</h2>
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-primary hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
