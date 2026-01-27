import { ROUTES } from "@/app/_lib/routes";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/**
 * Footer - Rodapé do site
 * Design baseado na identidade visual da FMP
 */
export function Footer() {
  const TikTokIcon = () => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
    </svg>
  );

  const YouTubeIcon = () => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );

  const XIcon = () => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "#",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "#",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
    },
    {
      name: "TikTok",
      icon: TikTokIcon,
      href: "#",
    },
    {
      name: "YouTube",
      icon: YouTubeIcon,
      href: "#",
    },
    {
      name: "X (Twitter)",
      icon: XIcon,
      href: "#",
    },
  ];

  const quickLinks = [
    {
      label: "CPA",
      href: ROUTES.SOBRE_A_FMP.COMISSAO_PROPRIA_DE_AVALIACAO.BASE,
    },
    {
      label: "Editora",
      href: "#",
    },
    {
      label: "Ouvidoria",
      href: ROUTES.SOBRE_A_FMP.FACULDADE.OUVIDORIA,
    },
  ];

  return (
    <footer className="bg-fmp-black py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo e Redes Sociais */}
          <div className="flex flex-col">
            <Link href="/" className="mb-6 inline-block">
              <Image
                src="/logo-fmp-branco.png"
                alt="FMP"
                width={100}
                height={100}
              />
            </Link>

            {/* Redes Sociais */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                const isLucideIcon =
                  IconComponent === Linkedin ||
                  IconComponent === Facebook ||
                  IconComponent === Instagram;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-vermelho-escuro)] transition-opacity hover:opacity-70"
                    aria-label={social.name}
                  >
                    {isLucideIcon ? (
                      <IconComponent className="h-6 w-6" />
                    ) : (
                      <IconComponent />
                    )}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-[var(--color-cinza-escuro)]">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-[var(--color-vermelho-escuro)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Fale Conosco */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-[var(--color-cinza-escuro)]">
              Fale Conosco
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-[var(--color-vermelho-escuro)]" />
                <a
                  href="mailto:contato@fmp.com.br"
                  className="text-muted-foreground transition-colors hover:text-[var(--color-vermelho-escuro)]"
                >
                  contato@fmp.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-[var(--color-vermelho-escuro)]" />
                <a
                  href="tel:+555130276550"
                  className="text-muted-foreground transition-colors hover:text-[var(--color-vermelho-escuro)]"
                >
                  (51) 3027 6550
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-[var(--color-vermelho-escuro)]" />
                <address className="text-muted-foreground not-italic">
                  Rua Cel. Genuíno, 421 - Centro Histórico
                  <br />
                  Porto Alegre/RS 90010-350
                </address>
              </li>
            </ul>
          </div>

          {/* QR Code e-MEC */}
          <div className="flex flex-col items-start lg:items-end">
            <Image
              src="/selo-e-mec.png"
              alt="Selo e-MEC"
              width={150}
              height={150}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
