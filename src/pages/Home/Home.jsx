import Header from "../../components/Header";
import Hero from "./Hero";
import WhyUs from "./WhyUs/WhyUs";
function Home() {
  return (
    <div>
      <Header></Header>
      <main>
        <Hero></Hero>
        <WhyUs></WhyUs>
      </main>
    </div>
  );
}

export default Home;
