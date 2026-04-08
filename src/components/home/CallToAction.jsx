import MaxWidthWrapper from "../MaxWidthWrapper";

function CallToAction({content}) {
  return (
    <section className="relative py-14">
      <MaxWidthWrapper>
        <div className="bg-primary px-8 py-12 text-center">
          <p className="text-xs uppercase tracking-widest text-white sm:mb-8 mb-4">
            {content.eyebrow}
          </p>

          <h2 className="text-2xl font-semibold text-white sm:text-4xl sm:mb-8 mb-4">
            {content.title}
          </h2>

          <p className="mt-4 text-white/60 sm:text-base text-sm">
            {content.description}
          </p>

          <a
            className="mt-8 inline-block px-8 py-3 text-sm font-medium bg-white text-primary transition-colors hover:bg-white/90"
            href="https://wa.me/201500223440"
            target="_blank"
            rel="noopener noreferrer">
            {content.button}
          </a>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default CallToAction;
