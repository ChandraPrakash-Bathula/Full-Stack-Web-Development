import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data, showItems, setShowIndex,dummy }) => {
  // const [showItems,setShowItems] = useState(false);
  console.log(data);

  const handleClick = () => {
    // setShowItems(!showItems);
    setShowIndex();
  };

  return (
    <>
      <div
        className="w-6/12 p-4 mx-auto my-6 bg-gray-100 shadow-lg rounded-md"
        onClick={handleClick}
      >
        <div className="flex justify-between cursor-pointer">
          <span className="font-bold text-lg">
            {data?.title} ({data?.itemCards.length})
          </span>
          {/* {"(" + Object.keys(data?.itemCards).length + ")"} */}
          <span>⬇️</span>
        </div>
        {showItems && <ItemList items={data?.itemCards} dummy={dummy} />}
      </div>
    </>
  );
};

export default RestaurantCategory;
