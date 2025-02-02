import Image from "next/image";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Services from "./_components/Services";
import TextBanner from "./_components/TextBanner";
import Testimonials from "./_components/Testimonials";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import NavBar from "./_components/NavBar";

export default function Home() {
  return (
    <main className="min-h-svh overflow-x-hidden ">
      {/* <NavBar/> */}
      <div className="px-5 md:px-10 lg:px-20 xl:px-[20vw] pt-[10vh] bg-background">
        <Hero />
        <About />
        <Services />
        <TextBanner />
      </div>
      <div className="px-5 md:px-10 lg:px-20 xl:px-[20vw] pt-[20vh]">
        <Testimonials />
      </div>
      <div className="px-10 py-5 ">
        <Contact/>
      </div>
      <Footer/>
    </main>
  );
}
