import { createContext, useEffect, useState } from "react";
import { auth } from "firebase-config";
import { IAuthContext } from "interfaces";
import { TChildren, TUser } from "types";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: { children: TChildren }) => {
  const [user, setUser] = useState<TUser>(null);
  const [loading, setLoading] = useState(true);

  // Login with google
  const logInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  // Log in with github
  const logInWithGithub = () => {
    const githubProvider = new GithubAuthProvider();
    return signInWithPopup(auth, githubProvider);
  };

  // Logout
  const logOut = () => signOut(auth);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, loading, logInWithGoogle, logInWithGithub, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
