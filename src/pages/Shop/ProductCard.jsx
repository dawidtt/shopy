import PropTypes from "prop-types";
import Rating from "../../components/Rating";
import { Link } from "react-router-dom";
function ProductCard({ id, title, price, image, rating }) {
  return (
    <Link
      to={`/shop/${id}`}
      className="rounded-xl shadow-xl p-6 flex flex-col justify-between will-change-transform hover:scale-[1.02] transition-transform hover:cursor-pointer"
    >
      <div className="flex-grow flex items-center justify-center py-4">
        <img className="w-[60%]" src={image} alt="" />
      </div>
      <div>
        <h3 className=" my-3 text-lg font-bold lg:text-xl">{title}</h3>
        <Rating rating={rating}></Rating>
        <p className=" mt-3 text-gray-800 text-lg  md:text-xl lg:text-2xl">
          ${price}
        </p>

        <button className="my-3 font-bold w-full bg-blue-500 text-sm px-4 py-3  rounded-lg text-white uppercase  shadow-xl opacity-95 hover:scale-[1.02] hover:cursor-pointer  transition-transform will-change-transform hover:opacity-100 ">
          ADD TO CART
        </button>
      </div>
    </Link>
  );
}

ProductCard.PropTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  rating: PropTypes.objectOf(
    PropTypes.shape({ rate: PropTypes.number, count: PropTypes.number })
  ),
};

export default ProductCard;
