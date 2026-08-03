import { useDispatch, useSelector } from "react-redux";
import { selectTheme, toggleTheme } from "../redux/themeSlice";
import UserSection from "./UserSection";

function MainContent() {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  function handleThemeChange() {
    dispatch(toggleTheme());
  }

  return (
      <main>
        <h1>Redux Toolkit Example</h1>

        <p>Current theme: {theme}</p>

        <button type="button" onClick={handleThemeChange}>
          Change theme
        </button>

        <UserSection />
      </main>
  );
}

export default MainContent;