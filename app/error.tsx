"use client";

import { useEffect } from "react";
import { Button } from "@/app/_components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Algo deu errado</h1>
      <p className="text-muted-foreground mb-8">
        Ocorreu um erro ao carregar esta página.
      </p>
      <Button onClick={reset}>Tentar novamente</Button>
    </div>
  );
}

