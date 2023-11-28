// ProductItem.js
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartSlices";

const ProductItem = ({ product, isInCart }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    Swal.fire({
      icon: "success",
      title: "Producto añadido al carrito",
      showConfirmButton: true,
      confirmButtonText: "Aceptar",
    });
  };

  const handleDeleteFromCart = () => {
    Swal.fire({
      icon: "error",
      title: "¿Estás seguro de eliminar este producto del carrito?",
      showConfirmButton: true,
      confirmButtonText: "Aceptar",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeFromCart(product.id));
      }
    });
  };

  const showProductDetails = () => {
    if (location.pathname == "/cart" || isInCart) {
      Swal.fire({
        title: product.title,
        text: `Precio: $${product.price}\tDescripción: ${product.description}`,
        imageUrl: product.image,
        imageAlt: product.title,
        showConfirmButton: true,
        confirmButtonText: "Eliminar del carrito",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(removeFromCart(product.id));
          Swal.fire({
            icon: "error",
            title: "Producto eliminado del carrito",
            showConfirmButton: true,
            confirmButtonText: "Aceptar",
          });
        }
      });
    } else {
      Swal.fire({
        title: product.title,
        text: `Precio: $${product.price}\tDescripción: ${product.description}`,
        imageUrl: product.image,
        imageAlt: product.title,
        showConfirmButton: true,
        confirmButtonText: "Agregar al carrito",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(addToCart(product));
          Swal.fire({
            icon: "success",
            title: "Producto añadido al carrito",
            showConfirmButton: true,
            confirmButtonText: "Aceptar",
          });
        }
      });
    }
  };

  return (
    <li className="bg-white rounded-lg overflow-hidden shadow-md transition transform hover:scale-105">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-contain rounded-t cursor-pointer"
        onClick={showProductDetails} // Agrega este evento de clic
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
        <p className="text-gray-600 mb-4">${product.price}</p>
        {location.pathname === "/cart" || isInCart ? (
          <button
            onClick={handleDeleteFromCart}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center"
          >
            Eliminar
          </button>
        ) : (
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
          >
            Añadir al carrito <FaShoppingCart className="ml-2" />
          </button>
        )}
      </div>
    </li>
  );
};

export default ProductItem;
