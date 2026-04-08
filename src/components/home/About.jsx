import MaxWidthWrapper from "../MaxWidthWrapper";
import Image from "next/image";
import {BadgeCheck, GraduationCap, Stethoscope} from "lucide-react";

const highlightIcons = [BadgeCheck, GraduationCap, Stethoscope];

function About({content}) {
  const doctorHighlights = content.highlights.map((item, index) => ({
    ...item,
    icon: highlightIcons[index],
  }));

  return (
    <section className="relative py-14" id="about">
      <MaxWidthWrapper>
        <div className="relative overflow-hidden border border-primary/10 px-5 py-10 sm:px-7 md:px-10 md:py-14">
          <div className="pointer-events-none absolute -left-18 top-8 h-44 w-44 rounded-full border border-primary/10" />
          <div className="pointer-events-none absolute -right-16 -bottom-4 h-60 w-60 rounded-full bg-secondary/35 blur-2xl" />

          <div className="relative grid items-stretch gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
            <div className="relative min-h-90 overflow-hidden border border-primary/12 bg-primary/5 sm:min-h-115">
              <Image
                src="/doctor.webp"
                alt="Dr. Gaber Usef"
                fill
                quality={70}
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />

              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-primary/90 via-primary/55 to-transparent p-5 text-primary-foreground sm:p-6">
                <p className="text-xs tracking-[0.2em] uppercase text-primary-foreground/80">
                  {content.founderLabel}
                </p>
                <p className="mt-2 font-heading text-2xl sm:text-3xl">
                  {content.doctorName}
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary/70 uppercase">
                {content.eyebrow}
              </p>

              <h2 className="font-heading text-3xl text-primary sm:text-4xl">
                {content.title}
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-primary/75 sm:text-base">
                {content.paragraphOne}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-primary/75 sm:text-base">
                {content.paragraphTwo}
              </p>

              <div className="mt-7 space-y-3">
                {doctorHighlights.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className="flex items-start gap-3 border border-primary/10 bg-background/70 p-4 sm:p-5">
                      <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary/55 text-primary">
                        <Icon className="h-4 w-4" strokeWidth={1.9} />
                      </span>

                      <span>
                        <h4 className="font-heading text-xl leading-tight text-primary">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-sm leading-relaxed text-primary/75">
                          {item.description}
                        </p>
                      </span>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default About;
