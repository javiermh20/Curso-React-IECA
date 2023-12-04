import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import LoginForm from "../components/LoginForm";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login, user, loadingSession } = useAuth();

  if (loadingSession) return <p>Cargando...</p>;

  if (!loadingSession && user) {
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
      await login(form.email, form.password);
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen text-indigo-800"
      style={{
        backgroundImage: `url('https://img.freepik.com/vector-gratis/fondo-manchas-abstractas-coloridas-acuarela_23-2148209190.jpg?w=2000&t=st=1701675128~exp=1701675728~hmac=441d401eef45ad3ed9a00ebb53adf405ec7cdc388ac00f08ffd9d2c7ce0293b7')`,
        backgroundSize: "cover",
      }}
    >
      <div
        className="bg-white p-8 rounded-lg shadow-md max-w-md w-full md:w-2/3 sm:w-3/4 lg:w-1/2"
        style={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.3)",
        }}
      >
        <h1 className="text-4xl font-bold mb-4 text-center">Iniciar Sesión</h1>
        <LoginForm
          form={form}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        {error && (
          <span className="text-red-500 mt-2 block text-center">
            {error}
          </span>
        )}
      </div>
    </div>
  );
};

export default Login;
