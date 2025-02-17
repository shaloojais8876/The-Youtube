import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-start">
  {Array(10)
  .fill(0)
  .map((n, i) => (
   
    <div key={i} className="m-2 w-[396px] rounded-lg">
      <div className=" h-[225px] rounded-xl bg-gray-200 object-cover"></div>
      <div className="flex mt-3">
        <div className="w-10 bg-gray-200 h-10 rounded-full mr-3"></div>
        <div className="flex-1">
          <h3 className="line-clamp-2 bg-gray-200 h-3 mb-2 rounded"></h3>
          <p className="mt-1 bg-gray-200 h-3 w-3/4 mb-1 rounded"></p>
        </div>
        </div>
      </div>
      ))}
    </div>
  
)};

export default Shimmer;
