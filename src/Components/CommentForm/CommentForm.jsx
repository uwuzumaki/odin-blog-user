import axios from "axios";
import { useForm } from "react-hook-form";

const CommentForm = ({ post_id, onUpdate }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const url = `http://localhost:3000/comment/${post_id}`;
    try {
      const res = await axios.post(url, data);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
    onUpdate();
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input defaultValue="Anonymous" {...register("name")} />
      <label>Comment</label>
      <input
        {...register("content", {
          required: "Please include a comment",
          minLength: {
            value: 10,
            message: "Message must be at least 10 characters long.",
          },
        })}
      />
      {errors.content && <span>{errors.content.message}</span>}
      <input type="submit" />
    </form>
  );
};

export default CommentForm;
