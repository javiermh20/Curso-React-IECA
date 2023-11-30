import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login, user, loadingSession } = useLogin();

  if (loadingSession) return <p>Cargando...</p>;

  if (!loadingSession && user){
    return <Navigate to="/" replace={true}></Navigate>;
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(form.email, form.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-gray-100 rounded p-8 w-full sm:w-96 text-black">
        <h1 className="text-2xl font-bold mb-4">Iniciar Sesión</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-semibold">
              Email
            </label>
            <input
              className="border border-gray-300 rounded p-2"
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm font-semibold">
              Contraseña
            </label>
            <input
              className="border border-gray-300 rounded p-2"
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
            />
          </div>
          <button className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600 transition">
            Iniciar Sesión
          </button>
        </form>
        {error ? <span className="text-red-500 mt-2">{error}</span> : null}
      </div>
    </div>
  );
};

export default Login;
