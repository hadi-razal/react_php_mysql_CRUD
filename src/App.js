import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./global.css";
import Header from "./Components/Header";
import Home from "./Screens/Home";

function App() {
  return (
    <div>
      <BrowserRouter>

        <Header />

        <Routes>
          <Route path={"/"} element={<Home />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
