import Image from "next/image";

export default function ImageGallery({content}) {
  return (
    <section className="w-full flex flex-col items-center justify-start py-12">
      <div className="max-w-3xl text-center px-4">
        <h2 className="text-3xl font-semibold">{content.title}</h2>
        <p className="sm:text-sm text-xs text-slate-500 mt-2">
          {content.description}
        </p>
      </div>

      <ul
        className="flex items-center gap-2 h-[400px] w-full max-w-5xl mt-10 px-4"
        role="list"
        aria-label={content.title}>
        {[
          "/works/work-4.webp",
          "/works/work-5.webp",
          "/works/work-6.webp",
          "/works/work-7.webp",
          "/works/work-8.webp",
        ].map((src, idx) => (
          <li
            key={idx}
            className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
            <Image
              className="h-full w-full object-cover object-center"
              src={src}
              fill
              quality={70}
              alt={`${content.imageAltPrefix} ${idx + 1}`}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
