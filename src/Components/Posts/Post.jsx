const Post = (data) => {
  const post = data.post;
  return (
    <>
      <li>{post.title}</li>
      <li>{post.content}</li>
    </>
  );
};

export default Post;
