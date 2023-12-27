import RestaurentCard from "./RestaurentCard";
import { restaurants } from "../utilities/mockData";
import { useState, useEffect } from "react";
import LoaderComponent from "./LoaderComponent";
const RestaurentContainer = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

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
      getData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
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
        {listOfRestaurants.map((elelment, index) => (
          <RestaurentCard key={elelment.info.id} resInfo={elelment} />
        ))}
      </div>
    </div>
  );
};

export default RestaurentContainer;
