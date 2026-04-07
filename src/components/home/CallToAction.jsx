import MaxWidthWrapper from "../MaxWidthWrapper";

function CallToAction() {
  return (
    <section className="py-12">
      <MaxWidthWrapper>
        <div className="bg-primary px-8 py-12 text-center">
          <p className="text-xs uppercase tracking-widest text-white sm:mb-8 mb-4">
            Let&apos;s Make Your Skin Shine
          </p>

          <h2 className="text-2xl font-semibold text-white sm:text-4xl sm:mb-8 mb-4">
            Ready to Transform Your Skin?
          </h2>

          <p className="mt-4 text-white/60 sm:text-base text-sm">
            Book your appointment today and experience the Skinova difference!
          </p>

          <a
            className="mt-8 inline-block px-8 py-3 text-sm font-medium bg-white text-primary transition-colors hover:bg-white/90"
            href="https://wa.me/201500223440"
            target="_blank"
            rel="noopener noreferrer">
            Book Now
          </a>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default CallToAction;
