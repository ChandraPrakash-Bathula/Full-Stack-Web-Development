import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { IMG_URL } from "./config";

const ItemList = ({ items, dummy }) => {

  const dispatch= useDispatch();

  const handleItem = (item) => {
    dispatch(addItem(item))
  };

  console.log(dummy);
  return (
    <>
      <div>
        {items.map((item) => (
          <div
          data-testid="foodItems"
            key={item?.card?.info?.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex"
          >
            <div className="w-9/12">
              <div className="py-2 ">
                <span>{item?.card?.info?.name}</span>
                <span>
                  {" "}
                  - ₹{" "}
                  {item?.card?.info?.price
                    ? item?.card?.info?.price / 100
                    : item?.card?.info?.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">
                {item?.card?.info?.description ||
                  item?.card?.info?.itemAttribute?.vegClassifier}
              </p>
              <div></div>
            </div>
            <div className="w-3/12 p-4">
              <button
                className="bg-sky-50 mx-16 text-black p-2 shadow-lg absolute rounded-md"
                onClick={() => handleItem(item)}
              >
                Add +
              </button>
              <img
                className="rounded-md"
                src={
                  item?.card?.info?.imageId
                    ? IMG_URL + item?.card?.info?.imageId
                    : IMG_URL + "yum7s0rqbzufhocpw0mb"
                }
              />{" "}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemList;
