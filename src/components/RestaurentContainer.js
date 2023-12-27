import RestaurentCard from "./RestaurentCard";
import { restaurants } from "../utilities/mockData";
import { useState, useEffect } from "react";
import LoaderComponent from "./LoaderComponent";
const RestaurentContainer = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    featchData();
  }, []);

  const featchData = async () => {
    // let getData = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6125784&lng=88.4295279&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );

    let getData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5735314&lng=88.4331189&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    getData = await getData.json();
    setListOfRestaurants(
      getData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterRestaurants(
      getData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  // conditional rendering
  if (listOfRestaurants && listOfRestaurants.length === 0) {
    return <LoaderComponent />;
  }
  return (
    <div className="body">
      <div className="filterList">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              console.log(e.target.value);
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // console.log(listOfRestaurants);
              const filterRes = listOfRestaurants.filter((ele) => {
                // console.log(ele.info.name, searchText);
                return (
                  ele?.info?.name
                    ?.toLowerCase()
                    .indexOf(searchText.toLowerCase()) > -1
                );
              });
              console.log("filterRes", filterRes);
              setFilterRestaurants(filterRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          onClick={() => {
            const filterRes = listOfRestaurants.filter(
              (ele) => ele.info.avgRating > 4.2
            );
            setListOfRestaurants(filterRes);
          }}
        >
          Filter
        </button>
        <button
          onClick={() => {
            setListOfRestaurants(restaurants);
          }}
        >
          Remove Filter
        </button>
      </div>
      <div className="res-container">
        {filterRestaurants.map((elelment, index) => (
          <RestaurentCard key={elelment.info.id} resInfo={elelment} />
        ))}
      </div>
    </div>
  );
};

export default RestaurentContainer;
