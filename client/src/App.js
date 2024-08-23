import {Route, Routes,BrowserRouter} from "react-router-dom"

import './App.css';
import Home from "./components/Home";
import MobileNavigation from "./components/MobileNavigation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <MobileNavigation/>
    </BrowserRouter>
  );
}

export default App;
