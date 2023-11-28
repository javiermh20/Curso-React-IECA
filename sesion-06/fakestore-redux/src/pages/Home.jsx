import { useEffect, useState } from "react";
import { useFakestoreApi } from "../hooks/useFakestoreApi";
import ProductItem from "../components/ProductItem";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";

const Home = () => {
  const { data: products, loading, error, getProducts } = useFakestoreApi();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getProducts();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products?.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const cartProductIds = useSelector((state) => state.cart.map((product) => product.id));

  return (
    <div className="text-black">
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
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
