import RouterRoot from "./components/organisms/RouterRoot";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/create-product") {
      localStorage.setItem("alreadyShown", "false");
    }
  }, [location]);
  return (
    <div className="App">
      <RouterRoot />
    </div>
  );
}

export default App;
