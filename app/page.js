import Image from "next/image";
import Navbar from "./components/ui/navbar";
import Hero from "./components/ui/home/hero";
import Hero2 from "./components/ui/home/hero2";
import Footer from "./components/ui/home/footer";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Hero2/>
      <Footer/>
    </main>
  );
}
