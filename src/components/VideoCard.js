import React from 'react'

const VideoCard = ({info}) => {
     //console.log(info)
     const { snippet, statistics} = info;
     const { channelTitle, title, thumbnails } = snippet;
   
  
  return (
    <div className="p-1 m-2 w-[400px] rounded-lg">
          <img  className="w-[400px] h-[225px] rounded-xl hover:rounded-none" alt="thumbnail" src = { thumbnails.medium.url }/>
         {/* <img className="w-[400px] h-[225px] rounded-lg hover:rounded-none" src='https://www.digitaltrends.com/wp-content/uploads/2020/04/thumbnails.jpg?resize=800%2C418&p=1' alt="chitua"/> */}
      
        <h3 className="mt-2 font-semibold text-md line-clamp-2">{title}</h3>
        <p className="text-gray-500 text-sm">{channelTitle}</p>
        <p className="text-gray-500 text-sm">{ statistics.viewCount } views</p> 
        </div>
    

  );
}

export default VideoCard;
