import Header from "../../components/Header";
import Hero from "./Hero";
import Testimonials from "./Testimonials/Testimonials";
import WhyUs from "./WhyUs/WhyUs";
Testimonials;
function Home() {
  return (
    <div>
      <Header></Header>
      <main>
        <Hero></Hero>
        <WhyUs></WhyUs>
        <Testimonials></Testimonials>
      </main>
    </div>
  );
}

export default Home;
