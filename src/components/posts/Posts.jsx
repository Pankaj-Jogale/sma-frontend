import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //temp dummy data
  const posts = [
    {
      id: 1,
      name: "User name",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/3228740/pexels-photo-3228740.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Paragraphs are the building blocks of papers.",
      img: "https://images.pexels.com/photos/3228736/pexels-photo-3228736.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      name: "User name",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/3228740/pexels-photo-3228740.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Paragraphs are the building blocks of papers.Paragraphs are the building blocks of papers.",
    },
    {
      id: 3,
      name: "User name",
      userId: 3,
      profilePic:
        "https://images.pexels.com/photos/3228740/pexels-photo-3228740.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Paragraphs are the building blocks of papers.",
      img: "https://images.pexels.com/photos/3228736/pexels-photo-3228736.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
