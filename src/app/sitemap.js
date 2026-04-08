import { locales } from "@/i18n/config";
import { SITE_URL } from "@/lib/seo";

export default function sitemap() {
    const now = new Date();

    return locales.map((locale) => ({
        url: `${SITE_URL}/${locale}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: locale === "en" ? 1 : 0.9,
    }));
}
