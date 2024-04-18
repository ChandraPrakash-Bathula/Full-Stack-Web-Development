import { useState,useEffect } from "react";
import { MENU_API } from "../components/config";

const useRestaurant = (id) => {
  const [restaurantDetails, setRestaurantDetails] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      MENU_API + id
      // "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setRestaurantDetails(json?.data);
  }
  return restaurantDetails;
};

export default useRestaurant;
