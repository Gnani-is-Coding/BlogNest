import { createContext, useContext, useState } from "react";


const BlogsContext = createContext({})

const blogData = [
    {
      id: "1",
      title: "API Design: 11 steps to go from junior developer to senior",
      description: "some description",
      username: "Gnani",
      imageUrl:
        "https://substackcdn.com/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F507dbf27-df25-4d96-b09a-0a89e4b27ea4_1280x1562.gif",
      upVoteCount: 0,
      downVoteCount: 0,
      commentsCount: 10,
      date: new Date(),
    },
    {
      id: "2",
      title: "API Design: 11 steps to go from junior developer to senior",
      username: "Gnani",
      imageUrl:
        "https://substackcdn.com/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F507dbf27-df25-4d96-b09a-0a89e4b27ea4_1280x1562.gif",
      upVoteCount: 0,
      downVoteCount: 0,
      commentsCount: 10,
      date: new Date(),
    },
    {
      id: "3",
      title: "API Design: 11 steps to go from junior developer to senior",
      username: "Gnani",
      imageUrl:
        "https://substackcdn.com/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F507dbf27-df25-4d96-b09a-0a89e4b27ea4_1280x1562.gif",
      upVoteCount: 0,
      downVoteCount: 0,
      commentsCount: 10,
      date: new Date(),
    },
    {
      id: "4",
      title: "API Design: 11 steps to go from junior developer to senior",
      username: "Gnani",
      imageUrl:
        "https://substackcdn.com/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F507dbf27-df25-4d96-b09a-0a89e4b27ea4_1280x1562.gif",
      upVoteCount: 0,
      downVoteCount: 0,
      commentsCount: 10,
      date: new Date(),
    },
    {
      id: "5",
      title: "API Design: 11 steps to go from junior developer to senior",
      username: "Gnani",
      imageUrl:
        "https://substackcdn.com/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F507dbf27-df25-4d96-b09a-0a89e4b27ea4_1280x1562.gif",
      upVoteCount: 0,
      downVoteCount: 0,
      commentsCount: 10,
      date: new Date(),
    },
  ];

const BlogsProvider = ({children}) => {
    const [theme, setTheme] = useState("light")
  const [blogsData, setBlogsData] = useState(blogData);
  const [isLoading, setLoading] = useState(true)

    return (
        <BlogsContext.Provider value={{theme, setTheme, blogsData,setBlogsData,isLoading,setLoading}}>
            {children}
        </BlogsContext.Provider>
    )
}

export const useBlogs = () => {
    return useContext(BlogsContext)
}

export default BlogsProvider