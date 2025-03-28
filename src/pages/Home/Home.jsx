import Header from "../../components/Header";
import Hero from "./Hero";
import Testimonials from "./Testimonials/Testimonials";
import WhyUs from "./WhyUs/WhyUs";
import Newsletter from "./Newsletter/Newsletter";
Testimonials;
function Home() {
  return (
    <div>
      <Header></Header>
      <main>
        <Hero></Hero>
        <WhyUs></WhyUs>
        <Testimonials></Testimonials>
        <Newsletter></Newsletter>
      </main>
    </div>
  );
}

export default Home;
