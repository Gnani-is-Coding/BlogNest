import {Route, Routes,BrowserRouter} from "react-router-dom"

import './App.css';
import Home from "./components/Home";
import MobileNavigation from "./components/MobileNavigation";
import Sidebar from "./components/SideBar";
import Navbar from "./components/Navbar";
import BlogsProvider  from "./BlogsContext";
import BlogDetails from "./components/BlogDetails";

function App() {
  return (
    <BlogsProvider>
    <BrowserRouter>
    <Navbar/>
    <div className="app-container">
    <Sidebar/>
    <main className="main-container">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog-details/:id" element={<BlogDetails/>} />
      </Routes>
    </main>
    </div>
      <MobileNavigation/>
    </BrowserRouter>
    
    </BlogsProvider>
  );
}

export default App;
