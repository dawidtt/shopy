import React from "react";
import PropTypes from "prop-types";

function Advantage({ icon, text }) {
  return (
    <div className="flex flex-col items-center justify-start md:w-[300px] md:h-[120px]">
      {icon}
      <p className=" lg:text-lg mt-4">{text}</p>
    </div>
  );
}

Advantage.PropTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};

export default Advantage;
