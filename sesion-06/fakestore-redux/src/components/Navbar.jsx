import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const cartItemsCount = cart.length;
  const { user, logout } = useLogin();
  const navigate = useNavigate();

  const cartIndicator =
    cartItemsCount > 0 ? (
      <span className="bg-red-500 text-white rounded-full px-2 py-1">
        {cartItemsCount}
      </span>
    ) : null;

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <nav className="bg-blue-700 p-4">
      <div className="container flex justify-between items-center text-white">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold mr-4 hover:bg-blue-500 rounded-md p-2">
            FakeStore
          </Link>
        </div>
        <div className="flex items-center">
          <div className="flex items-center mr-6">
            <Link to="/cart" className="mr-2 hover:bg-blue-500 rounded-md p-2">
              <FaShoppingCart className="text-2xl" />
            </Link>
            {cartIndicator}
          </div>
          {!user ? (
            <div className="flex items-center rounded-md hover:bg-blue-500 p-2">
              <Link to="/login">Iniciar Sesión</Link>
            </div>
          ) : (
            <div className="flex items-center mr-4">
              <span className="mr-2 hover:bg-blue-500 rounded-md p-2">{user.email}</span>
              <div className="flex items-center hover:bg-red-500 rounded-md p-2">
                <button onClick={handleLogout}>Cerrar Sesión</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
