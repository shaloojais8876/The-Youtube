import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import LiveChat from "./LiveChat";
import { API_KEY } from "../utils/constants";
//import CommentSection from "./CommentSection";

const WatchPage = () => {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  //console.log(searchParams.get("v")); //through this we will get our vido ID.

  const [singleVideo, setSingleVideo] = useState("");
  const getSingleVideoData = async () => {
    const singleVideoData = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
    );
    const json = await singleVideoData.json();
    console.log(json);
    setSingleVideo(json.items[0].snippet.title);
  };

  useEffect(() => {
    getSingleVideoData();
  });

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
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <h3 className="font-bold mt-3 text-lg">{singleVideo}</h3>
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
