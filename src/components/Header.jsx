import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import Logo from "./Logo";
import { useCart } from "../context/CartContext";
function Header() {
  const { cartTotalItems } = useCart();
  let location = useLocation();
  const isHome = location.pathname === "/";
  const isAboutUs = location.pathname === "/about-us";
  const isShop = location.pathname.startsWith("/shop");

  return (
    <header className="flex justify-between p-6 shadow-xl text-gray-500 sticky top-0 z-5 w-[100%]  bg-white">
      <Logo></Logo>
      <div className="flex items-center gap-4 sm:gap-8">
        <Link
          to="/"
          className={
            "flex items-center justify-center gap-2 p-2 hover:text-blue-500 hover:border-b-blue-500 transition-colors" +
            (isHome ? " border-b-gray-500 border-b-2" : "")
          }
        >
          <FaHome size="25px"></FaHome>
          <span className="hidden sm:block text-xl">Home</span>
        </Link>
        <Link
          to="/about-us"
          className={
            "flex items-center justify-center gap-2 p-2 hover:text-blue-500 hover:border-b-blue-500 transition-colors" +
            (isAboutUs ? " border-b-gray-500 border-b-2" : "")
          }
        >
          <FaUsers size="25px"></FaUsers>
          <span className="hidden sm:block text-xl">About us</span>
        </Link>
        <Link
          to="/shop"
          className={
            "flex items-center justify-center gap-2 p-2 hover:text-blue-500 hover:border-b-blue-500 transition-colors" +
            (isShop ? " border-b-gray-500 border-b-2" : "")
          }
        >
          <FaShoppingBasket size="25px"></FaShoppingBasket>
          <span className="hidden sm:block text-xl">Shop</span>
        </Link>
      </div>
      <div className="flex items-center justify-end md:w-[120px] ">
        <Link
          to="/shop/cart"
          className="flex items-center justify-center gap-2 hover:scale-[1.08] transition-transform relative"
        >
          {cartTotalItems !== 0 && (
            <div className="absolute text-sm text-white font-bold bg-red-600 rounded-full w-5 h-5 flex justify-center items-center top-[-12px] right-[-12px]">
              {cartTotalItems > 9 ? "9+" : cartTotalItems}
            </div>
          )}
          <FaShoppingCart size="25px"></FaShoppingCart>
        </Link>
      </div>
    </header>
  );
}

export default Header;
