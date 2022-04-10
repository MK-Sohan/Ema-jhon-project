import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Shope from "./Components/Shope/Shope";
import Inventory from "./Components/Inventory/Inventory";
import Orders from "./Components/Orders/Orders";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shope></Shope>}></Route>
        <Route path="/home" element={<Shope></Shope>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route path="/order" element={<Orders></Orders>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
