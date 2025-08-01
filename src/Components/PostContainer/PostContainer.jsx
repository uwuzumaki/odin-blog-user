import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Post from "../Posts/Post";
import Hero from "../Hero/Hero";

const PostContainer = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3000/post";
    const fetchData = async () => {
      try {
        const data = await axios.get(url);
        setPosts(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Hero />
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
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
