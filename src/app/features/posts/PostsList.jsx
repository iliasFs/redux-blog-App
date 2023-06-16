import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
const PostsList = () => {
  //const posts = useSelector((state) => state.posts);
  const posts = useSelector(selectAllPosts);
  /* -useSelector is used to access the state object in a Redux store
   -The function being passed to useSelector is a selector function
   -In this case it takes the entire STATE OBJECT as an argument and returns the posts property from the state
   -Whenever the posts property changes, the component will be re-rendered to reflect the updated value.*/
  const renderedPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
      </p>
    </article>
  ));
  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
