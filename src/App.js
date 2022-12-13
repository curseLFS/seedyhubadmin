import { RouterProvider } from "react-router-dom";
import { useContext } from "react";
import "./style/dark.scss";
import { DarkModeContext  } from "./context/darkModeContext";
import { router } from "./router/Router";

function App() {
  
  const {darkMode} = useContext(DarkModeContext)
  
  return (
    <div className={darkMode ? "app dark" : "dark"}>
      <RouterProvider index router={router} />
    </div>
  );
}

export default App;
 