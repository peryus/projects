import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import UserSection from "./UserSection";

function MainContent() {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
      <main className={`app ${theme}`}>
        <h1>Context API Example</h1>

        <p>Current theme: {theme}</p>

        <button type="button" onClick={toggleTheme}>
          Change theme
        </button>

        <UserSection />
      </main>
  );
}

export default MainContent;