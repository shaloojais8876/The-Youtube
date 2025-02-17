import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import LiveChat from "./LiveChat";
import { API_KEY } from "../utils/constants";
import CommentSection from "./CommentSection";
import Button from "../utils/buttonStyles";
import { BiLike } from "react-icons/bi";
import { AiOutlineDislike } from "react-icons/ai";
import { PiShareFat } from "react-icons/pi";
import { RiDownloadLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import SideCards from "./SideCards";

const WatchPage = () => {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  //console.log(searchParams.get("v")); //through this we will get our vido ID.

  const [singleVideo, setSingleVideo] = useState("");
  const [channelName, setChannelName] = useState("");
  const [yotubeIcon, setYoutubeIcon] = useState("");
  const [totalSubscriber, setTotalSubscriber] = useState("");
  const [videoDescription, setVideoDescription] = useState("");
  const [descriptionOpen, setDescriptionOpen] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      //console.log(ref.current.scrollHeight, ref.current.clientHeight)
      setShowReadMore(ref.current.scrollHeight !== ref.current.clientHeight);
    }
  }, [videoDescription]);

  const getSingleVideoData = async () => {
    const singleVideoData = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
    );
    const json = await singleVideoData.json();
    // console.log(json);
    setSingleVideo(json.items[0].snippet.title);
    setChannelName(json.items[0].snippet.channelTitle);
  };

  const channelIcon = async () => {
    const channelId = searchParams.get("channelID");
    const dataOfIcon = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=` +
        API_KEY
    );
    const json = await dataOfIcon.json();
    // console.log(json)
    setYoutubeIcon(json.items[0].snippet.thumbnails.high.url);
    setTotalSubscriber(json.items[0].statistics.subscriberCount);
    setVideoDescription(json.items[0].snippet.description);
  };

  useEffect(() => {
    dispatch(closeMenu());
    getSingleVideoData();
    channelIcon();
    //sideVideos();
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <div className="flex w-full px-6">
        <div className="w-full h-full">
          <div className="w-full max-w-[980px] h-auto  relative pb-[56.25%]">
            <iframe
              className="rounded-2xl absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?&autoplay=1 `}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <h3 className="font-bold mt-3 text-lg">{singleVideo}</h3>

          <div className="mt-4 w-full">
            <div className="flex items-center w-full">
              <div className="flex w-full">
                <div className="w-10 h-10">
                  {yotubeIcon && (
                    <img
                      alt="channelIcon"
                      src={yotubeIcon}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                  )}
                </div>
                <div className="flex-1">
                  <h1 className="px-1 font-bold">{channelName}</h1>
                  <p className="text-gray-500 text-sm mt-1">
                    {totalSubscriber}
                  </p>
                </div>
              </div>

              <div className="pl-4">
                <Button
                  variant="dark"
                  className="font-medium px-3 py-1 mx-2 rounded-full text-white"
                >
                  Subscribe
                </Button>
              </div>
              <div className="flex justify-between items-center ml-80">
                <div className="bg-gray-200 rounded-l-full hover:bg-gray-300 px-2 py-1">
                  <button className="flex items-center">
                    <span className="mr-2">
                      <BiLike className="w-6 h-6" />
                    </span>
                  </button>
                </div>
                <div className="bg-gray-200 hover:bg-gray-300 rounded-r-full px-2 py-1 ">
                  <button className="flex items-center">
                    <span className="mr-2">
                      <AiOutlineDislike className="w-6 h-6" />
                    </span>
                  </button>
                </div>
              </div>

              <div className="ml-4 bg-gray-200 hover:bg-gray-300  px-3 py-1 rounded-full">
                <button className="flex items-center">
                  <PiShareFat />
                  <span className="ml-1">Share</span>
                </button>
              </div>

              <div className="ml-4 bg-gray-200 hover:bg-gray-300  px-3 py-1 rounded-full">
                <button className="flex items-center">
                  <RiDownloadLine />
                  <span className="ml-1">Download</span>
                </button>
              </div>

              <div className="rounded-full ml-2 bg-gray-200 hover:bg-gray-300 px-2 py-1">
                <button>
                  <BsThreeDots />
                </button>
              </div>
            </div>

            <div className="border border-gray-500 rounded-2xl bg-gray-200 p-3 mt-2">
              <p
                ref={ref}
                className={`${descriptionOpen ? "null" : "line-clamp-2"}`}
              >
                {videoDescription}
              </p>

              {showReadMore && (
                <button onClick={() => setDescriptionOpen(!descriptionOpen)}>
                  {descriptionOpen ? "read less" : "read more..."}
                </button>
              )}
            </div>
            <div className=" hidden md:block">
              <CommentSection />
            </div>
            <div className="w-full sm:block md:hidden mt-2">
                <SideCards />
            </div>
          </div>
        </div>

        <div>
          <div className="px-2 w-full hidden md:block">
            <LiveChat />
          </div>
          <div className="hidden md:block">
            <SideCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
