"use client";

import { navigationConfig } from "@/app/_lib/navigation";
import Image from "next/image";
import Link from "next/link";
import { NavDropdown } from "./NavDropdown";
import { Button } from "./ui/button";

export function Header() {
  const mainNavItems = navigationConfig.filter(
    (item) => item.label !== "Conteúdos" && item.label !== "Minha FMP",
  );

  const minhaFmpLink = navigationConfig.find(
    (item) => item.label === "Minha FMP",
  );

  return (
    <header className="absolute top-0 right-0 left-0 z-50 w-full py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto w-[80%]">
          <div className="absolute inset-0 rounded-4xl bg-white/6 backdrop-blur-md" />
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <Image src="/logo-fmp.png" alt="FMP" width={100} height={100} />

              <nav className="hidden items-center gap-8 lg:flex">
                <Link
                  href="/"
                  className="text-sm font-medium text-white transition-opacity hover:opacity-80"
                >
                  Home
                </Link>
                {mainNavItems.map((group) => (
                  <NavDropdown key={group.label} group={group} />
                ))}
              </nav>

              <div className="flex items-center gap-4">
                {minhaFmpLink && (
                  <Button
                    asChild
                    className="hidden border-0 bg-gradient-to-r from-[var(--color-vermelho-escuro)] to-[var(--color-vermelho-claro)] text-white shadow-lg hover:opacity-90 md:flex"
                  >
                    <Link href={minhaFmpLink.href || "#"}>
                      {minhaFmpLink.label}
                    </Link>
                  </Button>
                )}

                <button
                  type="button"
                  className="p-2 text-[#f2dfbb] transition-opacity hover:opacity-80 lg:hidden"
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
        </div>
      </div>
    </header>
  );
}
