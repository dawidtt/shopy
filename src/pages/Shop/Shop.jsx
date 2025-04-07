import Header from "../../components/Header";
import { IoIosSearch } from "react-icons/io";
import Filters from "./Filters";
import { useFetchShop } from "../../hooks/useFetchShop";
import Loading from "./Loading";
import ProductCard from "./ProductCard";
import Footer from "../../components/Footer";
import { useState } from "react";
function Shop() {
  const { data, loading, error } = useFetchShop();
  const [searchData, setSearchData] = useState([]);

  function searchOnChange(e) {
    const search = e.target.value;

    setSearchData(
      data.filter((data) =>
        data.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }
  const [filters, setFilters] = useState({
    categories: [],
    prices: [],
    ratings: [],
  });

  function onChangeCategory(e) {
    console.log(e.target.value);
    if (e.target.checked) {
      setFilters({
        ...filters,
        categories: [...filters.categories, e.target.value],
      });
    } else if (!e.target.checked) {
      setFilters({
        ...filters,
        categories: [
          filters.categories.filter((category) => category !== e.target.value),
        ],
      });
    }
    console.log(filters);
  }
  function getCategories(data) {
    const categories = [];
    for (const product of data) {
      if (!categories.includes(product.category))
        categories.push(product.category);
    }
    return categories;
  }
  const allCategories = data ? getCategories(data) : null;
  return (
    <div>
      <Header></Header>
      <div className="relative ">
        <div className=" flex justify-center relative my-12 w-[fit-content] mx-auto">
          <input
            onChange={searchOnChange}
            className="text-gray-800 px-3.5 py-4 pr-10 w-[240px] shadow-lg border-1 rounded-2xl border-gray-400 h-[34px] md:text-lg md:h-[38px] md:w-[280px] focus:outline-1"
            type="text"
            placeholder="Search..."
          />
          <IoIosSearch
            className="absolute right-[10px] top-[22%] z-[-2]"
            size={22}
          />
        </div>
        <div className="flex">
          <Filters
            categories={allCategories}
            onChangeCategory={onChangeCategory}
          ></Filters>
          <div className="flex flex-grow items-start  justify-center">
            {loading && (
              <div className="pt-40">
                <Loading />
              </div>
            )}{" "}
            {data && (
              <div className="grid grid-cols-1, lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 p-4">
                {(searchData.length > 0 ? searchData : data).map((product) => (
                  <ProductCard
                    key={crypto.randomUUID()}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    rating={product.rating}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Shop;
