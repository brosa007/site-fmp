import Link from "next/link";
import { navigationConfig } from "@/app/_lib/navigation";

/**
 * Header - Cabeçalho principal do site
 * Usa a configuração centralizada de navegação
 */
export function Header() {
  return (
    <header className="border-b bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg">
            <span>FMP</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navigationConfig.map((group) => (
              <Link
                key={group.href || group.label}
                href={group.href || "#"}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {group.label}
              </Link>
            ))}
          </nav>

          <div className="md:hidden">
            <button
              type="button"
              className="p-2"
              aria-label="Abrir menu"
              aria-expanded="false"
            >
              <span className="sr-only">Menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

