import { Link } from "react-router-dom";
function Logo() {
  return (
    <Link to="/">
      <h2 className="text-blue-600 font-bold text-2xl sm:text-3xl md:text-4xl md:w-[120px]">
        Shopy
      </h2>
    </Link>
  );
}

export default Logo;
