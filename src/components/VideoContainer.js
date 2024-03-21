import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard, { AddVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { infoVideos } from "../utils/appSlice";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state
  const dispatch = useDispatch();

  const getVideos = async() => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log("data", json.items);
    dispatch(infoVideos(json.items));
    setVideos(json.items);
    setLoading(false);
  };

  useEffect(() => {
    getVideos();
  }, []); // Removed getVideos() from the dependency array

  if (loading) {
    // If loading is true, render a loading message
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-wrap justify-center mt-1">
      {videos[7] && <AddVideoCard info={videos[7]} />}
      {videos.length > 0 ? (
        videos.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default VideoContainer; // This should be outside of the function
