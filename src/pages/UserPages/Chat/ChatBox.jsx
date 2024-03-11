// src/App.js
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Input } from '@material-tailwind/react';
import img from '../../../assets/UserAssets/depositphotos_167655496-stock-photo-directly-above-view-of-human.jpg'
import React, { useEffect, useState } from 'react';
import { AdminsChat } from '../../../Api/UserApi';

const users = [
  { id: 1, name: 'User 1' },
  { id: 2, name: 'User 2' },
  // Add more users as needed
];

const ChatBox = () => {
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [messages, setMessages] = useState([]);
  const [AdminData, setAdminData] = useState({});
  console.log(AdminData,"Admin Data")
  const [newMessage, setNewMessage] = useState('');

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { user: selectedUser, text: newMessage }]);
      setNewMessage('');
    }
  };

  useEffect(()=>{
    const fetchData = async()=>{
        const response = await AdminsChat();
        setAdminData(response.data.AdminData)
        console.log(response,"response reached")
    }
    fetchData()
  },[])

  return (
    <>
    <div className="flex  mt-16 bg-gray-100">
      {/* User Listing Sidebar */}
      <div className="w-1/6 bg-gray-200 p-4">
  <h1 className="text-2xl font-bold  mb-4">Users</h1>
  <Input
    label="Search"
    icon={<MagnifyingGlassIcon className="h-5 w-5" />}
    variant="outlined"
  />
  <ul>
  {Array.isArray(AdminData) && AdminData.map((user) => (
  <li
    key={user.id}
    className={`flex items-center cursor-pointer ${
      selectedUser.id === user.id ? 'text-blue-500 font-bold' : ''
    } p-2 rounded hover:bg-gray-300 transition-all duration-300`}
    onClick={() => handleUserSelect(user)}
  >
    <img src={img} alt={user.name} className="w-8 h-8 rounded-full mr-2" />
    <span>{user.name}</span>
  </li>
))}

  </ul>
</div>


      {/* Chat Display */}
      <div className="flex-1 p-4">
        <div className='flex border border-gray-400'>
        <img className='w-12 h-12 mt-2 ml-2 rounded-full' src={img} alt="" />
        <h1 className="mt-4 mx-2 text-2xl font-bold mb-4">{selectedUser.name}</h1>
        </div>
        <div className=" mt-2 border p-4 mb-4 h-[44rem] overflow-y-auto bg-white rounded shadow">
          {messages.map((message, index) => (
            <div key={index} className="mb-2">
              <span className="font-bold">{message.user.name}:</span> {message.text}
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

export default ChatBox;