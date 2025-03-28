import PropTypes from "prop-types";
function FooterContainer({ heading, textArr }) {
  return (
    <div className="flex flex-col gap-1.5">
      <h4 className="font-bold text-lg">{heading}</h4>
      {textArr.map((text) => (
        <p className="flex items-center gap-3" key={crypto.randomUUID()}>
          {text.icon}
          {text.text}
        </p>
      ))}
    </div>
  );
}

FooterContainer.PropTypes = {
  heading: PropTypes.string.isRequired,
  textArr: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string.isRequired, icon: PropTypes.node })
  ).isRequired,
  icon: PropTypes.node,
};

export default FooterContainer;
