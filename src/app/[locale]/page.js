import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import WorksImages from "@/components/home/WorksImages";
import CallToAction from "@/components/home/CallToAction";
import Contact from "@/components/home/Contact";
import BeforeAndAfter from "@/components/home/BeforeAndAfter";
import About from "@/components/home/About";
import { getDictionary } from "@/i18n/dictionaries";
import { isRtlLocale } from "@/i18n/config";
import { SITE_URL } from "@/lib/seo";

export default async function HomePage({ params }) {
    const { locale } = await params;
    const dictionary = getDictionary(locale);
    const isRtl = isRtlLocale(locale);
    const phoneItem = dictionary.contact.items.find((item) => item.icon === "phone");
    const whatsappItem = dictionary.contact.items.find((item) => item.icon === "whatsapp");

    const clinicSchema = {
        "@context": "https://schema.org",
        "@type": "MedicalClinic",
        name: locale === "ar" ? "عيادة سكينوفا" : "Skinova Clinic",
        url: `${SITE_URL}/${locale}`,
        image: `${SITE_URL}/hero.webp`,
        description: dictionary.metadata.description,
        telephone: phoneItem?.value,
        address: {
            "@type": "PostalAddress",
            streetAddress: dictionary.contact.location,
            addressLocality: locale === "ar" ? "مدينة 6 أكتوبر" : "6th of October City",
            addressRegion: locale === "ar" ? "الجيزة" : "Giza",
            addressCountry: locale === "ar" ? "EG" : "EG",
        },
        contactPoint: [
            {
                "@type": "ContactPoint",
                contactType: "customer service",
                telephone: phoneItem?.value,
                availableLanguage: locale === "ar" ? ["ar", "en"] : ["en", "ar"],
            },
        ],
        areaServed: [
            {
                "@type": "City",
                name: locale === "ar" ? "مدينة 6 أكتوبر" : "6th of October City",
            },
            {
                "@type": "AdministrativeArea",
                name: locale === "ar" ? "الجيزة" : "Giza",
            },
            {
                "@type": "Country",
                name: locale === "ar" ? "مصر" : "Egypt",
            },
        ],
        medicalSpecialty: "Dermatologic",
        knowsAbout: locale === "ar"
            ? [
                "عيادة تجميل",
                "إزالة الشعر بالليزر",
                "بوتوكس",
                "فيلر",
                "تقشير كيميائي",
                "هيدرا فيشل",
                "علاج آثار الحبوب",
            ]
            : [
                "Aesthetic clinic",
                "Laser hair removal",
                "Botox",
                "Fillers",
                "Chemical peel",
                "Hydrafacial",
                "Acne scar treatment",
            ],
        sameAs: whatsappItem?.href ? [whatsappItem.href] : undefined,
        inLanguage: locale,
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
            />
            <Hero content={dictionary.hero} isRtl={isRtl} />
            <Features content={dictionary.features} />
            <About content={dictionary.about} />
            <Services content={dictionary.services} />
            <BeforeAndAfter content={dictionary.beforeAfter} />
            <WorksImages content={dictionary.gallery} />
            <Testimonials content={dictionary.testimonials} />
            <CallToAction content={dictionary.cta} />
            <Contact content={dictionary.contact} />
        </>
    );
}
