import { useEffect } from "react";
import { useFakestoreApi } from "../hooks/useFakestoreApi";
import ProductItem from "../components/ProductItem";

const Home = () => {
  const { data: products, loading, error, getProducts } = useFakestoreApi();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="text-black">
      {loading ? <p>Cargando...</p> : null}
      {error ? <p>Hubo un error</p> : null}
      {products ? (
        <ul className="grid grid-cols-5 gap-4">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Home;
