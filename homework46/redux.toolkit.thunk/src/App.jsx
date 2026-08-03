import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "./redux/userSlice";
import Layout from "./components/Layout";
import MainContent from "./components/MainContent";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser(1));
  }, [dispatch]);

  return (
      <Layout>
        <MainContent />
      </Layout>
  );
}

export default App;