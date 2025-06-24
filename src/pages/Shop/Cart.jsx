import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CartProduct from "../../components/CartProduct";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
function Cart() {
  const { cart, cartTotalPrice } = useCart();
  return (
    <div className="min-h-[100vh] flex flex-col justify-between">
      <Header></Header>
      <div className="flex-grow flex flex-col justify-between items-start ">
        <div className="flex flex-col justify-between items-center md:flex-row md:items-start px-4 lg:px-12 gap-4 md:gap-24  py-8 max-w-[1800px] md:mx-auto ">
          <div className="flex flex-col gap-8">
            {cart.map((product) => (
              <CartProduct key={product.id} product={product} />
            ))}
          </div>

          <div className="lg:w-[380px] flex flex-col justify-center items-stretch gap-4  shadow-xl p-8 rounded-lg border-1 border-gray-200 sticky top-32">
            <h2 className="text-xl lg:text-2xl  uppercase">Order Summary</h2>
            <div className="flex justify-between border-b-gray-400 border-b-1 pb-2">
              <p className="font-bold lg:text-xl">Total sum</p>
              <p className="font-bold lg:text-xl">${cartTotalPrice}</p>
            </div>
            <Link className="" to={"/shop"}>
              <button className="w-full bg-blue-100 border-1 border-blue-700 rounded-md text-gray-600 px-4 py-2 uppercase cursor-pointer will-change-transform hover:scale-101 transition duration-100 ">
                Continue shopping
              </button>
            </Link>
            <button className="bg-blue-600 border-1 border-blue-700 rounded-md text-white px-4 py-2 uppercase cursor-pointer will-change-transform hover:scale-101 transition duration-100">
              checkout
            </button>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Cart;
