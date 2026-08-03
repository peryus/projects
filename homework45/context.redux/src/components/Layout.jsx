import { useSelector } from "react-redux";
import { selectTheme } from "../redux/themeSlice";

function Layout({ children }) {
  const theme = useSelector(selectTheme);

  return <div className={`app ${theme}`}>{children}</div>;
}

export default Layout;