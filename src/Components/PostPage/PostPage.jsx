import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import CommentForm from "../CommentForm/CommentForm";

const PostPage = () => {
  const [post, setPost] = useState("");
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  const fetchPosts = async () => {
    const url = `http://localhost:3000/post/${id}`;
    try {
      const data = await axios.get(`${url}`);
      setPost(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchComments = async () => {
    const url = `http://localhost:3000/comment/${id}`;
    try {
      const data = await axios.get(url);
      setComments(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPosts();
    fetchComments();
    // eslint-disable-next-line
  }, []);

  const CommentRender = (commentsArray) => {
    if (commentsArray.comments.length) {
      console.log(commentsArray);
      return (
        <>
          {comments.map((comment) => (
            <div
              className="my-2 flex w-1/1 flex-col items-start border-b pb-2"
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

  return (
    <div className="bg-[#f4f4f4]">
      <div className="flex">
        <Link className="" to="/">
          &#8249;- Back
        </Link>
      </div>
      <div className="container mx-auto flex max-w-[70%] flex-col border border-gray-300 bg-white">
        <div className="flex flex-col items-start border-b border-b-gray-300 px-12 py-14">
          <h1 className="my-4 text-3xl">{post.title}</h1>
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
    </div>
  );
};

export default PostPage;
