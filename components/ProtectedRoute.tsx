import useAuth from "hooks/useAuth";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { TChildren } from "types";

const ProtectedRoute = ({ children }: { children: TChildren }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  if (loading) return <p>Loading...</p>;

  if (!user && router.pathname !== "/auth") router.push("/auth");
  if (user && router.pathname === "/auth") router.push("/");

  return <Fragment>{children}</Fragment>;
};

export default ProtectedRoute;
