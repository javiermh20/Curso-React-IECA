import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Auth = ({ children }) => {
  const { user, loadingSession } = useAuth();

  if (loadingSession) return <p>Cargando...</p>;

  if (!loadingSession && !user) {
    <Navigate to="/" replace={true }></Navigate>;
  }

  return children;
};

export default Auth;
