import React from "react";

const Video = ({ item }) => {
  return (
    <video controls className="h-[200px] mx-auto">
      <source src={item.videos.small.url} type="video/mp4" />
    </video>
  );
};

export default Video;
