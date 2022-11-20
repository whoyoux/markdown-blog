import { use } from "react";
import "../styles/globals.css";
import { getBlogs } from "../utils/blogs";

const getInitialBlogs = async () => {
  const blogs = await getBlogs();
  return blogs;
};

export default function Page() {
  const blogs = use(getInitialBlogs());
  return (
    <div>
      {blogs.map((post, index) => {
        return <div key={index}>{post}</div>;
      })}
    </div>
  );
}
