import Conversation from "../components/conversation/Conversation";
import Message from "../components/message/Message";
import "./messenger.scss";
import { useEffect, useState } from "react";
import axios from "axios";
const Messenger = () => {
  let [messageList, setMessageList] = useState([]);
  let [frdsList, setfrdsList] = useState([]);

  // useEffect(() => {
  //   //console.log("i am called");
  //   getallmsg();
  // });
  window.onload = function () {
    getallmsg();
    getallfrds();
  };
  let getallfrds = async () => {
    let url = `http://localhost:8800/frds`;
    let response = await axios.get(url);

    frdsList = [...response.data];
    console.log(frdsList);
    //re-render
    setfrdsList(frdsList);
  };
  let getallmsg = async () => {
    let url = `http://localhost:8800/messages`;
    let response = await axios.get(url);

    messageList = [...response.data];
    //console.log(messageList);
    //re-render
    setMessageList(messageList);
  };
  //console.log(messageList);
  let own = true;

  const getId = (obj) => {
    console.log(obj);
  };

  return (
    <>
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input className="chatMenuInput" placeholder="Your Friends" />
            <div className="conversation">
              <div className="conversationName">
                <div>
                  {frdsList.map((item, index) => (
                    <div key={index} className="container">
                      <img
                        className="conversationImg"
                        src={item && item.profilePic}
                        alt=""
                      />
                      <button className="click" onClick={() => getId(item)}>
                        {item.name}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            <div className="chatBoxTop">
              <div className={own ? "message own" : "message"}>
                <div className="messageTop">
                  <img className="messageImg" src="" alt="" />
                  <p className="messageText">
                    these is msg from demo user Paragraphs are the building
                    blocks
                  </p>
                  <p className="messageText">
                    these is msg from demo user Paragraphs are the building
                    blocks
                  </p>
                  <p className="messageText">
                    these is msg from demo user Paragraphs are the building
                    blocks
                  </p>
                  <p className="messageText">
                    these is msg from demo user Paragraphs are the building
                    blocks
                  </p>
                </div>
                <div className="messageBottom">1hr ago</div>
              </div>
            </div>
            <div className="chatBoxBottom">
              <textarea
                className="chatMessageInput"
                placeholder="type msg to send...."
              ></textarea>
              <button className="chatSubmitButton">send</button>
            </div>
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper"></div>
        </div>
      </div>
    </>
  );
};

export default Messenger;
