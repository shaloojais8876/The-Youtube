import React from "react";

const CommentBox = ({ data }) => {
  return (
   
      data.map((comment, index) => (
        <div className="pl-10 border-l-2 border-gray-400 mt-4" key={index}>
          <div className="flex">
            <img
              src="https://styles.redditmedia.com/t5_4t3vaa/styles/profileIcon_l3wss49v4hz81.png?width=256&height=256&frame=1&auto=webp&crop=256:256,smart&s=122af3150f6b506d49d6fc351a4697b9694b5370"
              alt="image"
              className="w-9 h-9 rounded-full"
            />
          
          <div className="flex-1 px-2">
            <h3 className="font-bold">{comment.username}</h3>
            <p>{comment.comment}</p>
            </div>
          </div>
          <div>
            <div>
           {comment?.replies && <CommentBox data= {comment.replies}/>}
           </div>
          </div>
        </div>
    
      ))
    
  );
};

export default CommentBox;
