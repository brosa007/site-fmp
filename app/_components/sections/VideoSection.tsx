"use client";

import { cn } from "@/app/_lib/utils";
import { useState } from "react";
import { Play } from "lucide-react";

interface VideoSectionProps {
  title?: string;
  subtitle?: string;
  videoUrl: string;
  thumbnail?: string;
  description?: string;
  className?: string;
}

/**
 * VideoSection - Seção de vídeo institucional
 * Componente reutilizável para exibir vídeos com thumbnail e player
 */
export function VideoSection({
  title,
  subtitle,
  videoUrl,
  thumbnail,
  description,
  className,
}: VideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Extrair ID do vídeo do YouTube se for URL do YouTube
  const getYouTubeEmbedUrl = (url: string) => {
    const youtubeRegex =
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(youtubeRegex);
    if (match) {
      return `https://www.youtube.com/embed/${match[1]}?autoplay=1`;
    }
    return url;
  };

  if (isPlaying) {
    return (
      <section className={cn("py-16 sm:py-20", className)}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {(title || subtitle) && (
            <div className="mb-12 text-center">
              {subtitle && (
                <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[var(--color-vermelho-escuro)]">
                  {subtitle}
                </p>
              )}
              {title && (
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
                  {title}
                </h2>
              )}
            </div>
          )}

          <div className="mx-auto max-w-4xl">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <iframe
                src={getYouTubeEmbedUrl(videoUrl)}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={title || "Vídeo institucional"}
              />
            </div>
            {description && (
              <p className="mt-4 text-center text-muted-foreground">
                {description}
              </p>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={cn("py-16 sm:py-20", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {subtitle && (
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[var(--color-vermelho-escuro)]">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
                {title}
              </h2>
            )}
          </div>
        )}

        <div className="mx-auto max-w-4xl">
          <div
            className="group relative aspect-video w-full cursor-pointer overflow-hidden rounded-lg"
            onClick={() => setIsPlaying(true)}
          >
            {thumbnail ? (
              <img
                src={thumbnail}
                alt={title || "Vídeo institucional"}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-r from-[var(--color-vermelho-escuro)] to-[var(--color-vermelho-claro)]">
                <Play className="h-20 w-20 text-white" fill="white" />
              </div>
            )}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity group-hover:bg-black/40">
              <div className="rounded-full bg-white/90 p-6 transition-transform group-hover:scale-110">
                <Play className="h-16 w-16 text-[var(--color-vermelho-escuro)]" fill="currentColor" />
              </div>
            </div>
          </div>
          {description && (
            <p className="mt-4 text-center text-muted-foreground">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

