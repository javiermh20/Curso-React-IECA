import { useCartContext } from "../context/CartContext";
import React from "react";
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const ProductItem = ({ product }) => {
  const { dispatch } = useCartContext();

  const addToCart = () =>{
    dispatch({ type: "ADD_TO_CART", payload: product })
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto añadido al carrito",
      showConfirmButton: true,
      confirmButtonText: "Aceptar",
    });
  }

  const deleteToCart = () =>{
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "Producto eliminado del carrito",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({ type: "REMOVE_FROM_CART", payload: product })
      }
    });
  }

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
        {location.pathname !== "/cart" ?
          <button
            onClick={addToCart}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-2 rounded flex items-center justify-center"
          >
            Añadir <FaShoppingCart className="ml-2" />
          </button>
          :
          <button
            onClick={() =>
              deleteToCart()
            }
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mb-2 rounded flex items-center justify-center"
          >
            Eliminar <FaTrash className="ml-2" />
          </button>
        }
      </div>
    </li>
  );
};

export default ProductItem;
