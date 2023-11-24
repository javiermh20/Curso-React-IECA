import { useEffect } from "react";
import { useFakestoreApi } from "../hooks/useFakestoreApi";

const Home = () => {
  const { data: products, loading, error, getProducts } = useFakestoreApi();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="text-black">
      <h1>Home</h1> {loading ? <p>Cargando...</p> : null}
      {error ? <p>Hubo un error</p> : null}
      {products ? (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <img src={product.image} className="w-20" />
              <span>{product.title}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Home;
