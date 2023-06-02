import "../styles/globals.css";
import type { AppProps } from "next/app";

import { SupabaseProvider } from "../src/contexts/SupabaseContext";
import { AuthProvider } from "../src/contexts/AuthContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SupabaseProvider>
      <AuthProvider>
        <Component {...pageProps} />;
      </AuthProvider>
    </SupabaseProvider>
  );
}

export default MyApp;
