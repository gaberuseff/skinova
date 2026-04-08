import {
  Cormorant_Garamond,
  Nunito_Sans,
  Lora,
  Cairo,
  Noto_Kufi_Arabic,
} from "next/font/google";
import "./globals.css";
import { ARABIC_SEO_KEYWORDS, ENGLISH_SEO_KEYWORDS, SITE_NAME, SITE_URL } from "@/lib/seo";

const clinicSans = Nunito_Sans({
  variable: "--font-clinic-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const clinicDisplay = Cormorant_Garamond({
  variable: "--font-clinic-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const arabicSans = Cairo({
  variable: "--font-clinic-arabic",
  subsets: ["arabic"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const arabicHeading = Noto_Kufi_Arabic({
  variable: "--font-clinic-arabic-heading",
  subsets: ["arabic"],
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Advanced Skin Clinic`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Skinova Clinic provides evidence-based skincare treatments, laser sessions, and injectables with a safety-first, personalized approach.",
  applicationName: SITE_NAME,
  authors: [{ name: "Dr. Gaber Usef" }],
  creator: "Dr. Gaber Usef",
  publisher: SITE_NAME,
  keywords: [
    ...ARABIC_SEO_KEYWORDS,
    ...ENGLISH_SEO_KEYWORDS,
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: `${SITE_NAME} | Advanced Skin Clinic`,
    description:
      "Personalized facials, laser care, injectables, and skin rejuvenation plans in 6th of October City.",
    siteName: SITE_NAME,
    images: [
      {
        url: "/hero.webp",
        width: 1200,
        height: 630,
        alt: "Skinova clinic hero image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Advanced Skin Clinic`,
    description:
      "Personalized facials, laser care, injectables, and skin rejuvenation plans in 6th of October City.",
    images: ["/hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      ar: "/ar",
      en: "/en",
      "x-default": "/ar",
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${clinicSans.className} ${clinicDisplay.className} ${lora.className} 
        ${arabicSans.className} ${arabicHeading.className} ${clinicSans.className}`}>
        {children}
      </body>
    </html>
  );
}
