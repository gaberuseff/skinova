import { NextResponse } from "next/server";
import { defaultLocale, locales } from "@/i18n/config";

function hasLocale(pathname) {
    return locales.some(
        (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
    );
}

export function middleware(request) {
    const { pathname } = request.nextUrl;

    if (
        pathname.startsWith("/_next") ||
        pathname.startsWith("/api") ||
        pathname.includes(".")
    ) {
        return NextResponse.next();
    }

    if (hasLocale(pathname)) {
        return NextResponse.next();
    }

    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;

    return NextResponse.redirect(url);
}

export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"],
};
