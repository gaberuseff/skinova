import { defaultLocale, normalizeLocale } from "./config";

const dictionaries = {
    en: {
        metadata: {
            title:
                "Skinova Clinic - Best Aesthetic & Skin Clinic in Giza and 6th of October",
            description:
                "Skinova Clinic is a leading aesthetic and skin clinic in Giza and 6th of October City offering laser hair removal, Botox, fillers, chemical peels, Hydrafacial, and acne scar treatments.",
        },
        navbar: {
            brand: "Skinova",
            links: [
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Works", href: "#works" },
                { label: "Contact", href: "#contact" },
            ],
            bookNow: "Book Now",
            mainNavigation: "Main navigation",
            switchLabel: "عربى",
            switchHref: "/ar",
        },
        footer: {
            links: [
                { title: "About", href: "#about" },
                { title: "Contact", href: "#contact" },
                { title: "Works", href: "#works" },
            ],
            rights: "Skinova, All rights reserved",
            linkedInAria: "LinkedIn",
            facebookAria: "Facebook",
        },
        madeBy: {
            prefix: "Developed By",
        },
        hero: {
            logoAlt: "Skinova Clinic Logo",
            logoText: "Skinova Clinic",
            slogan: "ADVANCED AESTHETIC CARE",
            title: "Reveal Your Best Skin",
            titleAccent: "With Expert Hands",
            subtitle:
                "From personalized facials to laser treatments and injectables, we craft safe, natural-looking results tailored to your goals.",
            ctaPrimary: "Book Now",
            ctaSecondary: "Location",
            contactInfo: {
                website: "gaberuseff.com",
                phone: "+20 (1500) 223-440",
                address: "6th of October City, Giza, Egypt",
            },
        },
        features: {
            eyebrow: "Why Skinova",
            title: "Beauty Care Built Around You",
            items: [
                {
                    title: "Natural-Looking Results",
                    description:
                        "Treatments are designed to enhance your beauty without changing who you are.",
                },
                {
                    title: "Individually Tailored",
                    description:
                        "Every skin plan is built around your goals, routine, and treatment history.",
                },
                {
                    title: "Safety-First Expertise",
                    description:
                        "Our team follows evidence-based protocols with medical-grade precision.",
                },
                {
                    title: "Collaborative Care",
                    description:
                        "We explain each step clearly and make decisions together with you.",
                },
            ],
        },
        about: {
            founderLabel: "Founder, Skinova Clinic",
            doctorName: "Dr. Gaber Usef",
            eyebrow: "Why Patients Trust Skinova",
            title: "Expert Care Backed By Experience",
            paragraphOne:
                "We believe great skin care starts with clear communication, honest guidance, and treatment choices that prioritize your safety and long-term skin health.",
            paragraphTwo:
                "Dr. Yousef combines medical precision with aesthetic balance to deliver natural-looking results that respect your features, skin type, and treatment goals.",
            highlights: [
                {
                    title: "Board-Certified Expertise",
                    description:
                        "Led by a licensed aesthetic physician focused on safe, natural outcomes.",
                },
                {
                    title: "Advanced Clinical Training",
                    description:
                        "Continuous training in injectables, lasers, and skin rejuvenation protocols.",
                },
                {
                    title: "Personalized Treatment Plans",
                    description:
                        "Every recommendation is tailored to your skin condition, goals, and lifestyle.",
                },
            ],
        },
        services: {
            eyebrow: "Our Services",
            title: "Advanced Treatments For Every Skin Need",
            description:
                "From prevention to correction, Skinova Clinic offers evidence-based aesthetic services tailored for natural, lasting results.",
            items: [
                {
                    title: "Hydra Facial Therapy",
                    description:
                        "Deep cleanse, hydrate, and refresh your skin for a smooth and radiant finish.",
                },
                {
                    title: "Chemical Peels",
                    description:
                        "Target uneven tone, acne marks, and dull texture with medically guided peel plans.",
                },
                {
                    title: "Laser Hair Removal",
                    description:
                        "Gentle, long-term hair reduction with technology suited to your skin type.",
                },
                {
                    title: "Botox & Fillers",
                    description:
                        "Natural-looking facial balancing that softens lines and restores youthful volume.",
                },
                {
                    title: "Acne & Scar Programs",
                    description:
                        "Customized treatment combinations for active acne control and scar improvement.",
                },
                {
                    title: "Skin Consultation",
                    description:
                        "Comprehensive assessment and a clear treatment roadmap designed around your goals.",
                },
            ],
        },
        beforeAfter: {
            title: "Before and After",
            description:
                "See the transformation for yourself with our interactive slider.",
            altBefore: "Before treatment",
            altAfter: "After treatment",
        },
        gallery: {
            title: "Image Gallery",
            description:
                "Explore our portfolio of stunning transformations and radiant skin results. Each image tells a story of beauty, confidence, and the art of skincare.",
            imageAltPrefix: "Skinova work",
        },
        testimonials: {
            next: "Next",
            items: [
                {
                    quote:
                        "My skin looked calmer and brighter within weeks. The team explained every step and made me feel completely at ease.",
                    name: "Nour Hassan",
                    role: "Acne Care Patient",
                    company: "Skinova Clinic",
                    image: "/testimonials/user-3.webp",
                },
                {
                    quote:
                        "From consultation to follow-up, everything was professional and personalized. I finally found a clinic I can trust.",
                    name: "Omar Khaled",
                    role: "Laser Treatment Patient",
                    company: "Skinova Clinic",
                    image: "/testimonials/user-2.webp",
                },
                {
                    quote:
                        "The doctors are attentive, the clinic is spotless, and my results feel natural. I recommend Skinova to everyone.",
                    name: "Layla Mahmoud",
                    role: "Skin Rejuvenation Patient",
                    company: "Skinova Clinic",
                    image: "/testimonials/user-1.webp",
                },
            ],
        },
        cta: {
            eyebrow: "Let\'s Make Your Skin Shine",
            title: "Ready to Transform Your Skin?",
            description:
                "Book your appointment today and experience the Skinova difference!",
            button: "Book Now",
        },
        contact: {
            eyebrow: "Contact & Visit",
            title: "Find Us Easily",
            description:
                "Visit Skinova Clinic for personalized skin treatments in a calm, professional environment.",
            locationTitle: "Location",
            openMaps: "Open in Google Maps",
            workingHoursTitle: "Working Hours",
            getInTouchTitle: "Get In Touch",
            getInTouchDescription:
                "Reach out anytime and our team will guide you to the most suitable treatment plan.",
            location: "6th of October City, Giza, Egypt",
            workingHours: [
                { day: "Saturday - Thursday", time: "11:00 AM - 09:00 PM" },
                { day: "Friday", time: "By Appointment" },
            ],
            items: [
                {
                    title: "Phone",
                    value: "+20 1500 223 440",
                    href: "tel:+201500223440",
                    icon: "phone",
                },
                {
                    title: "WhatsApp",
                    value: "Chat with us instantly",
                    href: "https://wa.me/201500223440",
                    icon: "whatsapp",
                },
                {
                    title: "Email",
                    value: "dev.gaber@gmail.com",
                    href: "mailto:dev.gaber@gmail.com",
                    icon: "email",
                },
            ],
        },
    },
    ar: {
        metadata: {
            title: "عيادة سكينوفا - أفضل عيادة تجميل في الجيزة و6 أكتوبر",
            description:
                "عيادة سكينوفا من أفضل عيادات التجميل في الجيزة و6 أكتوبر، نقدم ليزر إزالة الشعر، بوتوكس، فيلر، تقشير كيميائي، هيدرا فيشل، وعلاج آثار الحبوب بخطط طبية متخصصة.",
        },
        navbar: {
            brand: "سكينوفا",
            links: [
                { label: "من نحن", href: "#about" },
                { label: "الخدمات", href: "#services" },
                { label: "الأعمال", href: "#works" },
                { label: "تواصل", href: "#contact" },
            ],
            bookNow: "احجزي الآن",
            mainNavigation: "القائمة الرئيسية",
            switchLabel: "English",
            switchHref: "/en",
        },
        footer: {
            links: [
                { title: "من نحن", href: "#about" },
                { title: "تواصل", href: "#contact" },
                { title: "الأعمال", href: "#works" },
            ],
            rights: "سكينوفا، جميع الحقوق محفوظة",
            linkedInAria: "لينكد إن",
            facebookAria: "فيسبوك",
        },
        madeBy: {
            prefix: "تم التطوير بواسطة",
        },
        hero: {
            logoAlt: "شعار عيادة سكينوفا",
            logoText: "عيادة سكينوفا",
            slogan: "عناية تجميلية متقدمة",
            title: "اكتشفي أفضل نسخة من بشرتك",
            titleAccent: "مع خبرة طبية موثوقة",
            subtitle:
                "من جلسات البشرة المخصصة إلى الليزر والحقن التجميلية، نقدم نتائج طبيعية وآمنة تناسب أهدافك.",
            ctaPrimary: "احجزي الآن",
            ctaSecondary: "الموقع",
            contactInfo: {
                website: "gaberuseff.com",
                phone: "+20 (1500) 223-440",
                address: "مدينة 6 أكتوبر، الجيزة، مصر",
            },
        },
        features: {
            eyebrow: "لماذا سكينوفا",
            title: "عناية جمالية مصممة لك",
            items: [
                {
                    title: "نتائج طبيعية",
                    description: "نركز على إبراز جمالك بدون تغيير ملامحك الأساسية.",
                },
                {
                    title: "خطة مخصصة لكل حالة",
                    description: "كل برنامج علاجي يُبنى حسب أهدافك وروتينك وتاريخك العلاجي.",
                },
                {
                    title: "خبرة طبية آمنة",
                    description: "نلتزم ببروتوكولات طبية دقيقة قائمة على الأدلة العلمية.",
                },
                {
                    title: "رعاية مشتركة",
                    description: "نشرح كل خطوة بوضوح ونتخذ القرار معك في كل مرحلة.",
                },
            ],
        },
        about: {
            founderLabel: "مؤسس عيادة سكينوفا",
            doctorName: "د. جابر يوسف",
            eyebrow: "لماذا يثق المرضى في سكينوفا",
            title: "رعاية خبيرة مدعومة بالتجربة",
            paragraphOne:
                "نؤمن أن العناية الفعالة بالبشرة تبدأ بالتواصل الواضح والإرشاد الصادق وخيارات علاج تضع أمانك وصحة بشرتك أولاً.",
            paragraphTwo:
                "يجمع د. يوسف بين الدقة الطبية والتوازن الجمالي لتقديم نتائج طبيعية تناسب ملامحك ونوع بشرتك وأهدافك.",
            highlights: [
                {
                    title: "خبرة معتمدة",
                    description: "إشراف طبيب تجميل مرخص يركز على نتائج آمنة وطبيعية.",
                },
                {
                    title: "تدريب سريري متقدم",
                    description:
                        "تدريب مستمر على الحقن التجميلية والليزر وبروتوكولات تجديد البشرة.",
                },
                {
                    title: "خطط علاج شخصية",
                    description: "كل توصية علاجية مصممة حسب حالة بشرتك ونمط حياتك.",
                },
            ],
        },
        services: {
            eyebrow: "خدماتنا",
            title: "علاجات متقدمة لكل احتياج بشرتك",
            description:
                "من الوقاية إلى التصحيح، تقدم سكينوفا خدمات تجميلية طبية بنتائج طبيعية تدوم.",
            items: [
                {
                    title: "جلسات هيدرا فيشل",
                    description: "تنظيف عميق وترطيب فعال يمنح بشرتك نعومة وإشراقة واضحة.",
                },
                {
                    title: "التقشير الكيميائي",
                    description: "علاج التصبغات وآثار الحبوب وملمس البشرة ببروتوكولات طبية.",
                },
                {
                    title: "إزالة الشعر بالليزر",
                    description: "تقليل طويل المدى للشعر بتقنيات مناسبة لنوع بشرتك.",
                },
                {
                    title: "بوتوكس وفيلر",
                    description:
                        "توازن جمالي طبيعي يخفف الخطوط ويعيد امتلاء الوجه بشكل متناسق.",
                },
                {
                    title: "برامج علاج الحبوب والندبات",
                    description: "خطط علاج مركبة للتحكم في الحبوب وتحسين مظهر الندبات.",
                },
                {
                    title: "استشارة البشرة",
                    description: "تقييم شامل وخطة واضحة مبنية على أهدافك واحتياجاتك.",
                },
            ],
        },
        beforeAfter: {
            title: "قبل وبعد",
            description: "شاهدي الفرق بنفسك من خلال سلايدر تفاعلي للنتائج.",
            altBefore: "قبل العلاج",
            altAfter: "بعد العلاج",
        },
        gallery: {
            title: "معرض الصور",
            description:
                "اكتشفي نماذج حقيقية لنتائج عملنا. كل صورة تحكي قصة ثقة وجمال وعناية دقيقة بالبشرة.",
            imageAltPrefix: "نتائج سكينوفا",
        },
        testimonials: {
            next: "التالي",
            items: [
                {
                    quote:
                        "بشرتي أصبحت أهدأ وأنضر خلال أسابيع قليلة. الفريق شرح لي كل خطوة وكنت مرتاحة طوال الرحلة.",
                    name: "نور حسن",
                    role: "مريضة علاج حب الشباب",
                    company: "عيادة سكينوفا",
                    image: "/testimonials/user-3.webp",
                },
                {
                    quote:
                        "من الاستشارة للمتابعة كل شيء كان احترافي ومخصص لحالتي. أخيراً وجدت عيادة أثق بها.",
                    name: "عمر خالد",
                    role: "مريض علاج ليزر",
                    company: "عيادة سكينوفا",
                    image: "/testimonials/user-2.webp",
                },
                {
                    quote:
                        "الأطباء مهتمون جداً، والعيادة نظيفة، والنتائج طبيعية جداً. أنصح كل شخص بزيارة سكينوفا.",
                    name: "ليلى محمود",
                    role: "مريضة تجديد البشرة",
                    company: "عيادة سكينوفا",
                    image: "/testimonials/user-1.webp",
                },
            ],
        },
        cta: {
            eyebrow: "خلّي بشرتك تلمع",
            title: "جاهزة لتغيير بشرتك؟",
            description: "احجزي موعدك اليوم وعيشي تجربة سكينوفا بنفسك.",
            button: "احجزي الآن",
        },
        contact: {
            eyebrow: "تواصل وزيارة",
            title: "تجدي عيادتنا بسهولة",
            description:
                "زوري عيادة سكينوفا للحصول على علاجات بشرة مخصصة في بيئة هادئة واحترافية.",
            locationTitle: "العنوان",
            openMaps: "افتحي في خرائط جوجل",
            workingHoursTitle: "مواعيد العمل",
            getInTouchTitle: "تواصلي معنا",
            getInTouchDescription:
                "تواصلي في أي وقت وسيرشدك فريقنا إلى أنسب خطة علاجية لك.",
            location: "مدينة 6 أكتوبر، الجيزة، مصر",
            workingHours: [
                { day: "السبت - الخميس", time: "11:00 ص - 09:00 م" },
                { day: "الجمعة", time: "بالحجز المسبق" },
            ],
            items: [
                {
                    title: "الهاتف",
                    value: "+20 1500 223 440",
                    href: "tel:+201500223440",
                    icon: "phone",
                },
                {
                    title: "واتساب",
                    value: "تحدثي معنا فوراً",
                    href: "https://wa.me/201500223440",
                    icon: "whatsapp",
                },
                {
                    title: "البريد",
                    value: "dev.gaber@gmail.com",
                    href: "mailto:dev.gaber@gmail.com",
                    icon: "email",
                },
            ],
        },
    },
};

export function getDictionary(locale) {
    const normalizedLocale = normalizeLocale(locale);
    return dictionaries[normalizedLocale] || dictionaries[defaultLocale];
}
