import Rating from "./Rating";
import MainButton from "./MainButton/MainButton";
import { useFetchShop } from "../hooks/useFetchShop";
import { useParams } from "react-router-dom";
import { useState } from "react";

import { FaRegTrashAlt } from "react-icons/fa";

function CartProduct({ id, title, description, price, rating }) {
  const { data, loading, error } = useFetchShop(`/${id}`);
  console.log(data);
  const [productNumber, setProductNumber] = useState(1);
  function handleProductNumber(eq) {
    if (eq == "-" && productNumber > 1) setProductNumber(productNumber - 1);
    else if (eq == "+") setProductNumber(productNumber + 1);
  }

  return (
    <div className="flex flex-col justify-between">
      {data && (
        <div className="flex  justify-center items-center lg:items-stretch  gap-6 md:gap-12 max-w-[800px] lg:mx-auto shadow-xl p-8 rounded-lg border-1 border-gray-200">
          <img
            className="w-[55px] sm:w-[80px] md:w-[120px]"
            src={data.image}
            alt=""
          />
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-sm sm:text-lg md:text-2xl font-bold">
                {data.title}
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
                <p className="text-lg lg:text-2xl"> ${data.price}</p>
                <FaRegTrashAlt fill="#f54245" size={25} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartProduct;
