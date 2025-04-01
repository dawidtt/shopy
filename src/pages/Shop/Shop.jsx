import Header from "../../components/Header";
import { IoIosSearch } from "react-icons/io";
import Filters from "./Filters";
function Shop() {
  return (
    <div>
      <Header></Header>
      <div className=" flex justify-center relative my-12 w-[fit-content] mx-auto">
        <input
          className="text-gray-800 px-3.5 py-4 pr-10 w-[240px] shadow-lg border-1 rounded-2xl border-gray-400 h-[34px] md:text-lg md:h-[38px] md:w-[280px] focus:outline-1"
          type="text"
          placeholder="Search..."
        />
        <IoIosSearch
          className="absolute right-[10px] top-[22%] z-[-2]"
          size={22}
        />
      </div>
      <Filters></Filters>
    </div>
  );
}

export default Shop;
