import Link from "next/link";
import { navigationConfig } from "@/app/_lib/navigation";

/**
 * Footer - Rodapé do site
 * Usa a configuração centralizada de navegação
 */
export function Footer() {
  return (
    <footer className="border-t bg-muted/50 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {navigationConfig.map((group) => (
            <div key={group.href || group.label}>
              <h3 className="font-semibold mb-4">
                {group.href ? (
                  <Link
                    href={group.href}
                    className="hover:text-primary transition-colors"
                  >
                    {group.label}
                  </Link>
                ) : (
                  group.label
                )}
              </h3>
              {group.children && (
                <ul className="space-y-2 text-sm">
                  {group.children.slice(0, 5).map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} FMP - Faculdade de Direito. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

