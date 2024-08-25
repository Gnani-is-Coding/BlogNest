import { createContext, useContext, useEffect, useState } from "react";
import Cookies from 'js-cookie'
import { useParams } from "react-router-dom";


const BlogsContext = createContext({})

// const blogData = [
//     {
//       id: "1",
//       title: "API Design: 11 steps to go from junior developer to senior",
//       description: "some description",
//       username: "Gnani",
//       imageUrl:
//         "https://substackcdn.com/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F507dbf27-df25-4d96-b09a-0a89e4b27ea4_1280x1562.gif",
//       upVoteCount: 0,
//       downVoteCount: 0,
//       commentsCount: 10,
//       date: new Date(),
//     },
//     {
//       id: "2",
//       title: "API Design: 11 steps to go from junior developer to senior",
//       username: "Gnani",
//       imageUrl:
//         "https://substackcdn.com/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F507dbf27-df25-4d96-b09a-0a89e4b27ea4_1280x1562.gif",
//       upVoteCount: 0,
//       downVoteCount: 0,
//       commentsCount: 10,
//       date: new Date(),
//     },
//     {
//       id: "3",
//       title: "API Design: 11 steps to go from junior developer to senior",
//       username: "Gnani",
//       imageUrl:
//         "https://substackcdn.com/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F507dbf27-df25-4d96-b09a-0a89e4b27ea4_1280x1562.gif",
//       upVoteCount: 0,
//       downVoteCount: 0,
//       commentsCount: 10,
//       date: new Date(),
//     },
//     {
//       id: "4",
//       title: "API Design: 11 steps to go from junior developer to senior",
//       username: "Gnani",
//       imageUrl:
//         "https://substackcdn.com/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F507dbf27-df25-4d96-b09a-0a89e4b27ea4_1280x1562.gif",
//       upVoteCount: 0,
//       downVoteCount: 0,
//       commentsCount: 10,
//       date: new Date(),
//     },
//     {
//       id: "5",
//       title: "API Design: 11 steps to go from junior developer to senior",
//       username: "Gnani",
//       imageUrl:
//         "https://substackcdn.com/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F507dbf27-df25-4d96-b09a-0a89e4b27ea4_1280x1562.gif",
//       upVoteCount: 0,
//       downVoteCount: 0,
//       commentsCount: 10,
//       date: new Date(),
//     },
//   ];

const BlogsProvider = ({children}) => {
  const [theme, setTheme] = useState("light")
  const [blogsData, setBlogsData] = useState([]);
  const [isLoading, setLoading] = useState(true)
  const path = useParams()

  const getBlogsData = async () => {
    setLoading(true)
    const endpoint = "http://localhost:5000/api/blogs"

    // const token = Cookies.get
    const options = {
      methods: "GET",
      header: {
        'Content-Type': "application/json"
      }
    }

    const response = await fetch(endpoint, options)
    const data = await response.json()

    if (response.ok) {
      setLoading(false)
      setBlogsData(data.blogs)
    } 
  }

  const upDateBlog = async (id) => {
    
    const blogObj = blogsData.find((obj) => obj._id === id);
    if (!blogObj) return; 
  
    const endpoint = `http://localhost:5000/api/blogs/${id}`;
  
    const token = Cookies.get("jwtToken");
  
    const options = {
      method: "PUT",
      headers: {
        'Content-Type': "application/json",
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(blogObj),
    };
  
    try {
      const response = await fetch(endpoint, options);
  
      // Check if the response is ok (status is 2xx)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data, "updated blog");
    } catch (error) {
      console.error("Error updating blog:", error.message);
    }
  };
  
  
  useEffect(() => {
    getBlogsData()
  }, [])

    return (
        <BlogsContext.Provider value={{theme, setTheme, blogsData,setBlogsData,isLoading,setLoading,upDateBlog,getBlogsData}}>
            {children}
        </BlogsContext.Provider>
    )
}

export const useBlogs = () => {
    return useContext(BlogsContext)
}

export default BlogsProvider