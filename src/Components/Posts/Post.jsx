import img from "../../assets/heroImage.jpg";

const Post = (data) => {
  const post = data.post;
  return (
    <div className="mx-4 my-2 flex h-64 w-full flex-col rounded-2xl border border-solid border-slate-300 p-4 shadow duration-100 ease-linear hover:shadow-xl">
      <div className="overflow-hidden text-ellipsis whitespace-nowrap">
        {post.title}
      </div>
      <div className="relative flex-1">
        <img
          src={img}
          // Centres the image inside the wrapper
          className="absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover md:max-w-[256px]"
        />
      </div>
    </div>
  );
};

export default Post;
