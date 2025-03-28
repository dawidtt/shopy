import React from "react";
import PropTypes from "prop-types";
function MainButton({ text }) {
  return (
    <button className="bg-blue-500 text-sm px-12 py-3 sm:px-16 sm:py-4 rounded-xl text-white uppercase md:text-lg shadow-xl opacity-95 hover:scale-[1.02] hover:cursor-pointer  transition-transform will-change-transform hover:opacity-100 md:px-28 md:py-4 lg:text-xl">
      {text}
    </button>
  );
}

MainButton.PropTypes = {
  text: PropTypes.string,
};

export default MainButton;
