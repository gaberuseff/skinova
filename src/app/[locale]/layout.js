import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/footer";
import MadeBy from "@/components/MadeBy";
import { getDictionary } from "@/i18n/dictionaries";
import { isRtlLocale, isValidLocale, locales } from "@/i18n/config";
import {
    ARABIC_SEO_KEYWORDS,
    ENGLISH_SEO_KEYWORDS,
    getLocaleOg,
    SITE_NAME,
    SITE_URL,
} from "@/lib/seo";

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
    const { locale } = await params;

    if (!isValidLocale(locale)) {
        return {};
    }

    const dictionary = getDictionary(locale);
    const isArabic = locale === "ar";
    const localePath = `/${locale}`;

    return {
        title: dictionary.metadata.title,
        description: dictionary.metadata.description,
        keywords: isArabic
            ? [
                ...ARABIC_SEO_KEYWORDS,
                "افضل دكتور جلدية وتجميل في 6 اكتوبر",
                "عيادة تجميل نسائي في الجيزة",
                "تجميل البشرة في 6 اكتوبر",
                "Clinic cosmetology Giza",
            ]
            : [
                ...ENGLISH_SEO_KEYWORDS,
                "best cosmetic clinic in 6th of October City",
                "skin and laser clinic in Giza",
                "non-surgical facial rejuvenation Egypt",
                "Arabic aesthetic clinic in Giza",
            ],
        alternates: {
            canonical: localePath,
            languages: {
                en: "/en",
                ar: "/ar",
                "x-default": "/ar",
            },
        },
        openGraph: {
            type: "website",
            locale: getLocaleOg(locale),
            url: localePath,
            title: dictionary.metadata.title,
            description: dictionary.metadata.description,
            siteName: SITE_NAME,
            images: [
                {
                    url: `${SITE_URL}/hero.webp`,
                    width: 1200,
                    height: 630,
                    alt: isArabic ? "واجهة عيادة سكينوفا" : "Skinova Clinic hero",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: dictionary.metadata.title,
            description: dictionary.metadata.description,
            images: [`${SITE_URL}/hero.webp`],
        },
    };
}

export default async function LocaleLayout({ children, params }) {
    const { locale } = await params;

    if (!isValidLocale(locale)) {
        notFound();
    }

    const dictionary = getDictionary(locale);
    const isRtl = isRtlLocale(locale);

    return (
        <div lang={locale} dir={isRtl ? "rtl" : "ltr"} className="min-h-screen">
            <Navbar locale={locale} content={dictionary.navbar} />
            <main className="flex grainy-light flex-col bg-background min-h-screen">
                <div className="flex-1 flex flex-col h-full">{children}</div>
                <FooterSection locale={locale} content={dictionary.footer} />
                <MadeBy content={dictionary.madeBy} />
            </main>
        </div>
    );
}
