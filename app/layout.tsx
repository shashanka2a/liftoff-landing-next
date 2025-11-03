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
    default: "Liftoff Landing",
    template: "%s | Liftoff Landing",
  },
  description: "Launch your brand to the moon — modern agency landing page.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Liftoff Landing",
    description:
      "We craft digital experiences that transcend the ordinary. Launch your brand to the moon.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Liftoff Landing",
      },
    ],
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
