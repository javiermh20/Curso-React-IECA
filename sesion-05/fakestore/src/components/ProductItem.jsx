import { useCartContext } from "../context/CartContext";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const ProductItem = ({ product }) => {
  const { dispatch } = useCartContext();

  return (
    <li className="bg-white rounded-lg overflow-hidden shadow-md transition transform hover:scale-105">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-contain rounded-t"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-black">
          {product.title}
        </h3>
        <p className="text-gray-600 mb-4">${product.price}</p>
        <button
          onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
        >
          Añadir al carrito <FaShoppingCart className="ml-2" />
        </button>
      </div>
    </li>
  );
};

export default ProductItem;
