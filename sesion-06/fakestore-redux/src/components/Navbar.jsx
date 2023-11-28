import React from "react";
import { FaShoppingCart } from "react-icons/fa"; // Asegúrate de tener FontAwesome instalado
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 p-4 w-full">
      <div className="container flex justify-between items-center text-white">
        <Link to="/" className="text-xl font-bold">FakeStore</Link>
        <div className="flex items-center">
          <Link to="/cart" className="mr-4">
            <FaShoppingCart className="text-2xl" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
