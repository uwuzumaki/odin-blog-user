import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const PostPage = () => {
  const [post, setPost] = useState("");
  const [comments, setComments] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const url = `http://localhost:3000/post/${id}`;
    const fetchData = async () => {
      try {
        const data = await axios.get(`${url}`);
        setPost(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const url = `http://localhost:3000/comment/${id}`;
    const fetchData = async () => {
      try {
        const data = await axios.get(`${url}`);
        setComments(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    console.log(comments);
  }, [comments]);

  return (
    <div>
      <div>
        <Link to="/">Back</Link>
        {post.title}
        {post.content}
        Comments
        {comments.map((comment) => (
          <div>{comment.content}</div>
        ))}
      </div>
    </div>
  );
};

export default PostPage;
