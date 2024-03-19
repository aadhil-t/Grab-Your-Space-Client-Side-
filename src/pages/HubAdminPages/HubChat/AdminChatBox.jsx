import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Input } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { GetAdminMessageApi, SendAdminMessage, UserChat } from '../../../Api/HubAdminApi';
import { useSelector } from 'react-redux';

const AdminChatBox = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  console.log(selectedUser,"selected user")
  const [messages, setMessages] = useState([]);
  console.log(messages,"Admin Message ")
  const [UserData, setUserData] = useState({});
    console.log(UserData,"User chat data")
  const [newMessage, setNewMessage] = useState('');

  const AdminId = useSelector(state=>state.hubadmin.id);
  console.log(AdminId,"reduxxxxxxxxxxx")

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  ///////////// Fetch Messages ///////////////
    useEffect(()=>{
      const fetchData = async()=>{
        const response = await GetAdminMessageApi(selectedUser._id);
        setMessages(response.data)
        console.log(response)
      }

      fetchData()
    },[selectedUser])


  const handleSendMessage = async() => {
    try {
      if (newMessage.trim() !== '') {
        setMessages([...messages, { user: selectedUser, text: newMessage }]);
        setNewMessage('');
      }
      const SendMessage = await SendAdminMessage({newMessage},selectedUser._id);
      console.log(SendMessage,"111111111111")
    } catch (error) {
      
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await UserChat(AdminId);
            setUserData(response.data.chat)
        console.log(response, "response reached");
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="flex bg-gray-100">
        {/* User Listing Sidebar */}
        <div className="w-1/6 bg-gray-200 p-4">
          <h1 className="text-2xl font-bold mb-4">Users</h1>
          <Input
            label="Search"
            icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            variant="outlined"
          />
          <ul>
            {Array.isArray(UserData) &&
              UserData.map((user) => (
              <li
                key={user.id}
                className={`flex items-center cursor-pointer ${
                  selectedUser && selectedUser.id === user.id ? 'text-blue-500 font-bold' : ''
                } p-2 rounded hover:bg-gray-300 transition-all duration-300`}
                onClick={() => handleUserSelect(user)}
              >
                <img src={user.members[0].profileimage} alt={user.members[0].name} className="w-8 h-8 rounded-full mr-2" />
                <span>{user.members[0].name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Chat Display */}
        <div className="flex-1 p-4">
          {selectedUser && (
            <div className='flex border border-gray-400'>
              <img className='w-12 h-12 mt-2 ml-2 rounded-full' src={selectedUser.members[0].profileimage} alt="" />
              <h1 className="mt-4 mx-2 text-2xl font-bold mb-4">{selectedUser.members[0].name}</h1>
            </div>
          )}
          <div className=" mt-2 border p-4 mb-4 h-[44rem] overflow-y-auto bg-white rounded shadow">
            {messages && messages.map((message, index) => (
              <div key={index} className="mb-2">
                 {message.text}
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

export default AdminChatBox;
