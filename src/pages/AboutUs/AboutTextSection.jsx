import React from "react";
import PropTypes from "prop-types";
function AboutTextSection({ heading, text }) {
  return (
    <div className="text-center p-6 md:px-24">
      <h2 className="text-blue-600 font-bold text-lg mb-8 md:text-2xl">
        {heading}
      </h2>
      <p className="text-sm md:text-lg">{text}</p>
    </div>
  );
}

AboutTextSection.PropTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
};

export default AboutTextSection;
