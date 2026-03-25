import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Order from "./pages/Order";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
// import Specials from "./pages/Specials";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/specials" element={<Specials />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
