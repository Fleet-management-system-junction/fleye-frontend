
import Hero from "@/components/Hero/Hero.module";
// import Map from "@/components/Map/Map.module";
import Services from "@/components/Services/Services.module";
import Why from "@/components/Why/Why.module";


export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <Hero />
      {/* <Map /> */}
      <Services />
      <Why />
    </main>
  );
}
