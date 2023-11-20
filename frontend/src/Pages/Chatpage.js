import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Chatpage = () => {
    const [chats, setstate] = useState([])
    const fetchChats = async() => {
    const {data} = await axios.get('/api/chat');
    setstate(data);
    };
    useEffect(() => {
        fetchChats();
    },[]);
  
    return <div> {chats.map((chat) => (<div key={chat._id}>{chat.chatName}</div>))} </div>;
  
}

export default Chatpage
