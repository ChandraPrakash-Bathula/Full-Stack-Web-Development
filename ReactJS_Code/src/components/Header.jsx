import { useState, useContext } from "react";
import Logo from "../assets/img/LgoRes.jpeg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => {
  return (
    // <h1 id="title" key="h1"> Indus Feast</h1>
    <Link href="/">
      <img className="h-28 pl-2" src={Logo} alt="restaurant-logo" />
    </Link>
  );
};

const HeaderComponent = () => {
  // const logData = useContext(UserContext);
  // console.log(logData);

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => 
    store.cart.items
  );

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  return (
    <main>
      <div className="flex justify-between shadow-lg bg-sky-300 sm:bg-sky-50 md:bg-sky-200">
        <Title />
        <div className="nav-bar-items">
          <ul className="flex py-10">
            <li className="px-2 font-bold">{loggedInUser}</li>
            <li className="px-2"> OnlineStatus :{isOnline ? " ✅" : " 🔴"}</li>
            <li className="px-2">
              <Link to="/">Home</Link>
            </li>
            <li className="px-2">
              <Link to="/about">About</Link>
            </li>
            <li className="px-2">
              <Link to="/instamart">Instamart</Link>
            </li>
            <li className="px-2">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="px-2 font-bold text-lg"> <Link to="/cart">Cart ({cartItems.length} item)</Link> </li>
            <li className="px-2">
              {isLoggedIn ? (
                <button
                  onClick={() => {
                    setIsLoggedIn(false);
                  }}
                >
                  LogOut
                </button>
              ) : (
                <button
                  onClick={() => {
                    setIsLoggedIn(true);
                  }}
                >
                  LogIn
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default HeaderComponent;