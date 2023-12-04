import React from "react";

const LoginForm = ({ form, handleChange, handleSubmit }) => {
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label htmlFor="email" className="text-md font-semibold mb-1">
          Correo Electrónico
        </label>
        <input
          className="border rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className="text-md font-semibold mb-1">
          Contraseña
        </label>
        <input
          className="border rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
        />
      </div>
      <div className="items-center justify-center text-center">
        <button className="bg-blue-700 bg-opacity-70 text-white rounded-md text-xl py-2 px-6 hover:bg-blue-800 transition">
          Iniciar Sesión
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
