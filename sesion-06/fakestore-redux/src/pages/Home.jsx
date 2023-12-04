import React, { useEffect, useState } from "react";
import { useFakestoreApi } from "../hooks/useFakestoreApi";
import ProductItem from "../components/ProductItem";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";

const Home = () => {
  const { data: products, loading, error, getProducts } = useFakestoreApi();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const get = async () => {
      const unsubscribe = await getProducts();
      return () => {
        if (typeof unsubscribe === "function") {
          unsubscribe();
        }
      };
    };
    get();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Selector sin memorización
  const cartSelector = (state) => state.cart.map((product) => product.id);

  // Selector memorizado
  const memorizedCartSelector = createSelector([(state) => state.cart], (cart) =>
    cart.map((product) => product.id)
  );

  // Uso en el componente
  const cartProductIds = useSelector(memorizedCartSelector);

  const filteredProducts = products?.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="text-black mx-4 md:mx-8 lg:mx-16 xl:mx-20">
      {loading && <p>Cargando...</p>}
      {error && <p>Hubo un error</p>}
      {products && (
        <div>
          <div className="mb-8 text-center">
            <input
              type="text"
              placeholder="Buscar productos"
              className="rounded-full px-4 py-2 text-black border border-gray-300 focus:outline-none focus:border-blue-500"
              onChange={handleSearch}
            />
            <FaSearch className="inline-block ml-2 text-gray-500" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Productos</h1>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {filteredProducts.map((product) => (
              <ProductItem
                key={product.id}
                product={product}
                isInCart={cartProductIds.includes(product.id)}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;
