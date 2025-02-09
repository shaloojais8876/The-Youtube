import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import LiveChat from "./LiveChat";
//import CommentSection from "./CommentSection";

const WatchPage = () => {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  //console.log(searchParams.get("v")); //through this we will get our vido ID.

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="w-full">
      <div className="flex"> 
        <div className="pl-20">
          <iframe
            className="rounded-2xl"
            width="980"
            height="520"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

         <div className="px-2 w-full">
          <LiveChat />
        </div>
      </div>
    {/*   <CommentSection />  */}
    </div>
  );
};

export default WatchPage;
