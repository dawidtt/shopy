import React from "react";
import PropTypes from "prop-types";
function MainButton({ text }) {
  return (
    <button className="bg-blue-500 text-sm px-12 py-3 sm:px-16 md:text-lg md:px-28  lg:text-xl rounded-xl text-white uppercase  shadow-xl opacity-95 hover:scale-[1.02] hover:cursor-pointer  transition-transform will-change-transform hover:opacity-100 ">
      {text}
    </button>
  );
}

MainButton.PropTypes = {
  text: PropTypes.string,
};

export default MainButton;
