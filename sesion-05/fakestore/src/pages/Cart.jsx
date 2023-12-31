import { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import { useCartContext } from "../context/CartContext";

const Cart = () => {
  const [total, setTotal] = useState(0);
  const {
    state: { cart },
  } = useCartContext();

  useEffect(() => {
    setTotal(cart.reduce((acc, product) => acc + product.price, 0).toFixed(2));
  }
  , [cart]);

  return (
    <div className="flex flex-col gap-4 text-black">
      <h1 className="text-2xl font-bold">Cart</h1>
      <ul className="grid grid-cols-5 gap-4">
        {cart.map((product) => (
          <ProductItem product={product} key={product.id}/>
        ))}
      </ul>
      <span>Total de la compra: ${ total  }</span>
    </div>
  );
};

export default Cart;
