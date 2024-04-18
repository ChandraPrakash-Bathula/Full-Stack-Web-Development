import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItems = () => {
    dispatch(removeItem());
  };

  return (
    <>
      <div className="w-full m-4 p-4 flex justify-around">
        <h1 className="text-2xl font-bold">Cart</h1>
        <button
          className="m-2 p-2 text-white rounded-md bg-black"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
      <button
        className="m-2 p-2 text-white rounded-md bg-black"
        onClick={handleRemoveItems}
      >
        Remove Item
      </button>
      <div className="w-6/12 m-auto">
        {cartItems.length > 0 ? (
          <ItemList items={cartItems} />
        ) : (
          <h1 className="text-center font-medium">
            Cart is Empty. Add Items to the cart
          </h1>
        )}
      </div>
    </>
  );
};

export default Cart;
