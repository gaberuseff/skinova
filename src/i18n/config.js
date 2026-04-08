export const locales = ["en", "ar"];

export const defaultLocale = "en";

export function isValidLocale(locale) {
    return locales.includes(locale);
}

export function isRtlLocale(locale) {
    return locale === "ar";
}

export function normalizeLocale(locale) {
    return isValidLocale(locale) ? locale : defaultLocale;
}
