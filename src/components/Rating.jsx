import PropTypes from "prop-types";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
function Rating({ rating }) {
  const ratingArr = [];
  if (rating.rate < 0.75) {
    ratingArr.push(
      <FaStarHalfAlt key={crypto.randomUUID()} fill="#fde047" size={22} />
    );
  } else if (rating.rate < 1.25) {
    ratingArr.push(
      <FaStar key={crypto.randomUUID()} fill="#fde047" size={22} />
    );
  } else if (rating.rate < 1.75) {
    ratingArr.push(
      <FaStar key={crypto.randomUUID()} fill="#fde047" size={22} />
    );
    ratingArr.push(
      <FaStarHalfAlt key={crypto.randomUUID()} fill="#fde047" size={22} />
    );
  } else if (rating.rate < 2.25) {
    ratingArr.push(
      <FaStar key={crypto.randomUUID()} fill="#fde047" size={22} />
    );
    ratingArr.push(
      <FaStar key={crypto.randomUUID()} fill="#fde047" size={22} />
    );
  } else if (rating.rate < 2.75) {
    ratingArr.push(
      <FaStar key={crypto.randomUUID()} fill="#fde047" size={22} />
    );
    ratingArr.push(
      <FaStar key={crypto.randomUUID()} fill="#fde047" size={22} />
    );
    ratingArr.push(
      <FaStarHalfAlt key={crypto.randomUUID()} fill="#fde047" size={22} />
    );
  } else if (rating.rate < 3.25) {
    ratingArr.push(
      <FaStar key={crypto.randomUUID()} fill="#fde047" size={22} />
    );
    ratingArr.push(
      <FaStar key={crypto.randomUUID()} fill="#fde047" size={22} />
    );
    ratingArr.push(
      <FaStar key={crypto.randomUUID()} fill="#fde047" size={22} />
    );
  } else if (rating.rate < 3.75) {
    ratingArr.push(
      <FaStar key={crypto.randomUUID()} fill="#fde047" size={22} />
    );
    ratingArr.push(
      <FaStar key={crypto.randomUUID()} fill="#fde047" size={22} />
    );
    ratingArr.push(
      <FaStar key={crypto.randomUUID()} fill="#fde047" size={22} />
    );
    ratingArr.push(
      <FaStarHalfAlt key={crypto.randomUUID()} fill="#fde047" size={22} />
    );
  } else if (rating.rate < 4.25) {
    ratingArr.push(
      <FaStar key={crypto.randomUUID()} fill="#fde047" size={22} />
    );
    ratingArr.push(
      <FaStar key={crypto.randomUUID()} fill="#fde047" size={22} />
    );
    ratingArr.push(
      <FaStar key={crypto.randomUUID()} fill="#fde047" size={22} />
    );
    ratingArr.push(
      <FaStar key={crypto.randomUUID()} fill="#fde047" size={22} />
    );
  } else if (rating.rate < 4.75) {
    ratingArr.push(
      <FaStar key={crypto.randomUUID()} fill="#fde047" size={22} />
    );
    ratingArr.push(
      <FaStar key={crypto.randomUUID()} fill="#fde047" size={22} />
    );
    ratingArr.push(
      <FaStar key={crypto.randomUUID()} fill="#fde047" size={22} />
    );
    ratingArr.push(
      <FaStar key={crypto.randomUUID()} fill="#fde047" size={22} />
    );
    ratingArr.push(
      <FaStarHalfAlt key={crypto.randomUUID()} fill="#fde047" size={22} />
    );
  } else {
    ratingArr.push(
      <FaStar key={crypto.randomUUID()} fill="#fde047" size={22} />
    );
    ratingArr.push(
      <FaStar key={crypto.randomUUID()} fill="#fde047" size={22} />
    );
    ratingArr.push(
      <FaStar key={crypto.randomUUID()} fill="#fde047" size={22} />
    );
    ratingArr.push(
      <FaStar key={crypto.randomUUID()} fill="#fde047" size={22} />
    );
    ratingArr.push(
      <FaStar key={crypto.randomUUID()} fill="#fde047" size={22} />
    );
  }
  while (ratingArr.length !== 5) {
    ratingArr.push(
      <FaRegStar key={crypto.randomUUID()} fill="#fde047" size={22} />
    );
  }
  return <div className="flex gap-0.5 my-1">{ratingArr}</div>;
}
Rating.PropTypes = {
  rating: PropTypes.number,
};

export default Rating;
