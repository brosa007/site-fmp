import { Footer } from "@/app/_components/Footer";
import { Header } from "@/app/_components/Header";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col py-4">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
