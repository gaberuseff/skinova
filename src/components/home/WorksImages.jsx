import { ImageGallery } from "../image-gallery";

function WorksImages({content}) {
  return (
    <section className="relative py-14" id="works">
      <ImageGallery content={content} />
    </section>
  );
}

export default WorksImages;
