import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "./config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantDetails = () => {
  const params = useParams(); // const {id} = useParams;
  const { id } = params;
  // const [restaurantDetails, setRestaurantDetails] = useState(null);
  const dummy = "Dummy Data";
  const restaurantDetails = useRestaurant(id);

  const [showIndex, setShowIndex] = useState(null);

  if (restaurantDetails == null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    restaurantDetails.cards[0]?.card?.card?.info;

  const { itemCards } = restaurantDetails?.cards[2]?.groupedCard?.cardGroupMap
    ?.REGULAR?.cards[1]?.card?.card
    ? restaurantDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card
    : restaurantDetails?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card;
  console.log(
    restaurantDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  );

  const foodCategory =
    restaurantDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(foodCategory);
  return (
    <>
      <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg">{cuisines.join(", ")}</p>
        {foodCategory.map((category, index) => (
          //controlled component
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index == showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
            dummy={dummy}
          />
        ))}
      </div>
    </>
  );
};

/**<h4>{costForTwoMessage}</h4>
      </div>
      <div>
        <h2>Menu</h2>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item?.card?.info?.name} - {"Rs."}
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </li>
          ))}
        </ul> */

export default RestaurantDetails;
