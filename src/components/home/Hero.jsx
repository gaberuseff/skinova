import {HeroSection2} from "../hero-section2";

function Hero({content, isRtl = false}) {
  return (
    <div className="relative overflow-hidden">
      <div className="w-full">
        <HeroSection2
          isRtl={isRtl}
          logo={{
            url: "https://vucvdpamtrjkzmubwlts.supabase.co/storage/v1/object/public/users/user_2zMtrqo9RMaaIn4f8F2z3oeY497/avatar.png",
            alt: content.logoAlt,
            text: content.logoText,
          }}
          slogan={content.slogan}
          title={
            <>
              {content.title} <br />
              <span className="text-primary">{content.titleAccent}</span>
            </>
          }
          subtitle={content.subtitle}
          callToAction={{
            text: content.ctaPrimary,
            href: "https://wa.me/201500223440",
          }}
          callToAction2={{
            text: content.ctaSecondary,
            href: "https://goo.gl/maps/1Z5n9XoVh7mL2jvH6",
          }}
          backgroundImage="/hero.webp"
          contactInfo={content.contactInfo}
        />
      </div>
    </div>
  );
}

export default Hero;
