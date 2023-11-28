import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const items =
    cart.length > 0 ? (
      <span className="bg-red-500 text-white rounded-full px-2 py-1">
        {cart.length}
      </span>
    ) : null;
    
  return (
    <nav className="bg-blue-700 p-4 w-full">
      <div className="container flex justify-between items-center text-white">
        <Link to="/" className="text-xl font-bold">
          FakeStore
        </Link>
        <div className="flex items-center ">
          <Link to="/cart" className="mr-4">
            <div>
              <FaShoppingCart className="text-2xl" />
            </div>
          </Link>
          {items}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
