import MaxWidthWrapper from "../MaxWidthWrapper";
import {Clock3, Mail, MapPin, MessageCircle, Phone} from "lucide-react";

const contactIcons = {
  phone: Phone,
  whatsapp: MessageCircle,
  email: Mail,
};

const mapUrl = "https://goo.gl/maps/1Z5n9XoVh7mL2jvH6";

function Contact({content}) {
  return (
    <section className="relative py-14" id="contact">
      <MaxWidthWrapper>
        <div className="relative overflow-hidden border border-primary/10 px-5 py-10 sm:px-7 md:px-10 md:py-14">
          <div className="pointer-events-none absolute -left-16 top-6 h-40 w-40 rounded-full bg-secondary/35 blur-2xl" />
          <div className="pointer-events-none absolute -right-18 bottom-0 h-56 w-56 rounded-full border border-primary/10" />

          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-8">
            <div>
              <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary/70 uppercase">
                {content.eyebrow}
              </p>
              <h2 className="font-heading text-3xl text-primary sm:text-4xl">
                {content.title}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-primary/75 sm:text-base">
                {content.description}
              </p>

              <div className="mt-8 space-y-4">
                <address className="rounded-xl border border-primary/10 bg-background/70 p-4 not-italic sm:p-5">
                  <div className="mb-2 flex items-center gap-2 text-primary">
                    <MapPin className="h-4 w-4" />
                    <h3 className="text-sm font-semibold uppercase tracking-wide">
                      {content.locationTitle}
                    </h3>
                  </div>

                  <p className="text-sm text-primary/80">{content.location}</p>
                  <a
                    className="mt-3 inline-flex items-center text-sm font-medium text-primary underline-offset-4 transition hover:underline"
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer">
                    {content.openMaps}
                  </a>
                </address>

                <div className="rounded-xl border border-primary/10 bg-background/70 p-4 sm:p-5">
                  <div className="mb-3 flex items-center gap-2 text-primary">
                    <Clock3 className="h-4 w-4" />
                    <h3 className="text-sm font-semibold uppercase tracking-wide">
                      {content.workingHoursTitle}
                    </h3>
                  </div>

                  <ul className="space-y-2 text-sm text-primary/80">
                    {content.workingHours.map((item) => (
                      <li
                        key={item.day}
                        className="flex items-center justify-between gap-4 border-b border-primary/10 pb-2 last:border-none last:pb-0">
                        <span>{item.day}</span>
                        <span className="font-medium text-primary">
                          {item.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="border border-primary/12 bg-primary px-5 py-6 text-primary-foreground sm:px-6 sm:py-8 rounded-xl">
              <h3 className="font-heading text-2xl sm:text-3xl">
                {content.getInTouchTitle}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
                {content.getInTouchDescription}
              </p>

              <ul className="mt-6 space-y-3" role="list">
                {content.items.map((item) => {
                  const Icon = contactIcons[item.icon] || Phone;

                  return (
                    <li key={item.title}>
                      <a
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="group flex items-center gap-3 bg-white/8 px-4 py-3 transition hover:bg-white/14">
                        <span className="grid h-9 w-9 place-items-center rounded-full bg-white/12 text-white">
                          <Icon className="h-4 w-4" />
                        </span>

                        <span>
                          <span className="block text-xs tracking-wide text-primary-foreground/70 uppercase">
                            {item.title}
                          </span>
                          <span className="block text-sm font-medium text-primary-foreground sm:text-base">
                            {item.value}
                          </span>
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default Contact;
