import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {Handshake, ScanFace, ShieldCheck, Sparkles} from "lucide-react";

const featureItems = [
  {
    title: "Natural-Looking Results",
    description:
      "Treatments are designed to enhance your beauty without changing who you are.",
    icon: Sparkles,
  },
  {
    title: "Individually Tailored",
    description:
      "Every skin plan is built around your goals, routine, and treatment history.",
    icon: ScanFace,
  },
  {
    title: "Safety-First Expertise",
    description:
      "Our team follows evidence-based protocols with medical-grade precision.",
    icon: ShieldCheck,
  },
  {
    title: "Collaborative Care",
    description:
      "We explain each step clearly and make decisions together with you.",
    icon: Handshake,
  },
];

function FeatureGlyph({Icon}) {
  return (
    <div className="relative grid h-20 w-20 place-items-center">
      <Icon className="relative h-9 w-9 text-primary" strokeWidth={1.8} />
    </div>
  );
}

function Features() {
  return (
    <section className="relative py-14 md:py-20">
      <MaxWidthWrapper>
        <div className="relative overflow-hidden  px-5 py-10 sm:px-7 md:px-10 md:py-14">
          <div className="pointer-events-none absolute -left-18 bottom-4 h-64 w-64 rounded-full border border-primary/10" />
          <div className="pointer-events-none absolute -right-22 top-0 h-72 w-72 rounded-full border border-primary/10" />

          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary/70 uppercase">
              Why Skinova
            </p>
            <h2 className="font-heading text-3xl text-primary sm:text-4xl">
              Beauty Care Built Around You
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:gap-x-6">
            {featureItems.map((item, index) => (
              <div key={item.title} className="contents">
                <div className="flex flex-col items-center text-center">
                  <FeatureGlyph Icon={item.icon} />
                  <h3 className="mt-3 font-heading text-lg leading-tight text-primary sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-68 text-xs leading-relaxed text-primary/75 sm:text-[0.95rem]">
                    {item.description}
                  </p>
                </div>

                {index < featureItems.length - 1 ? (
                  <div className="hidden items-center justify-center text-4xl text-primary/50 lg:flex">
                    +
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default Features;
