import Hero from "@/components/home/Hero"
import Features from "@/components/home/Features"
import Testimonials from "@/components/home/Testimonials"
import WorksImages from "@/components/home/WorksImages"
import CallToAction from "@/components/home/CallToAction"
import Contact from "@/components/home/Contact"
import BeforeAndAfter from "@/components/home/BeforeAndAfter"

function page() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <BeforeAndAfter />
      <WorksImages />
      <CallToAction />
      <Contact />
    </>
  )
}

export default page
