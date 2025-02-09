import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName } from '../utils/nameGenrator';


const LiveChat = () => {
const dispatch = useDispatch();
const chatMessages = useSelector((store) => store.chat.messages);

    useEffect(() => {
        const i = setInterval(() => {
         //API Calling
         console.log("API CALLING");
         dispatch(addMessage({name : generateRandomName(),
                              message : "Hellow",
         })
         );
        },2000);

        return () => clearInterval(i)
    }, []);
  return (
    <>
    <div className='w-full h-[520px] border border-black p-2 bg-slate-100 rounded-lg'>
      {/* {chatMessages?.map((c, index) =>(
        <ChatMessage key={index} name={c.name} message={c.message} />
      ))} */}
      <ChatMessage name = "shalu" message="hehelofjg"/>
      <ChatMessage name = "shalu" message="hehelofjg"/>
      <ChatMessage name = "shalu" message="hehelofjg"/>
      <ChatMessage name = "shalu" message="hehelofjg"/>
      <ChatMessage name = "shalu" message="hehelofjg"/>
    </div>
    </>
  );
};

export default LiveChat;
