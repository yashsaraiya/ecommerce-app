import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Herder } from "./Component/Herder";
import { Home } from "./Component/Home";
import { Cart } from "./Component/Cart";

function App() {
  return (
    <BrowserRouter>
      <Herder />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
