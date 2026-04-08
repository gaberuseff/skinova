"use client";

import {forwardRef} from "react";
import Image from "next/image";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {Button} from "./ui/button";
import {MapPinCheckInside, MessageCircleHeart} from "lucide-react";

// Icon component for contact details
const InfoIcon = ({type}) => {
  const icons = {
    website: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 text-primary">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" x2="22" y1="12" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    ),
    phone: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 text-primary">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    ),
    address: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 text-primary">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    ),
  };
  return (
    <div className="mr-2 shrink-0" aria-hidden="true">
      {icons[type]}
    </div>
  );
};

const HeroSection2 = forwardRef(
  (
    {
      className,
      logo,
      slogan,
      title,
      subtitle,
      callToAction,
      callToAction2,
      backgroundImage,
      contactInfo,
      isRtl = false,
      ...props
    },
    ref,
  ) => {
    const ctaHref = callToAction?.href || callToAction?.link || "#";
    const isExternalCta = /^(https?:\/\/|mailto:|tel:)/i.test(ctaHref);
    const cta2Href = callToAction2?.href || callToAction2?.link || "#";
    const isExternalCta2 = /^(https?:\/\/|mailto:|tel:)/i.test(cta2Href);

    return (
      <section
        ref={ref}
        className={cn(
          "relative flex w-full flex-col overflow-hidden bg-background text-foreground md:flex-row",
          className,
        )}
        {...props}>
        {/* Left Side: Content */}
        <div className="flex w-full flex-col justify-between p-8 md:w-1/2 md:p-12 lg:w-3/5 lg:p-16">
          {/* Top Section: Logo & Main Content */}
          <div>
            <header className="mb-12">
              {logo && (
                <div className="flex items-center">
                  <Image
                    src={logo.url}
                    alt={logo.alt}
                    width={32}
                    height={32}
                    className="mr-3 h-8 w-8 rounded-full object-cover"
                  />
                  <div>
                    {logo.text && (
                      <p className="text-lg font-bold text-foreground">
                        {logo.text}
                      </p>
                    )}
                    {slogan && (
                      <p className="text-xs tracking-wider text-muted-foreground">
                        {slogan}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </header>

            <div>
              <h1 className="text-4xl leading-tight text-foreground md:text-5xl">
                {title}
              </h1>
              <div className="my-6 h-1 w-20 bg-primary"></div>
              <p className="mb-8 max-w-md text-base text-muted-foreground">
                {subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Button asChild size="lg">
                  {isExternalCta ? (
                    <a href={ctaHref} target="_blank" rel="noopener noreferrer">
                      <MessageCircleHeart />
                      {callToAction?.text}
                    </a>
                  ) : (
                    <Link href={ctaHref}>
                      <MessageCircleHeart />
                      {callToAction?.text}
                    </Link>
                  )}
                </Button>

                {callToAction2 && (
                  <Button asChild size="lg" variant="outline">
                    {isExternalCta2 ? (
                      <a
                        href={cta2Href}
                        target="_blank"
                        rel="noopener noreferrer">
                        <MapPinCheckInside />
                        {callToAction2.text}
                      </a>
                    ) : (
                      <Link href={cta2Href}>
                        <MapPinCheckInside />
                        {callToAction2.text}
                      </Link>
                    )}
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Section: Footer Info */}
          <address className="mt-12 w-full not-italic">
            <ul
              className="grid grid-cols-1 gap-6 text-xs text-muted-foreground sm:grid-cols-3"
              role="list">
              <li className="flex items-center">
                <InfoIcon type="website" />
                <a
                  href={`https://${contactInfo.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline">
                  {contactInfo.website}
                </a>
              </li>
              <li className="flex items-center" dir="ltr">
                <InfoIcon type="phone" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-primary hover:underline">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center">
                <InfoIcon type="address" />
                <a
                  href="https://www.google.com/maps/@30.0173687,31.1428067,12.5z?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline">
                  {contactInfo.address}
                </a>
              </li>
            </ul>
          </address>
        </div>
        {/* Right Side: Image */}
        <div
          role="img"
          aria-label="Skin clinic hero image"
          className="w-full min-h-75 bg-cover bg-center md:w-1/2 md:min-h-full lg:w-2/5"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            clipPath: isRtl
              ? "polygon(0 0, 75% 0, 100% 100%, 0 100%)"
              : "polygon(25% 0, 100% 0, 100% 100%, 0% 100%)",
          }}></div>
      </section>
    );
  },
);

HeroSection2.displayName = "HeroSection2";

export {HeroSection2};
