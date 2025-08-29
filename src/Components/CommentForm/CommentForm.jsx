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
    const url = `${import.meta.env.env.VITE_URL}/${post_id}`;
    try {
      await axios.post(url, data);
    } catch (err) {
      console.log(err);
    }
    onUpdate();
    reset();
  };

  return (
    <form
      className="mx-auto flex max-w-[70%] flex-col items-start border-r border-b border-l border-gray-300 bg-white px-12 pt-14 pb-8 md:max-w-[50%]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label>Name</label>
      <input
        className="pt-2 pb-4 focus:outline-none"
        placeholder="Anonymous"
        {...register("user")}
      />
      <label>Comment</label>
      <textarea
        autoComplete="off"
        className="w-[90%] resize-none border border-gray-300"
        rows="5"
        cols="50"
        {...register("content", {
          required: "Please include a comment.",
          minLength: {
            value: 10,
            message: "Message must be at least 10 characters long.",
          },
        })}
      />
      {errors.content && (
        <span className="text-red-500">{errors.content.message}</span>
      )}
      <input
        type="submit"
        value="Submit"
        className="my-4 cursor-pointer rounded-xs border bg-[#f4f4f4] p-1"
      />
    </form>
  );
};

export default CommentForm;
