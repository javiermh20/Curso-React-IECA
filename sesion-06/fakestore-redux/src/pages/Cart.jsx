import React, { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      const cartTotal = cart.reduce((acc, product) => acc + parseFloat(product.price), 0);
      setTotal(cartTotal.toFixed(2));
    };

    calculateTotal();
  }, [cart]);

  return (
    <div className="flex flex-col gap-4 text-black">
      <h1 className="text-2xl font-bold">Carrito</h1>

      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <ul className="grid grid-cols-5 gap-4">
            {cart.map((product) => (
              <ProductItem product={product} key={product.id} />
            ))}
          </ul>
          <span>Total de la compra: ${total}</span>
        </>
      )}
    </div>
  );
};

export default Cart;
