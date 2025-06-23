import Header from "../../components/Header";
import { IoIosSearch } from "react-icons/io";
import Filters from "./Filters";
import { useFetchShop } from "../../hooks/useFetchShop";
import Loading from "./Loading";
import ProductCard from "./ProductCard";
import Footer from "../../components/Footer";
import { useState } from "react";
import { useCart } from "../../context/CartContext";

function Shop() {
  const { addToCart, cartTotalItems } = useCart();

  const { data, loading, error } = useFetchShop();
  const [filters, setFilters] = useState({
    categories: [],
    prices: [],
    ratings: [],
    search: "",
  });

  function filterData(shopData) {
    const filteredCategoriesArr =
      filters.categories.length > 0
        ? shopData.filter((product) =>
            filters.categories.includes(product.category)
          )
        : shopData;
    const fixedRatingsShopData = filteredCategoriesArr.map((product) => {
      let newRate;

      if (product.rating.rate < 0.75) {
        newRate = 0.5;
      } else if (product.rating.rate < 1.25) {
        newRate = 1;
      } else if (product.rating.rate < 1.75) {
        newRate = 1.5;
      } else if (product.rating.rate < 2.25) {
        newRate = 2;
      } else if (product.rating.rate < 2.75) {
        newRate = 2.5;
      } else if (product.rating.rate < 3.25) {
        newRate = 3;
      } else if (product.rating.rate < 3.75) {
        newRate = 3.5;
      } else if (product.rating.rate < 4.25) {
        newRate = 4;
      } else if (product.rating.rate < 4.75) {
        newRate = 4.5;
      } else {
        newRate = 5;
      }

      return {
        ...product,
        rating: {
          ...product.rating,
          rate: newRate,
        },
      };
    });

    const filteredRatingsArr =
      filters.ratings.length > 0
        ? fixedRatingsShopData.filter((product) =>
            filters.ratings.includes(`${product.rating.rate}`)
          )
        : fixedRatingsShopData;

    const filteredPricessArr =
      filters.prices.length > 0
        ? filteredRatingsArr.filter((product) => {
            const isInFilters = filters.prices.find((priceSpan) => {
              return (
                product.price > priceSpan.min &&
                (priceSpan.max === null || product.price < priceSpan.max)
              );
            });
            return isInFilters === undefined ? false : true;
          })
        : filteredRatingsArr;

    const filteresSearchArr = filteredPricessArr.filter((product) =>
      product.title.toLowerCase().includes(filters.search.toLowerCase())
    );

    return filteresSearchArr;
  }

  function onChangeCategory(e) {
    if (e.target.checked) {
      setFilters({
        ...filters,
        categories: [...filters.categories, e.target.value],
      });
    } else if (!e.target.checked) {
      setFilters({
        ...filters,
        categories: filters.categories.filter(
          (category) => category !== e.target.value
        ),
      });
    }
  }
  function onChangeRatings(e) {
    if (e.target.checked) {
      setFilters({
        ...filters,
        ratings: [...filters.ratings, e.target.value],
      });
    } else if (!e.target.checked) {
      setFilters({
        ...filters,
        ratings: filters.ratings.filter((rating) => rating !== e.target.value),
      });
    }
  }
  function onChangePrices(e) {
    const priceValue = JSON.parse(e.target.value);
    if (e.target.checked) {
      setFilters({
        ...filters,
        prices: [...filters.prices, priceValue],
      });
    } else if (!e.target.checked) {
      setFilters({
        ...filters,
        prices: filters.prices.filter((price) => {
          return JSON.stringify(price) !== e.target.value;
        }),
      });
    }
  }
  function searchOnChange(e) {
    setFilters({ ...filters, search: e.target.value });
  }
  // function searchOnChange(e) {
  //   const search = e.target.value;

  //   setSearchData(
  //     data.filter((data) =>
  //       data.title.toLowerCase().includes(search.toLowerCase())
  //     )
  //   );
  // }
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
            onChangeRatings={onChangeRatings}
            onChangePrices={onChangePrices}
          ></Filters>
          <div className="flex flex-grow items-start  justify-center">
            {loading && (
              <div className="pt-40">
                <Loading />
              </div>
            )}{" "}
            {data && (
              <div className="grid grid-cols-1, lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 p-4">
                {filterData(data).map((product) => (
                  <ProductCard
                    key={crypto.randomUUID()}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    rating={product.rating}
                    addToCart={() => addToCart(product)}
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
