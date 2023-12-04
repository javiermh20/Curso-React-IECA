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
    <nav className="bg-blue-700 p-4">
      <div className="container flex justify-between items-center text-white">
        <div className="flex items-center">
          <div className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.99 16l-4.24-4.24M12 7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.99 0l4.24-4.24M12 17c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"
              />
            </svg>
          </div>
          <div className="font-bold text-lg lg:text-xl rounded-md p-2">
            Chat App
          </div>
        </div>
        <div className="flex items-center">
          {!user ? (
            <div className="flex items-center rounded-md hover:bg-blue-500 p-2">
              <Link to="/">SignIn</Link>
            </div>
          ) : (
            <div className="flex items-center ml-4">
              <div className="mr-2 lg:mr-0 hover:bg-blue-500 rounded-md p-2">
                <span className="lg:hidden">{user.email}</span>
              </div>
              <div className="flex items-center hover:bg-red-500 rounded-md p-2">
                <button onClick={handleLogout}>Logout</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
