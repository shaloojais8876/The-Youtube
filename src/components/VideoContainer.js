import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className="mt-4">
      {videos.length === 0 ? (
        <Shimmer />
      ) : (
        <div className={`grid gap-4 p-4 sm:grid-col-1 ${ isMenuOpen ? "md:grid-cols-3" : "md:grid-cols-4" }`}>
          {videos.map((video) => (
            <Link
              key={video.id}
              to={`/watch?v=${video.id}&channelID=${video.snippet.channelId}`}
              className="no-underline w-full"
            >
              <VideoCard info={video} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoContainer;
