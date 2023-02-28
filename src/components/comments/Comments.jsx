import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";
const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  //temp
  const comments = [
    {
      id: 1,
      name: "User name",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/3228741/pexels-photo-3228741.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Paragraphs are the building blocks of papers.",
    },
    {
      id: 2,
      name: "User name",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/3228742/pexels-photo-3228742.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Paragraphs are the building blocks of papers.",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="Write a Comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
