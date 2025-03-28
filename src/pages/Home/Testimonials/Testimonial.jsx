import { TiStar } from "react-icons/ti";
import PropTypes from "prop-types";
function Testimonial({ text, author }) {
  return (
    <div className="bg-blue-500  py-3.5 px-5 rounded-sm shadow-lg my-8 md:w-[300px] flex flex-col justify-between">
      <div className="flex items-start gap-1.5">
        <TiStar fill={"#fde047"} size={24} />
        <p className="text-white text-left flex-1">
          <q>{text}</q>
        </p>
      </div>

      <p className="self-end text-white text-right">- {author}</p>
    </div>
  );
}

Testimonial.PropTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Testimonial;
