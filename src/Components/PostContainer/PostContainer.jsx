import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Post from "../Posts/Post";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";

const PostContainer = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = "http://localhost:3000/post";
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await axios.get(url);
        setPosts(data.data.posts);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const LoadingDiv = () => {
    if (loading) {
      return (
        <>
          <span className="col-span-3 flex animate-pulse justify-center py-36 text-black/80">
            Loading! Please wait...
          </span>
        </>
      );
    }
  };

  return (
    <>
      <Hero />
      {/* pr-[calc(100vw-98%)] is to ensure the scrollbar doesn't cover the content on small screen sizes */}
      <div className="container mx-auto grid grid-cols-1 gap-4 pt-24 pr-[calc(100vw-98%)] md:grid-cols-2 lg:grid-cols-3">
        <LoadingDiv />
        {posts.map((post) => (
          <Link
            className="w-full self-center justify-self-center md:max-w-[320px]"
            to={`/post/${post.id}`}
            key={post.id}
          >
            <Post post={post} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default PostContainer;
