import {ImageComparison} from "../image-comparison-slider";
import MaxWidthWrapper from "../MaxWidthWrapper";

function BeforeAndAfter({content}) {
  return (
    <section className="relative py-14" id="before-after">
      <MaxWidthWrapper>
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-full text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-2">
              {content.title}
            </h2>
            <p className="sm:text-base text-sm text-primary/60">
              {content.description}
            </p>
          </div>

          <ImageComparison
            beforeImage="/works/work-5.webp"
            afterImage="/works/work-6.webp"
            altBefore={content.altBefore}
            altAfter={content.altAfter}
          />
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default BeforeAndAfter;
