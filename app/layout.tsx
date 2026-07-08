import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: {
    default: `${company.name} | Medical Device Manufacturer, Vapi`,
    template: `%s | ${company.name}`,
  },
  description:
    "Rivicon Medpack Solutions — ISO 9001:2015 & ISO 13485:2016 certified medical device manufacturer based in Vapi, Gujarat. Manufacturer of Sterile Alcohol Prep Pads and Blood Lancets. Made in India.",
  keywords: [
    "medical device manufacturer India",
    "blood lancet manufacturer Gujarat",
    "alcohol prep pad manufacturer",
    "sterile swab India",
    "ISO 13485 medical device",
    "Vapi GIDC medical",
    "Rivicon Medpack",
  ],
  openGraph: {
    title: company.name,
    description: company.description,
    siteName: company.name,
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </ThemeProvider>
      </body>
    </html>
  );
}
