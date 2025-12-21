import type { Metadata } from "next";

/**
 * Helpers para metadata básicos do site FMP
 */

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
}

export function generateMetadata({
  title,
  description,
  path,
}: SEOProps): Metadata {
  const siteName = "FMP - Faculdade de Direito";
  const defaultTitle = siteName;
  const defaultDescription =
    "Faculdade de Direito da Fundação Escola Superior do Ministério Público";

  const finalTitle = title
    ? `${title} | ${siteName}`
    : defaultTitle;
  const finalDescription = description || defaultDescription;
  const url = path
    ? `https://fmp.edu.br${path}`
    : "https://fmp.edu.br";

  return {
    title: finalTitle,
    description: finalDescription,
    openGraph: {
      title: finalTitle,
      description: finalDescription,
      url,
      siteName,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description: finalDescription,
    },
  };
}

