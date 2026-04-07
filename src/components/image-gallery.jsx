import Image from "next/image";

export default function ImageGallery() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap');
    
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
      <section className="w-full flex flex-col items-center justify-start py-12">
        <div className="max-w-3xl text-center px-4">
          <h1 className="text-3xl font-semibold">Image Gallery</h1>
          <p className="sm:text-sm text-xs text-slate-500 mt-2">
            Explore our portfolio of stunning transformations and radiant skin
            results. Each image tells a story of beauty, confidence, and the art
            of skincare.
          </p>
        </div>

        <div className="flex items-center gap-2 h-[400px] w-full max-w-5xl mt-10 px-4">
          {[
            "/works/work-4.webp",
            "/works/work-5.webp",
            "/works/work-6.webp",
            "/works/work-7.webp",
            "/works/work-8.webp",
          ].map((src, idx) => (
            <div
              key={idx}
              className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
              <Image
                className="h-full w-full object-cover object-center"
                src={src}
                fill
                quality={70}
                alt={`image-${idx}`}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
