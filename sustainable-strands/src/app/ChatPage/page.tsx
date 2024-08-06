"use client"
import { useState, useEffect } from 'react';
import socket from '../../../lib/socket';
import MessageCard from '../components/ui/messageCard';
import {  Listbox,  ListboxItem,} from "@nextui-org/listbox";
import {users} from "./data";
import React from 'react';
import { Avatar } from '@nextui-org/avatar';
interface Message {
  username: string;
  message: string;
  time:string;
  active:boolean;
}

const Home = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [username, setUsername] = useState('');
  const [isUsernameSet, setIsUsernameSet] = useState(false);
  
  useEffect(() => {
    socket.on('receiveMessage', (message:any) => {
      try {
        const now = new Date();
        const parsedMessage = JSON.parse(message);
        parsedMessage.time = now.toTimeString().split(' ')[0].slice(0, 5);
        parsedMessage.active = true;
        setMessages((prevMessages) => [...prevMessages, parsedMessage]);
        console.log(parsedMessage.username);
        console.log(parsedMessage.message);
      } catch (error) {
        console.error('Error parsing JSON string:', error);
      }
    });

    socket.on('clientDisconnected', (message:any) => {
      const parsedMessage = JSON.parse(message);
      const disconnectedUsername = parsedMessage.username;
      setMessages((prevMessages) => {
        return prevMessages.map((msg) => {
          if (msg.username === disconnectedUsername) {
            return { ...msg, active: false };
          }
          return msg;
        });
      });
    });

    return () => {
      socket.off('receiveMessage');
      socket.off('clientDisconnected');
    };
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit('sendMessage', message);
      setMessage('');
    }
  };

  const handleSetUsername = () => {
    if (username.trim()) {
      socket.emit('setUsername', username);
      setIsUsernameSet(true);
    }
  };

  return (
    <div className='overflow-hidden'>
      {!isUsernameSet ? (
        <div >
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            className="flex-1 p-2 border border-gray-300 rounded mr-2"
          />
          <button onClick={handleSetUsername} className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Set Username</button>
        </div>
      ) : (
        <div className='flex flex-row bg-gray-50'>
          <UserList/>
          <div className="flex flex-col justify-between h-screen w-full p-4 border-l-2 border-black ">

            <div>
              {messages.map((msg: Message, index) => (
                <MessageCard 
                  indexVal={index}
                  photo=""
                  username={msg.username} 
                  isUser={msg.username == username}
                  message={msg.message} 
                  time={msg.time}
                  active={msg.active}              
                />
              ))}
            </div>
            <div className='flex justify-center mx-10'>
              <div className="flex items-center w-full">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message"
                  className="flex-1 p-2 border border-gray-300 rounded mr-2"
                />
                <button onClick={sendMessage} className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Send</button>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Home;


const ListboxWrapper = ({children}: any) => (
  <div className="w-1/6 m-5 mr-0 h-[calc(100vh-2.5rem)] overflow-y-scroll scroll-hidden">
    {children}
  </div>
);

const UserList = () => (
  <ListboxWrapper>
    <Listbox
      classNames={{

        list: "h-[calc(100vh-2.5rem)]",
      }}
      items={users}
      selectionMode="single"
      variant="flat"
    >
      {(item) => (
        <ListboxItem key={item.id} textValue={item.name} hideSelectedIcon={true}>
          <div className="flex gap-2 items-center">
            <Avatar alt={item.name} className="flex-shrink-0" size="sm" src={item.avatar} />
            <div className="flex flex-col">
              <span className="text-small">{item.name}</span>
              <span className="text-tiny text-default-400">{item.email}</span>
            </div>
          </div>
        </ListboxItem>
      )}
    </Listbox>
  </ListboxWrapper>
);