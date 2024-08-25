import {Route, Routes,BrowserRouter} from "react-router-dom"

import './App.css';
import Home from "./components/Home";
import MobileNavigation from "./components/MobileNavigation";
import Sidebar from "./components/SideBar";
import Navbar from "./components/Navbar";
import BlogsProvider  from "./BlogsContext";
import BlogDetails from "./components/BlogDetails";
import CreateBlog from "./components/CreateBlog";
import SearchContainer from "./components/SearchBlogs";

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
        <Route path="/blogs/create" element={<CreateBlog/>} />
        <Route path="/search" element={<SearchContainer/>} />
      </Routes>
    </main>
    </div>
      <MobileNavigation/>
    </BrowserRouter>
    
    </BlogsProvider>
  );
}

export default App;
