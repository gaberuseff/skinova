import MaxWidthWrapper from "../MaxWidthWrapper";
import {
  Droplets,
  ScanFace,
  ShieldCheck,
  Sparkles,
  Sun,
  Syringe,
} from "lucide-react";

const serviceIcons = [Droplets, Sun, Sparkles, Syringe, ScanFace, ShieldCheck];

function Services({content}) {
  const services = content.items.map((item, index) => ({
    ...item,
    icon: serviceIcons[index],
  }));

  return (
    <section className="relative py-14" id="services">
      <MaxWidthWrapper>
        <div className="relative overflow-hidden border border-primary/10 px-5 py-10 sm:px-7 md:px-10 md:py-14">
          <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full border border-primary/10" />
          <div className="pointer-events-none absolute -right-16 bottom-2 h-56 w-56 rounded-full bg-secondary/40 blur-2xl" />

          <div className="relative mx-auto max-w-2xl text-center">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary/70 uppercase">
              {content.eyebrow}
            </p>
            <h2 className="font-heading text-3xl text-primary sm:text-4xl">
              {content.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-primary/75 sm:text-base">
              {content.description}
            </p>
          </div>

          <div className="relative mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group border border-primary/12 bg-background/70 p-5 transition hover:-translate-y-0.5 hover:border-primary/20">
                  <span className="inline-flex h-11 w-11 items-center justify-center text-primary">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>

                  <h3 className="mt-4 font-heading text-xl text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary/75">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default Services;
