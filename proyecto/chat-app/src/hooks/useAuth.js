import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../main";
import { useEffect, useState } from "react";

export const useAuth = () => {
   const [user, setUser] = useState(null);
   const [loadingSession, setLoadingSession] = useState(true);
   const [loadingSignIn, setLoadingSignIn] = useState(false);

   useEffect(() => {
      // Suscribe a los cambios en la autenticación
      const unsubscribe = onAuthStateChanged(auth, (user) => {
         setUser(user);
         setLoadingSession(false);
      });

      // Limpia la suscripción cuando el componente se desmonta
      return () => unsubscribe();
   }, []);

   const login = async (email, password) => {
      try {
         // Inicia sesión con correo electrónico y contraseña
         const res = await signInWithEmailAndPassword(
            auth,
            email,
            password
         );

         // Devuelve la información del usuario
         return {
            email: res.user.email,
            // Puedes agregar más información del usuario según tus necesidades
         };
      } catch (error) {
         if (error.code === 'auth/invalid-credential') {
            // Maneja errores específicos, como credenciales inválidas
            throw new Error('Credenciales inválidas');
         } else {
            // Maneja otros errores desconocidos
            throw new Error('Error desconocido al iniciar sesión');
         }
      } finally {
         // Establece loadingSignIn en falso después de intentar iniciar sesión
         setLoadingSignIn(false);
      }
   }

   const logout = async () => {
      // Cierra sesión
      await signOut(auth);
   }

   return {
      login,
      logout,
      user,
      loadingSession,
      loadingSignIn
   }
}
