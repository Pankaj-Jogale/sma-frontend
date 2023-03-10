import "./message.scss";

const Message = ({ own }) => {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://picsum.photos/200/301"
          alt=""
        />
        <p className="messageText">
          these is msg from demo user Paragraphs are the building blocks of
        </p>
      </div>
      <div className="messageBottom">1hr ago</div>
    </div>
  );
};

export default Message;
