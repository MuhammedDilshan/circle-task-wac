import { useEffect } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import MobileMenu from "./Components/MobileMenu/MobileMenu";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      //   disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
