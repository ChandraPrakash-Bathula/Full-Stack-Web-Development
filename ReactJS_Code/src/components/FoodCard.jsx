import { restaurantList, IMG_URL } from "./config";

const Foodcard = (props) => {

const {resData} = props;
const { name, cuisines, cloudinaryImageId, areaName, sla } = resData
  return (
    <div className="w-52 h-82 p-3 m-3 rounded-md shadow-lg bg-sky-200">
      <img src={IMG_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines?.join(", ")}</h3>
      <h4>{areaName} </h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export const PromotedFoodCard = (Foodcard) => {
  return (props) => {
    return (
      <>
        <div>
          <label className="absolute text-white bg-black p-2 m-2 rounded-lg">
            Promoted
          </label>
          <Foodcard {...props} />
        </div>
      </>
    );
  };
};

export default Foodcard;

{
  /* <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} /> */
}

/* const Foodcard = (props) => {
   return (
     <div className="food-card">
       <img src={restaurantList[0].imageUrl} />
       <h2>{restaurantList[0]?.hotel}</h2>
       <h3>{restaurantList[0]?.name.join(", ")}</h3>
       <h4>{restaurantList[0]?.starRating} stars</h4>
     </div>
   );
 }; */
