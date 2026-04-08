import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {Handshake, ScanFace, ShieldCheck, Sparkles} from "lucide-react";

const featureIcons = [Sparkles, ScanFace, ShieldCheck, Handshake];

function FeatureGlyph({Icon}) {
  return (
    <div className="relative grid h-20 w-20 place-items-center">
      <Icon className="relative h-9 w-9 text-primary" strokeWidth={1.8} />
    </div>
  );
}

function Features({content}) {
  const featureItems = content.items.map((item, index) => ({
    ...item,
    icon: featureIcons[index],
  }));

  return (
    <section className="relative py-14" id="features">
      <MaxWidthWrapper>
        <div className="relative overflow-hidden  px-5 py-10 sm:px-7 md:px-10 md:py-14">
          <div className="pointer-events-none absolute -left-18 bottom-4 h-64 w-64 rounded-full border border-primary/10" />
          <div className="pointer-events-none absolute -right-22 top-0 h-72 w-72 rounded-full border border-primary/10" />

          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary/70 uppercase">
              {content.eyebrow}
            </p>
            <h2 className="font-heading text-3xl text-primary sm:text-4xl">
              {content.title}
            </h2>
          </div>

          <ul
            className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:gap-x-6"
            role="list">
            {featureItems.map((item, index) => (
              <li key={item.title} className="contents">
                <article className="flex flex-col items-center text-center">
                  <FeatureGlyph Icon={item.icon} />
                  <h3 className="mt-3 font-heading text-lg leading-tight text-primary sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-68 text-xs leading-relaxed text-primary/75 sm:text-[0.95rem]">
                    {item.description}
                  </p>
                </article>

                {index < featureItems.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="hidden items-center justify-center text-4xl text-primary/50 lg:flex">
                    +
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default Features;
