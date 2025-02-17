import { useState, useEffect } from "react";
import WatchCards from "./WatchCards";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { Link } from "react-router-dom";

const SideCards = () => {
  const [sideCards, setSideCards] = useState([]);

  const sideVideos = async () => {
    const videos = await fetch(YOUTUBE_VIDEOS_API);
    const json = await videos.json();
    setSideCards(json.items);
  };

  useEffect(() => {
    sideVideos();
  }, []);

  return (
    sideCards.length > 0 && (
      <div className="flex flex-col h-[150vh] overflow-y-auto">
        {sideCards.map((item) => (
          <Link
            key={item.id}
            to={`/watch?v=${item.id}&channelID=${item.snippet.channelId}`}
            className="no-underline"
          >
            <WatchCards cards={item} />
          </Link>
        ))}
      </div>
    )
  );
};

export default SideCards;
