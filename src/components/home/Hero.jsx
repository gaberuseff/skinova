import {HeroSection2} from "../hero-section2";

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="w-full">
        <HeroSection2
          logo={{
            url: "https://vucvdpamtrjkzmubwlts.supabase.co/storage/v1/object/public/users/user_2zMtrqo9RMaaIn4f8F2z3oeY497/avatar.png",
            alt: "Skinova Clinic Logo",
            text: "Skinova Clinic",
          }}
          slogan="ADVANCED AESTHETIC CARE"
          title={
            <>
              Reveal Your Best Skin <br />
              <span className="text-primary">With Expert Hands</span>
            </>
          }
          subtitle="From personalized facials to laser treatments and injectables, we craft safe, natural-looking results tailored to your goals."
          callToAction={{
            text: "Book Now",
            href: "https://wa.me/201500223440",
          }}
          callToAction2={{
            text: "Location",
            href: "https://goo.gl/maps/1Z5n9XoVh7mL2jvH6",
          }}
          backgroundImage="/hero.webp"
          contactInfo={{
            website: "gaberuseff.com",
            phone: "+20 (1500) 223-440",
            address: "6th of October City, Giza, Egypt",
          }}
        />
      </div>
    </section>
  );
}

export default Hero;
