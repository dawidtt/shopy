import { FaBasketShopping } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import Advantage from "./Advantage";

function WhyUs() {
  return (
    <div className="text-center bg-blue-100 py-12">
      <h3 className="text-lg font-bold mb-10 md:text-2xl">Why shop with us</h3>
      <div className="flex flex-col items-center justify-center gap-12 md:flex-row">
        <Advantage
          icon={<FaBasketShopping size={"35px"} fill="#2563eb" />}
          text={"A diverse collection of trending products"}
        ></Advantage>
        <Advantage
          icon={<FaMoneyBillWave size={"35px"} fill="#2563eb" />}
          text={"Affordable prices with great deals"}
        ></Advantage>
        <Advantage
          icon={<FaShippingFast size={"35px"} fill="#2563eb" />}
          text={"Fast and reliable shipping"}
        ></Advantage>
      </div>
    </div>
  );
}

export default WhyUs;
