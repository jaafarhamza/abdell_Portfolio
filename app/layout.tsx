import type { Metadata } from "next";
import { Montserrat, Dancing_Script } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { PageTransition } from "@/components/ui/PageTransition";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdell Design | Professional Thumbnail Designer",
  description:
    "Portfolio of Abdell, a professional thumbnail designer specializing in crypto, trading, lifestyle, and podcast thumbnails. View my work and get in touch for your next project.",
  keywords: [
    "thumbnail design",
    "graphic design",
    "YouTube thumbnails",
    "crypto thumbnails",
    "trading thumbnails",
    "youtube image",
  ],
  authors: [{ name: "Abdell" }],
  openGraph: {
    title: "Abdell Design | Professional Thumbnail Designer",
    description:
      "Portfolio showcasing professional thumbnail designs for YouTube creators",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${dancingScript.variable} antialiased font-sans`}
      >
        <LoadingScreen />
        <Header />
        <PageTransition>
          <main>{children}</main>
          <Footer />
        </PageTransition>
      </body>
    </html>
  );
}
