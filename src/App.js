import { Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import FavList from "./components/FavList";

function App() {
  return (
    <>
    
    <h1>Welcome to Movie Web app</h1>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="favList" element={<FavList/>} />
      </Routes>
    </>
  );
}

export default App;
