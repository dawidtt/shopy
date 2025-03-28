import MainButton from "../../components/MainButton/MainButton";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="text-center py-16 md:py-28 px-8 lg:px-[22vw]">
      <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:leading-14">
        Welcome to <span className="text-blue-600">Shopy</span> – Your Ultimate
        Shopping Destination!
      </h1>
      <p className="text-base sm:text-lg md:text-xl my-16 md:px-18">
        Looking for high-quality products at unbeatable prices? You’ve come to
        the right place! In Shopy, we offer a wide range of fashion,
        electronics, accessories, and more – all carefully selected to meet your
        needs.
      </p>
      <Link to="shop">
        <MainButton text="Shop now"></MainButton>
      </Link>
    </div>
  );
}

export default Hero;
