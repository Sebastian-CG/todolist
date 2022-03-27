import type { AppProps } from "next/app";
import DefaultLayout from "components/layouts/DefaultLayout";
import ProtectedRoute from "components/ProtectedRoute";
import AuthProvider from "context/AuthContext";
import "../scss/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ProtectedRoute>
        <Component {...pageProps} />
      </ProtectedRoute>
    </AuthProvider>
  );
}

export default MyApp;
