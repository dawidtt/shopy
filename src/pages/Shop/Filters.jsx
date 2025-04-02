import { VscSettings } from "react-icons/vsc";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

function Filters() {
  const [filtersVisible, setFiltersVisible] = useState(
    window.innerWidth >= 768 ? true : false
  );
  const toggleVisible = () => {
    if (filtersVisible === false) setFiltersVisible(true);
    else setFiltersVisible(false);
  };
  return (
    <div className="w-fit bg-gray-100 md:bg-white md:w-[280px] p-4 rounded-r-xl">
      {!filtersVisible && (
        <button onClick={toggleVisible}>
          <VscSettings size={26} />
        </button>
      )}
      {filtersVisible && (
        <div className="">
          <div className="flex justify-between ">
            <h3 className="text-2xl">Filters</h3>
            <button className="md:hidden" onClick={toggleVisible}>
              <IoMdClose size={25} />
            </button>
          </div>

          <div className="border-r-1 pr-6">
            <div className="flex flex-col gap-2.5 mt-3 py-3 border-t-1 border-t-gray-500 ">
              <h4 className="text-lg">Categories</h4>
            </div>
            <div className="flex flex-col gap-2.5 mt-3 py-3 border-t-1 border-t-gray-500 ">
              <h4 className="text-lg">Rating</h4>
              <label className="flex gap-2" htmlFor="rating-5">
                <input type="checkbox" name="rating-5" id="rating-5" />{" "}
                <div className="flex">
                  <FaStar fill="#fde047" size={22} />
                  <FaStar fill="#fde047" size={22} />
                  <FaStar fill="#fde047" size={22} />
                  <FaStar fill="#fde047" size={22} />
                  <FaStar fill="#fde047" size={22} />
                </div>
              </label>
              <label className="flex gap-2" htmlFor="rating-45">
                <input type="checkbox" name="rating-45" id="rating-45" />{" "}
                <div className="flex">
                  <FaStar fill="#fde047" size={22} />
                  <FaStar fill="#fde047" size={22} />
                  <FaStar fill="#fde047" size={22} />
                  <FaStar fill="#fde047" size={22} />
                  <FaStarHalfAlt fill="#fde047" size={22} />
                </div>
              </label>
              <label className="flex gap-2" htmlFor="rating-4">
                <input type="checkbox" name="rating-4" id="rating-4" />{" "}
                <div className="flex">
                  <FaStar fill="#fde047" size={22} />
                  <FaStar fill="#fde047" size={22} />
                  <FaStar fill="#fde047" size={22} />
                  <FaStar fill="#fde047" size={22} />
                  <FaRegStar fill="#fde047" size={22} />
                </div>
              </label>
              <label className="flex gap-2" htmlFor="rating-35">
                <input type="checkbox" name="rating-35" id="rating-35" />{" "}
                <div className="flex">
                  <FaStar fill="#fde047" size={22} />
                  <FaStar fill="#fde047" size={22} />
                  <FaStar fill="#fde047" size={22} />
                  <FaStarHalfAlt fill="#fde047" size={22} />
                  <FaRegStar fill="#fde047" size={22} />
                </div>
              </label>
              <label className="flex gap-2" htmlFor="rating-3">
                <input type="checkbox" name="rating-3" id="rating-3" />{" "}
                <div className="flex">
                  <FaStar fill="#fde047" size={22} />
                  <FaStar fill="#fde047" size={22} />
                  <FaStar fill="#fde047" size={22} />
                  <FaRegStar fill="#fde047" size={22} />
                  <FaRegStar fill="#fde047" size={22} />
                </div>
              </label>
              <label className="flex gap-2" htmlFor="rating-25">
                <input type="checkbox" name="rating-25" id="rating-25" />{" "}
                <div className="flex">
                  <FaStar fill="#fde047" size={22} />
                  <FaStar fill="#fde047" size={22} />
                  <FaStarHalfAlt fill="#fde047" size={22} />
                  <FaRegStar fill="#fde047" size={22} />
                  <FaRegStar fill="#fde047" size={22} />
                </div>
              </label>
              <label className="flex gap-2" htmlFor="rating-2">
                <input type="checkbox" name="rating-2" id="rating-2" />{" "}
                <div className="flex">
                  <FaStar fill="#fde047" size={22} />
                  <FaStar fill="#fde047" size={22} />
                  <FaRegStar fill="#fde047" size={22} />
                  <FaRegStar fill="#fde047" size={22} />
                  <FaRegStar fill="#fde047" size={22} />
                </div>
              </label>
              <label className="flex gap-2" htmlFor="rating-15">
                <input type="checkbox" name="rating-15" id="rating-15" />{" "}
                <div className="flex">
                  <FaStar fill="#fde047" size={22} />
                  <FaStarHalfAlt fill="#fde047" size={22} />
                  <FaRegStar fill="#fde047" size={22} />
                  <FaRegStar fill="#fde047" size={22} />
                  <FaRegStar fill="#fde047" size={22} />
                </div>
              </label>
              <label className="flex gap-2" htmlFor="rating-1">
                <input type="checkbox" name="rating-1" id="rating-1" />{" "}
                <div className="flex">
                  <FaStar fill="#fde047" size={22} />
                  <FaRegStar fill="#fde047" size={22} />
                  <FaRegStar fill="#fde047" size={22} />
                  <FaRegStar fill="#fde047" size={22} />
                  <FaRegStar fill="#fde047" size={22} />
                </div>
              </label>
              <label className="flex gap-2" htmlFor="rating-05">
                <input type="checkbox" name="rating-05" id="rating-05" />{" "}
                <div className="flex">
                  <FaStarHalfAlt fill="#fde047" size={22} />
                  <FaRegStar fill="#fde047" size={22} />
                  <FaRegStar fill="#fde047" size={22} />
                  <FaRegStar fill="#fde047" size={22} />
                  <FaRegStar fill="#fde047" size={22} />
                </div>
              </label>
            </div>
            <div className="flex flex-col gap-2.5 mt-3 py-3 border-t-1 border-t-gray-500">
              <h4 className="text-lg">Price</h4>
              <label htmlFor="price-0-5">
                <input type="checkbox" name="price-0-5" id="price-0-5" /> $0 -
                $5
              </label>
              <label htmlFor="price-5-25">
                <input type="checkbox" name="price-5-25" id="price-5-25" /> $5 -
                $25
              </label>
              <label htmlFor="price-25-75">
                <input type="checkbox" name="price-25-75" id="price-25-75" />{" "}
                $25 - $75
              </label>
              <label htmlFor="price-75-150">
                <input type="checkbox" name="price-75-150" id="price-75-150" />{" "}
                $75 - $150
              </label>
              <label htmlFor="price-150-250">
                <input
                  type="checkbox"
                  name="price-150-250"
                  id="price-150-250"
                />{" "}
                $150 - $250
              </label>
              <label htmlFor="price-above-250">
                <input
                  type="checkbox"
                  name="price-above-250"
                  id="price-above-250"
                />
                $250{"<"}
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Filters;
