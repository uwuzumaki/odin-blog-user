import axios from "axios";
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

  return (
    <div>
      <div>
        <Link to="/">Back</Link>
        {post.title}
        {post.content}
        Comments
        {comments.map((comment) => (
          <div key={comment.id}>{comment.content}</div>
        ))}
      </div>
      <CommentForm post_id={id} onUpdate={fetchComments} />
    </div>
  );
};

export default PostPage;
