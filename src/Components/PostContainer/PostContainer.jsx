import axios from "axios";
import { useEffect, useState } from "react";
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
      <ul>
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </ul>
    </>
  );
};

export default PostContainer;
