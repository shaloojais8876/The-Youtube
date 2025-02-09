import React, { useEffect, useState } from 'react'
//import { YOUTUBE_CHANNEL_ICON } from '../utils/constants';
import { API_KEY } from '../utils/constants';

const VideoCard = ({info}) => {

   const [yotubeIcon, setYoutubeIcon] = useState("");

   useEffect(() => {
    channelIcon();
   },[])
  

     const channelIcon = async () => {
      const channelId = info.snippet.channelId; 
     const dataOfIcon = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${ channelId }&key=` + API_KEY);
     const json = await dataOfIcon.json();
      //console.log(json);
     setYoutubeIcon(json.items[0].snippet.thumbnails.high.url);
     };

     
     //console.log(info)
  const { snippet, statistics} = info;
  const { channelTitle, title, thumbnails } = snippet;


    
  
  return (
    <div className="p-1 m-2 w-[400px] rounded-lg hover:bg-gray-100  cursor-pointer">
  <img
    className="w-full h-[225px] rounded-xl hover:rounded-none object-cover"
    alt="thumbnail"
    src={thumbnails.medium.url}
  />
    <div className="flex mt-3">
    {yotubeIcon && ( // Only render the <img> if yotubeIcon is not empty
    <img
      alt="channelIcon"
      src={yotubeIcon}
      className="w-10 h-10 rounded-full mr-3"
    />
  )}
    <div className="flex-1">
      <h3 className="font-semibold text-md line-clamp-2">{title}</h3>
      <p className="text-gray-500 text-sm mt-1">{channelTitle}</p>
      <p className="text-gray-500 text-sm">{statistics.viewCount} views</p>
    </div>
  </div>
</div>
    

  );
}

export default VideoCard;
