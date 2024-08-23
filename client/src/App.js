import {Route, Routes,BrowserRouter} from "react-router-dom"

import './App.css';
import Home from "./components/Home";
import MobileNavigation from "./components/MobileNavigation";
import Sidebar from "./components/SideBar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <div className="app-container">
    <Sidebar/>
    <main className="main-container">
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      </main>
    </div>
      <MobileNavigation/>
    </BrowserRouter>
  );
}

export default App;
