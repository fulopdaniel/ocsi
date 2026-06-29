import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCall from "@/components/FloatingCall";

// Közös keret a programozott SEO-oldalakhoz: fejléc + tartalom + lábléc.
export default function SeoShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="space-y-16 pb-20 sm:space-y-20">{children}</main>
      <Footer />
      <FloatingCall />
    </>
  );
}
