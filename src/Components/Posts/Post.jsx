const Post = (data) => {
  const post = data.post;
  return (
    <div className="m-2 border border-solid border-slate-300 p-4">
      <div>{post.title}</div>
    </div>
  );
};

export default Post;
