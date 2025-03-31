import AboutTextSection from "./AboutTextSection";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import MainButton from "../../components/MainButton/MainButton";
function AboutUs() {
  return (
    <div>
      <Header></Header>
      <div className="max-w-[1000px] mx-auto my-8 space-y-16">
        <AboutTextSection
          heading={"Who We Are"}
          text={
            "Welcome to Shopy, your go-to destination for quality products at unbeatable prices! We believe that shopping should be easy, affordable, and fun. That’s why we carefully select a wide range of fashion, electronics, accessories, and more to bring you the best deals in one place."
          }
        />
        <img
          className="mx-auto my-4 w-[80%]"
          src="./src/assets/pixabay.jpg"
          alt=""
        />
        <AboutTextSection
          heading={"Our Mission"}
          text={
            "At Shopy, we aim to: Offer trendy, high-quality products for every budget. Provide a seamless and secure shopping experience. Deliver excellent customer service and fast shipping"
          }
        />
        <div className="flex mx-auto max-w-[800px] items-center flex-col-reverse sm:flex-row">
          <AboutTextSection
            heading={"Why Shop With Us?"}
            text={
              "At Shopy, we aim to: Offer trendy, high-quality products for every budget. Provide a seamless and secure shopping experience. Deliver excellent customer service and fast shipping"
            }
          />
          <img className="w-[50%] " src="./src/assets/liza.jpg" alt="" />
        </div>
        <div className="flex flex-col items-center gap-6 shadow-2xl p-12 max-w-[600px] mx-6 sm:mx-auto rounded-lg">
          <h2 className="text-lg md:text-2xl text-center font-bold">
            Don't wait and see for yourself
          </h2>
          <Link to={"/shop"}>
            <MainButton text={"Shop Now"}></MainButton>
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default AboutUs;
