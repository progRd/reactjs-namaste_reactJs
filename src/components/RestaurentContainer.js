import RestaurentCard from "./RestaurentCard";
import { restaurants } from "../utilities/mockData";
import { useState } from "react";
const RestaurentContainer = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurants);
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
