import { Navigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

const Auth = ({ children }) => {
  const { user, loadingSession } = useLogin();

  if (loadingSession) return <p>Cargando...</p>;

  if (!loadingSession && !user) {
    <Navigate to="/login" replace={true }></Navigate>;
  }

  return children;
};

export default Auth;
