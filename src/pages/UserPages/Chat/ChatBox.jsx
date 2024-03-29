import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Input } from "@material-tailwind/react";
import img from "../../../assets/UserAssets/depositphotos_167655496-stock-photo-directly-above-view-of-human.jpg";
import React, { useEffect, useRef, useState } from "react";
import {
  AdminsChat,
  GetMessagesApi,
  SendMessageApi,
} from "../../../Api/UserApi";
import { useLocation } from "react-router-dom";
import { io } from "socket.io-client";
import { format } from "timeago.js";

const ChatBox = () => {
  const location = useLocation();
  const AdminId = location.state?.AdminId; // Use optional chaining for safer access
  const [messageData, setMessageData] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [AdminData, setAdminData] = useState({});
  const [newMessage, setNewMessage] = useState("");
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [istyping, setIsTyping] = useState(false);
  const [sendMessage, setSendMessage] = useState(null);
  
  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };
  
  const socket = useRef();





  useEffect(() => {
    socket.current = io("http://localhost:4000",{
      withCredentials: true,
    });
    if(selectedUser)socket.current.emit("new-user-add", selectedUser._id)
    socket.current.on('get-users', (users) => {
      setOnlineUsers(users);
    })
    // socket.current.on("typing", () => setIsTyping(true));
    // socket.current.on("stop typing", () => setIsTyping(false));
    // socket.current.on('connect_error', (error) => {
    //   console.error('Socket connection error:', error);
    // });
  }, [selectedUser]);

  ///////////// Fetch Messages ///////////////
  useEffect(() => {
    const fetchData = async () => {
      const response = await GetMessagesApi(selectedUser._id);
      setMessageData(response.data);
      console.log('8888888888',response);
    };
    fetchData();
  }, [selectedUser]);


  // useEffect(() => {
  //   const data = messages.find((item) => setChatId(item.user._id));
  // }, [messages]);


  const handleSendMessage = async () => {
    try {
      if (newMessage.trim() !== "") {
        setMessages([...messages, { user: selectedUser, text: newMessage }]);
        setNewMessage("");
      } 
      const SendMessage = await SendMessageApi(
        { newMessage },
        selectedUser._id
      ).then(res =>setSendMessage(res.data));
      const msg = [...messageData, SendMessage.data];
      setMessageData(msg)
      
    } catch (error) {}
  };
  
  useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit("send-message", sendMessage);
    }
  }, [sendMessage]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AdminsChat(AdminId);
        setAdminData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // const handlerecievedMess = async (data) => {
    //   const msg = [...messageData,data];
    //   setMessageData(msg);
    // };
    // socket.current.on("receive-message",handlerecievedMess);

    const fetchData = async () => {
      const response = await GetMessagesApi(selectedUser._id);
      setMessageData(response.data);
      console.log('8888888888',response);
    };
    fetchData();
  },[messageData]); 



  return (
    <>
      <div className="flex mt-16 bg-gray-100">
        {/* User Listing Sidebar */}
        <div className="w-1/6 bg-gray-200 p-4">
          <h1 className="text-2xl font-bold  mb-4">Users</h1>
          <Input
            label="Search"
            icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            variant="outlined"
          />
          <ul>
            {Array.isArray(AdminData) &&
              AdminData.map((user) => (
                <li
                  key={user.id}
                  className={`flex items-center cursor-pointer ${
                    selectedUser && selectedUser.id === user.id
                      ? "text-blue-500 font-bold"
                      : ""
                  } p-2 rounded hover:bg-gray-300 transition-all duration-300`}
                  onClick={() => handleUserSelect(user)}
                >
                  <img
                    src={img}
                    alt={user.name}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span>{user?.members[0].name}</span>
                </li>
              ))}
          </ul>
        </div>

        {/* Chat Display */}
        <div className="flex-1 p-4">
          {selectedUser && (
            <div className="flex border border-gray-400">
              <img
                className="w-12 h-12 mt-2 ml-2 rounded-full"
                src={selectedUser.profileimage}
                alt=""
              />
              <h1 className="mt-4 mx-2 text-2xl font-bold mb-4">
                {selectedUser?.members[0].name}
              </h1>
            </div>
          )}
          <div className="mt-2 border p-4 mb-4 h-[44rem] overflow-y-auto bg-white rounded shadow">
            {messageData &&
              messageData.map((message, index) => (
                <div
                  key={index}
                  className={`mb-2  ${
                    message.senderId !== selectedUser.members[0]._id ? "text-end" : "text-start"
                  }`}
                >
                  {message.text}<br/>
                  {format(message.createdAt)}
                </div>
              ))}
          </div>

          {/* Message Input */}
          <div className="flex items-center">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border p-3 mr-2 rounded"
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-all duration-300"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBox;