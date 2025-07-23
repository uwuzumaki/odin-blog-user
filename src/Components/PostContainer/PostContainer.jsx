import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Post from "../Posts/Post";

const PostContainer = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3000/post";
    const fetchData = async () => {
      try {
        const data = await axios.get(`${url}`);
        setPosts(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Post</h1>
      <div className="container flex">
        {posts.map((post) => (
          <Link to={`/post/${post.id}`} key={post.id}>
            <Post post={post} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default PostContainer;
