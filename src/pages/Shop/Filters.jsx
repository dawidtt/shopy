import { VscSettings } from "react-icons/vsc";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Rating from "../../components/Rating";

function Filters({ categories, onChangeCategory, onChangeRatings }) {
  const [categoryChecboxes, setCategoryCheckboxes] = useState(
    new Array(4).fill(false)
  );
  const [ratingCheckboxes, setRatingCheckboxes] = useState(
    new Array(10).fill(false)
  );
  const [priceCheckboxes, setPriceCheckboxes] = useState(
    new Array(6).fill(false)
  );

  const [filtersVisible, setFiltersVisible] = useState(
    window.innerWidth >= 768 ? true : false
  );
  const toggleVisible = () => {
    if (filtersVisible === false) setFiltersVisible(true);
    else setFiltersVisible(false);
  };
  const handleOnChangeCheckboxCategory = (index) => {
    setCategoryCheckboxes(
      categoryChecboxes.map((checkbox, mapIndex) =>
        index === mapIndex ? !checkbox : checkbox
      )
    );
  };
  const handleOnChangeCheckboxRating = (index) => {
    setRatingCheckboxes(
      ratingCheckboxes.map((checkbox, mapIndex) =>
        index === mapIndex ? !checkbox : checkbox
      )
    );
  };
  const handleOnChangeCheckboxPrice = (index) => {
    setCategoryCheckboxes(
      categoryChecboxes.map((checkbox, mapIndex) =>
        index === mapIndex ? !checkbox : checkbox
      )
    );
  };
  let ratingValue = 5;
  const ratingCheckboxesValues = [];
  while (ratingValue > 0.4) {
    ratingCheckboxesValues.push(ratingValue);
    ratingValue -= 0.5;
  }
  return (
    <div className="absolute w-[100%] md:static md:flex  md:w-fit md:pl-4 left-[0] top-[0] z-4">
      {!filtersVisible && (
        <button className="ml-4 mt-12" onClick={toggleVisible}>
          <VscSettings size={26} />
        </button>
      )}
      {filtersVisible && (
        <div className="absolute w-[100%] md:static left-0  top-0   md:bg-white md:w-[280px] p-4 rounded-xl bg-blue-100">
          <div className="flex justify-between ">
            <h3 className="text-2xl">Filters</h3>
            <button className="md:hidden" onClick={toggleVisible}>
              <IoMdClose size={25} />
            </button>
          </div>

          <div className="border-r-1 pr-6 h-full">
            <div className="flex flex-col gap-2.5 mt-3 py-3 border-t-1 border-t-gray-500 ">
              <h4 className="text-lg">Categories</h4>
              <form className="flex flex-col gap-2.5">
                {categories &&
                  categories.map((category, index) => {
                    return (
                      <label
                        className="flex gap-2"
                        key={crypto.randomUUID()}
                        htmlFor={category}
                      >
                        <input
                          type="checkbox"
                          name={category}
                          id={category}
                          value={category}
                          checked={categoryChecboxes[index]}
                          onChange={(e) => {
                            handleOnChangeCheckboxCategory(index);
                            onChangeCategory(e);
                          }}
                        />
                        {category}
                      </label>
                    );
                  })}
              </form>
            </div>
            <div className="flex flex-col mt-3 py-3 border-t-1 border-t-gray-500 ">
              <h4 className="text-lg">Rating</h4>

              {ratingCheckboxesValues.map((ratingMapValue, index) => {
                return (
                  <label
                    className="flex gap-2"
                    htmlFor={`rating-${ratingValue}`}
                    key={crypto.randomUUID()}
                  >
                    <input
                      type="checkbox"
                      name={`rating-${ratingMapValue}`}
                      id={`rating-${ratingMapValue}`}
                      value={ratingMapValue}
                      checked={ratingCheckboxes[index]}
                      onChange={(e) => {
                        handleOnChangeCheckboxRating(index);
                        onChangeRatings(e);
                      }}
                    />{" "}
                    <Rating rating={{ rate: ratingMapValue }}></Rating>
                  </label>
                );
              })}
            </div>
            <div className="flex flex-col gap-2.5 mt-3 py-3 border-t-1 border-t-gray-500">
              <h4 className="text-lg">Price</h4>
              <label className="flex gap-2" htmlFor="price-0-5">
                <input
                  type="checkbox"
                  name="price-0-5"
                  id="price-0-5"
                  value={{ min: 0, max: 5 }}
                />{" "}
                $0 - $5
              </label>
              <label className="flex gap-2" htmlFor="price-5-25">
                <input
                  type="checkbox"
                  name="price-5-25"
                  id="price-5-25"
                  value={{ min: 5, max: 25 }}
                />{" "}
                $5 - $25
              </label>
              <label className="flex gap-2" htmlFor="price-25-75">
                <input
                  type="checkbox"
                  name="price-25-75"
                  id="price-25-75"
                  value={{ min: 25, max: 75 }}
                />{" "}
                $25 - $75
              </label>
              <label className="flex gap-2" htmlFor="price-75-150">
                <input
                  type="checkbox"
                  name="price-75-150"
                  id="price-75-150"
                  value={{ min: 75, max: 150 }}
                />{" "}
                $75 - $150
              </label>
              <label className="flex gap-2" htmlFor="price-150-250">
                <input
                  type="checkbox"
                  name="price-150-250"
                  id="price-150-250"
                  value={{ min: 150, max: 250 }}
                />{" "}
                $150 - $250
              </label>
              <label className="flex gap-2" htmlFor="price-above-250">
                <input
                  type="checkbox"
                  name="price-above-250"
                  id="price-above-250"
                  value={{ min: 250, max: null }}
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
