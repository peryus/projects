import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppContextProvider } from "./context/AppContext";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </StrictMode>,
);