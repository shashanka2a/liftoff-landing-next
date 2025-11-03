import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Liftoff — Design & Development Agency",
    template: "%s | Liftoff",
  },
  description:
    "Liftoff is a design and development agency crafting high-conversion websites, premium brand identities, and delightful product experiences.",
  keywords: [
    "design agency",
    "web design",
    "branding",
    "ui ux",
    "product design",
    "web development",
    "landing page design",
    "design system",
    "creative agency",
    "San Francisco agency",
  ],
  authors: [{ name: "Liftoff" }],
  creator: "Liftoff",
  publisher: "Liftoff",
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
  openGraph: {
    title: "Liftoff — Design & Development Agency",
    description:
      "We design brands and build websites that convert. Strategy, design systems, and full-stack development for modern companies.",
    type: "website",
    url: "/",
    siteName: "Liftoff",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Liftoff — Design & Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Liftoff — Design & Development Agency",
    description:
      "High-impact brand, web, and product design with full-stack development to ship faster.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          {children}
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
