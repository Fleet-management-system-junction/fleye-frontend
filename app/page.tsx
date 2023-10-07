import Footer from "@/components/Footer/Footer.module";
import Hero from "@/components/Hero/Hero.module";
import Navbar from "@/components/Navbar/Navbar.module";
import Services from "@/components/Services/Services.module";
import Why from "@/components/Why/Why.module";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full flex flex-col">
        <Hero />
        <Services />
        <Why />
      </main>
      <Footer />
    </>
  );
}
