import App from "./App";
import PostPage from "./Components/PostPage/PostPage";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "post/:id",
    element: <PostPage />,
  },
];

export default routes;
