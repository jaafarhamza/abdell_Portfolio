import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { PageTransition } from "@/components/ui/PageTransition";
import { FloatingContactSidebar } from "@/components/ui/FloatingContactSidebar";
import { StructuredData } from "@/components/StructuredData";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const mellenya = localFont({
  src: [
    {
      path: "../public/fonts/Mellenya FREE.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-dancing",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://abdelldesign.vercel.app"
  ),
  title: {
    default: "Abdell Design | Professional Thumbnail Designer",
    template: "%s | Abdell Design",
  },
  description:
    "Professional thumbnail designer specializing in crypto, trading, lifestyle, motivation, podcast, and reaction thumbnails for YouTube creators. Transform your content with eye-catching designs that boost click-through rates.",
  keywords: [
    "thumbnail designer",
    "YouTube thumbnails",
    "graphic design",
    "crypto thumbnails",
    "trading thumbnails",
    "podcast thumbnails",
    "lifestyle thumbnails",
    "motivation thumbnails",
    "professional designer",
    "YouTube creator",
    "content creator",
    "thumbnail design service",
    "youtube image",
  ],
  authors: [{ name: "Abdell", url: "https://abdelldesign.vercel.app" }],
  creator: "Abdell Design",
  publisher: "Abdell Design",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abdelldesign.vercel.app",
    title: "Abdell Design | Professional Thumbnail Designer",
    description:
      "Professional thumbnail designer specializing in crypto, trading, lifestyle, and podcast thumbnails for YouTube creators",
    siteName: "Abdell Design",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Abdell Design Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdell Design | Professional Thumbnail Designer",
    description:
      "Professional thumbnail designer specializing in crypto, trading, lifestyle, and podcast thumbnails",
    images: ["/og-image.jpg"],
    creator: "@yourtwitterhandle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://abdelldesign.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
        {/* Preload custom font for better performance */}
        <link
          rel="preload"
          href="/fonts/Mellenya FREE.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${montserrat.variable} ${mellenya.variable} antialiased font-sans`}
      >
        <LoadingScreen />
        <Header />
        <FloatingContactSidebar />
        <PageTransition>
          <main>{children}</main>
          <Footer />
        </PageTransition>
      </body>
    </html>
  );
}
