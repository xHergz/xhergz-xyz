import { User } from "@supabase/auth-helpers-nextjs";
import { createContext, useContext, useEffect, useState } from "react";

import { useSupabase } from "./SupabaseContext";

type AuthProviderProps = React.PropsWithChildren<{}>;

type AuthContextType = {
  loading: boolean;
  user: User | null;
};

export const AuthContext = createContext<AuthContextType>({
  loading: true,
  user: null,
});

export const useUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const supabase = useSupabase();

  useEffect(() => {
    setLoading(true);
    supabase.auth
      .getUser()
      .then((response) => {
        setUser(response.data.user);
      })
      .catch((error) => {
        console.error("Error getting the user data", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  supabase.auth.onAuthStateChange((event, session) => {
    if (event === "SIGNED_IN") {
      setUser(session?.user ?? null);
    }
    if (event === "SIGNED_OUT") {
      setUser(null);
    }
  });

  return { loading, user };
};

export const AuthProvider: React.FunctionComponent<AuthProviderProps> = ({
  children,
}: AuthProviderProps): JSX.Element => {
  const user = useUser();

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};
