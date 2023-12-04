import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-800 via-blue-600 to-pink-500 p-4 backdrop-blur">
      <div className="container flex justify-between items-center text-white">
        <div className="flex items-center">
          <div className="font-bold text-lg lg:text-xl rounded-md p-2">
            Chat App
          </div>
        </div>
        <div className="flex items-center">
          {!user ? (
            <div className="flex items-center rounded-md hover:bg-indigo-500 p-2">
              <Link to="/">Iniciar Sesión</Link>
            </div>
          ) : (
            <div className="flex items-center ml-4">
              <div className="mr-2 lg:mr-0 rounded-md p-2">
                <span>{user.email}</span>
              </div>
              <div className="flex items-center hover:bg-pink-500 rounded-md p-2">
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
