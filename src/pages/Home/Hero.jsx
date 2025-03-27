import MainButton from "../../components/MainButton";
function Hero() {
  return (
    <div className="text-center py-16 md:py-28 px-8 lg:px-[25vw]">
      <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl lg:leading-14">
        Welcome to <span className="text-blue-600">Shopy</span> – Your Ultimate
        Shopping Destination!
      </h1>
      <p className="text-base sm:text-lg md:text-xl my-16 md:px-18 lg:text-2xl">
        Looking for high-quality products at unbeatable prices? You’ve come to
        the right place! At FakeStore, we offer a wide range of fashion,
        electronics, accessories, and more – all carefully selected to meet your
        needs.
      </p>
      <MainButton text="Shop now"></MainButton>
    </div>
  );
}

export default Hero;
