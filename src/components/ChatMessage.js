
import { User } from 'lucide-react';

const ChatMessage = ({ name, message }) => {
  return (
    <div className='flex shadow-sm p-2'>
      <User/>
      <span className='font-bold px-2'>{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;