import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CartProduct from "../../components/CartProduct";
import { useCart } from "../../context/CartContext";
function Cart() {
  const { cart } = useCart();
  console.log(cart);
  return (
    <div className="flex flex-col justify-between h-[100vh]">
      <Header></Header>

      <div className="flex flex-col justify-between items-center md:flex-row md:items-start px-4 lg:px-24 gap-4 md:gap-24  py-8 max-w-[1800px] md:mx-auto">
        {cart.map((product) => (
          <CartProduct key={product.id} product={product} />
        ))}

        <div className="max-w-[360px] flex flex-col justify-center items-stretch gap-4  shadow-xl p-8 rounded-lg border-1 border-gray-200">
          <h2 className="text-2xl">Order Summary</h2>
          <div className="flex justify-between">
            <p>Total sum</p>
            <p>$0</p>
          </div>
          <button className="bg-blue-100 border-1 border-blue-700 rounded-md text-gray-600 px-4 py-2 uppercase">
            Continue shopping
          </button>
          <button className="bg-blue-600 border-1 border-blue-700 rounded-md text-white px-4 py-2 uppercase">
            checkout
          </button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Cart;
