import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import CommentForm from "../CommentForm/CommentForm";
import Footer from "../Footer/Footer";

const PostPage = () => {
  const [post, setPost] = useState("");
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(true);
  const { id } = useParams();

  const fetchPosts = async () => {
    const url = `http://localhost:3000/post/${id}`;
    try {
      setLoadingPosts(true);
      const data = await axios.get(`${url}`);
      setPost(data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingPosts(false);
    }
  };

  const fetchComments = async () => {
    const url = `http://localhost:3000/comment/${id}`;
    try {
      setLoadingComments(true);
      const data = await axios.get(url);
      setComments(data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingComments(false);
    }
  };

  useEffect(() => {
    fetchPosts();
    fetchComments();
    // eslint-disable-next-line
  }, []);

  const CommentRender = (commentsArray) => {
    if (commentsArray.comments.length) {
      return (
        <>
          {comments.map((comment) => (
            <div
              className="my-2 flex w-1/1 flex-col items-start border-b border-black/20 pb-2"
              key={comment.id}
            >
              <p className="text-[1.1rem]">{comment.name}</p>
              <p className="text-xs">
                {moment(comment.createAt).format("MMMM Do, YYYY")}
              </p>
              <p className="">{comment.content}</p>
            </div>
          ))}
        </>
      );
    } else {
      return (
        <>
          <p className="pb-14 opacity-75">
            No comments yet. Be the first to comment!
          </p>
        </>
      );
    }
  };
  if (loadingComments && loadingPosts) {
    return (
      <>
        {" "}
        <div className="relative h-full min-h-0 flex-1 bg-[#f4f4f4]">
          <span className="absolute top-[50%] animate-pulse">Loading...</span>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="h-full min-h-0 flex-1 bg-[#f4f4f4]">
          <div className="flex">
            <Link className="" to="/">
              &#8249;- Back
            </Link>
          </div>
          <div className="container mx-auto flex max-w-[70%] flex-col border border-gray-300 bg-white md:max-w-[50%]">
            <div className="flex flex-col items-start border-b border-b-gray-300 px-12 py-14">
              <h1 className="my-4 text-3xl font-bold">{post.title}</h1>
              <p>{moment(post.createAt).format("MMMM Do, YYYY")}</p>
            </div>
            <div className="flex border-b border-b-gray-300 px-12 py-14">
              <p className="">{post.content}</p>
            </div>
            <div className="flex px-12 py-14">
              <p className="text-xl">Comments</p>
            </div>
            <div className="flex flex-col items-start px-12">
              <CommentRender comments={comments} />
            </div>
          </div>
          <CommentForm post_id={id} onUpdate={fetchComments} />
          <Footer />
        </div>
      </>
    );
  }
};

export default PostPage;
