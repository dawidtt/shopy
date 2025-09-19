import { useState } from "react";

import { FaRegTrashAlt } from "react-icons/fa";

import { useCart } from "../context/CartContext";

function CartProduct({ product }) {
  const { updateCartQuantity, removeFromCart } = useCart();

  const [productNumber, setProductNumber] = useState(product.quantity);
  function handleProductNumber(eq) {
    if (eq == "-" && productNumber > 1) {
      updateCartQuantity(product.id, product.quantity - 1);
      setProductNumber(productNumber - 1);
    } else if (eq == "+") {
      updateCartQuantity(product.id, product.quantity + 1);
      setProductNumber(productNumber + 1);
    }
  }

  return (
    <div className="flex flex-col justify-between w-full ">
      {product && (
        <div className="flex  justify-center items-center lg:items-stretch  gap-6 md:gap-12 md:max-w-[800px] lg:mx-auto shadow-xl p-8 rounded-lg border-1 border-gray-200">
          <img className="w-[20%] " src={product.image} alt="" />
          <div className="flex flex-col justify-between w-[80%]">
            <div>
              <h2 className="text-sm sm:text-lg md:text-2xl font-bold">
                {product.title}
              </h2>
            </div>
            <div>
              <div className="flex justify-between items-center"></div>

              <div className="flex items-center justify-between py-8  gap-2">
                <div className="flex items-center border-1 border-gray-400 w-[80px] text-center text-gray-700">
                  <button
                    onClick={() => handleProductNumber("-")}
                    className="w-[20px] hover:cursor-pointer"
                  >
                    -
                  </button>
                  <div className="w-[40px] border-x-1 border-gray-400">
                    {productNumber}
                  </div>
                  <button
                    onClick={() => handleProductNumber("+")}
                    className="w-[20px] hover:cursor-pointer"
                  >
                    +
                  </button>
                </div>
                <p className="text-lg lg:text-2xl">
                  {" "}
                  ${Math.round(product.price * product.quantity * 100) / 100}
                </p>
                <button
                  className="cursor-pointer hover:scale-105 transition duration-100 will-change-transform"
                  onClick={() => removeFromCart(product.id)}
                >
                  <FaRegTrashAlt fill="#f54245" size={25} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartProduct;
