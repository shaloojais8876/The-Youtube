import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { Col, Row, Skeleton } from "antd";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getVideos();
  }, []);

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const getVideos = async () => {
    setLoading(true);
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
    setLoading(false);
  };

  return (
    <Skeleton active loading={loading}>
      <Row gutter={16} className={`mt-4 scrollbar-hide`} >
        {videos.map((video, index) => (
          <Col md={isMenuOpen ? 8 : 6}  className="w-full flex-grow" key={index} >
          <Link key={video.id} to={`/watch?v=${video.id}&channelID=${video.snippet.channelId}`} color="black" className="text-black">
            <VideoCard info={video} />
          </Link>
          </Col>
        ))}
      </Row>
    </Skeleton>
  );
};

export default VideoContainer;
