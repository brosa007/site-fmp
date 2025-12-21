import Link from "next/link";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";

interface PlaceholderPageProps {
  title: string;
  description?: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
  children?: Array<{ label: string; href: string }>;
}

/**
 * Componente helper para criar páginas placeholder
 */
export function PlaceholderPage({
  title,
  description,
  breadcrumbs = [],
  children = [],
}: PlaceholderPageProps) {
  return (
    <div>
      {breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      {description && (
        <p className="text-muted-foreground mb-8 text-lg">{description}</p>
      )}
      {children.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Páginas relacionadas</h2>
          <ul className="space-y-2">
            {children.map((child) => (
              <li key={child.href}>
                <Link
                  href={child.href}
                  className="text-primary hover:underline"
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

