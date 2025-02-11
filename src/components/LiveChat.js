import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomMessage, generateRandomName } from '../utils/nameGenrator';


const LiveChat = () => {
const dispatch = useDispatch();
const chatMessages = useSelector((store) => store.chat.messages);
const [liveMessage, setLiveMessage] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
         //API Calling
         console.log("API CALLING");
         dispatch(addMessage({name : generateRandomName(),
                              message : generateRandomMessage(20),
         })
         );
        },1500);

        return () => clearInterval(interval)
    }, []);
  return (
    <>
    <div className="w-full h-[520px] border border-gray-300 p-4 bg-white rounded-2xl overflow-y-auto flex flex-col-reverse shadow-sm">
    <div>
    {chatMessages.map((message, index) => (
       <div key={index} className="p-2 hover:bg-gray-50 rounded-lg">
       <ChatMessage name={message.name} message={message.message} />
     </div>
      ))} 
</div>
    </div>

    <form className="w-full flex gap-2 p-2 bg-white shadow-sm" 
          onSubmit={(e) => {e.preventDefault();
          dispatch(addMessage({
            name: "Shalini Jaiswal",
            message : liveMessage,
          }))
    }}>
       <input 
       className="flex-1 rounded-lg p-2 border border-gray-300"
       type= "text"
       placeholder="Chat...."
       value = {liveMessage}
       onChange={(e) => setLiveMessage(e.target.value)
       }
       />

       <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
        send
        </button>
    </form>
    </>
  );
};

export default LiveChat;
  