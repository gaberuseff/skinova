import {ImageComparison} from "../image-comparison-slider";

function BeforeAndAfter() {
  return (
    <section className="relative py-14 md:py-20">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-2">
            Before and After
          </h2>
          <p className="text-lg text-primary/60">
            See the transformation for yourself with our interactive slider.
          </p>
        </div>

        <ImageComparison
          beforeImage="/works/work-5.webp"
          afterImage="/works/work-6.webp"
          altBefore="A black placeholder image with the word Before"
          altAfter="A white placeholder image with the word After"
        />
      </div>
    </section>
  );
}

export default BeforeAndAfter;
