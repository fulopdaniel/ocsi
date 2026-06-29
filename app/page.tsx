import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import ServiceArea from "@/components/ServiceArea";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCall from "@/components/FloatingCall";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <Gallery />
        <Testimonials />
        <ServiceArea />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingCall />
    </>
  );
}
