import { restaurantList } from "./config";
import Foodcard, { PromotedFoodCard } from "./FoodCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const BodyComponent = () => {
  //searchText is a local state variable.
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const PromotedCard = PromotedFoodCard(Foodcard);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    ); //optional chaining checks if it is present.
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    ); //optional chaining checks if it is present.
  }
  console.log(setAllRestaurants);

  const { loggedInUser, setUserName } = useContext(UserContext);

  const online = useOnline();

  if (!online) {
    return <h1>🔴 No Internet Bro.</h1>;
  }

  if (!allRestaurants) return <h2>No Data Found</h2>;
  if (!filteredRestaurants) return <h3>No Data Found</h3>;

  return allRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div data-testid="resCard" className="p-2 my-2 flex justify-start">
        <div className="">
          <input
            type="text"
            data-testid = "searchInput"
            className="p-2 rounded-md bg-white border border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 "
            placeholder="search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="p-2 m-2 bg-sky-600 text-white rounded-md hover:bg-sky-900"
            onClick={() => {
              const data = filterData(searchText, allRestaurants);
              setFilteredRestaurants(data);
            }}
          >
            Search
          </button>
        </div>
        <div className="p-4 m-4 flex items-center">
          <label>Username : </label>
          <input
            className="border p-2 border-sky-500 text-black rounded-md"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <h2>{searchText ? "You are searching for : " + searchText : ""}</h2>
      </div>
      <div className="flex flex-wrap pl-6 ">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {Object.keys(restaurant?.info?.cuisines).length < 5 ? (
                <Foodcard resData={restaurant?.info} />
              ) : (
                <PromotedCard resData={restaurant?.info} />
              )}
              {/* <Foodcard {...restaurant.info} /> */}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default BodyComponent;
