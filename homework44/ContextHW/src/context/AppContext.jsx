import { createContext, useEffect, useState } from "react";
import { getUserFromServer } from "../api/getUserFromServer";

export const AppContext = createContext({
  user: null,
  loading: false,
  error: "",
  theme: "light",
  toggleTheme: () => {},
});

export function AppContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    async function loadUser() {
      try {
        setLoading(true);
        setError("");

        const userFromServer = await getUserFromServer(1);

        setUser(userFromServer);
      } catch (error) {
        console.error(error);
        setError("Failed to load user");
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, []);

  function toggleTheme() {
    setTheme((currentTheme) =>
        currentTheme === "light" ? "dark" : "light",
    );
  }

  const contextValue = {
    user,
    loading,
    error,
    theme,
    toggleTheme,
  };

  return (
      <AppContext.Provider value={contextValue}>
        {children}
      </AppContext.Provider>
  );
}