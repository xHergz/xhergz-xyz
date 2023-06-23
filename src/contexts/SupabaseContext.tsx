import { createContext, useContext } from "react";

import {
  SupabaseClient,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";

type SupabaseProviderProps = {
  children: React.ReactNode;
};

const SupabaseContext = createContext<SupabaseClient | undefined>(undefined);

export const SupabaseProvider = ({ children }: SupabaseProviderProps) => {
  const supabase = createClientComponentClient();

  return (
    <SupabaseContext.Provider value={supabase}>
      {children}
    </SupabaseContext.Provider>
  );
};

export const useSupabase = () => {
  const context = useContext(SupabaseContext);
  if (context === undefined) {
    throw new Error("useSupabase must be used within a SupabaseProvider");
  }
  return context;
};
