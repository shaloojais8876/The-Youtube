import React from 'react'

const WatchCards = ({ cards}) => {;
  const {snippet, statistics} = cards;
  const {channelTitle, title, thumbnails} = snippet;
  return (
    <div className='md:px-4 w-full mt-4 flex'>
      <div className="w-40 h-24 flex-shrink-0 cursor-pointer  ">
        <img src = {thumbnails.medium.url} 
         alt="img"
         className="w-full h-full object-cover rounded-lg"
         /> 
        {/* <img src ="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"/> */}
      </div>
      <div className='px-2 text-sm cursor-pointer'>
        <p className='line-clamp-2 font-semibold'>{title}</p>
        <p className=''>{channelTitle}</p>
        <p className='text-gray-500'>{statistics?.viewCount}views</p>
      </div>
    </div>
  )
}

export default WatchCards;
