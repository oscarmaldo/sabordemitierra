
import "./landing.page.css";

import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Menu from "./components/menu/menu";
import Location from "./components/location/location";
import Footer from "./components/footer/footer";
import AboutC from "./components/aboutCompany/aboutC"

export default function LandingPage() {
  return (
    <div className="landing-page">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Menu />
        <AboutC />
        <Location />
      </main>

      <Footer />
    </div>
  );
}
