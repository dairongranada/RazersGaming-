import { createContext, useContext, useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,

} from "firebase/auth";

import { auth } from "../firebase";

export const authContext = createContext();


// Funcion para obtener la info Del Usuario ( user )
export function useAuth() {
    const context = useContext(authContext)
    return context
}




export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

   
    const login = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    // const loginWithGoogle = () => {
    //   const googleProvider = new GoogleAuthProvider();
    //   return signInWithPopup(auth, googleProvider);
    // };
  
    const logout = () => signOut(auth);
  
    useEffect(() => {
        const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
          console.log({ currentUser });
          setUser(currentUser);
          setLoading(false);
        });
        return () => unsubuscribe();
      }, []);


    return (
        <authContext.Provider value={{ login,user, logout,loading }}>
            {children}
        </authContext.Provider>
      );
  
}