import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Rating from "../../components/Rating";
import MainButton from "../../components/MainButton/MainButton";
import { useFetchShop } from "../../hooks/useFetchShop";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../context/CartContext";

function ProductPage({ title, description, price, rating }) {
  const { addToCart } = useCart();
  const { id } = useParams();
  const { data, loading, error } = useFetchShop(`/${id}`);
  const [productNumber, setProductNumber] = useState(1);
  function handleProductNumber(eq) {
    if (eq == "-" && productNumber > 1) setProductNumber(productNumber - 1);
    else if (eq == "+") setProductNumber(productNumber + 1);
  }

  return (
    <div className="flex flex-col justify-between h-[100vh]">
      <Header></Header>
      {data && (
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch p-6 lg:p-18 gap-12 max-w-[1400px] lg:mx-auto">
          <img className="max-w-[280px]" src={data.image} alt="" />
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-lg md:text-3xl font-bold">{data.title}</h1>
              <p className="md:text-lg py-4">{data.description}</p>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <p className="text-xl lg:text-3xl"> ${data.price}</p>

                <div className="flex  items-center gap-1">
                  <p className="text-sm flex items-center mt-1 lg:text-md">
                    ({data.rating.count})
                  </p>

                  <Rating rating={data.rating}></Rating>
                </div>
              </div>

              <div className="flex items-center justify-between py-8 flex-col sm:flex-row gap-8">
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
                <MainButton
                  text={"Add to cart"}
                  callback={() => addToCart(data, productNumber)}
                ></MainButton>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer></Footer>
    </div>
  );
}

export default ProductPage;
