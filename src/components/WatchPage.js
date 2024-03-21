import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY } from "../utils/constants";
import CommentsPage from "./CommentsPage";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [comments, setComments] = useState([]);
  const [titleDescription, setTitleDescription] = useState(null);
  const dispatch = useDispatch();
  const infoTubeVideos = useSelector((store) => store.app.infoVideo);

  const getComment = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=" +
        searchParams.get("v") +
        "&key=" +
        GOOGLE_API_KEY
    );
    const json = await data.json();
    // console.log(json.items);
    setComments(json.items);
  };

  const updateInfoWatchPage = () => {
    let videoId = searchParams.get("v");
    let filteredVideos = infoTubeVideos.filter((video) => video.id === videoId);

    if (filteredVideos.length > 0) {
      let matchedVideo = filteredVideos[0];
      setTitleDescription(matchedVideo); // Update the state here
      console.log(matchedVideo);
    } else {
      console.log("No videos found with the provided id.");
    }
  };
  useEffect(() => {
    dispatch(closeMenu());
    getComment();
    updateInfoWatchPage();
  }, []);

  if (!titleDescription) {
    return <div>Loading</div>;
  }

  return (
    <div className="p-5 mx-4 max-sm:p-2 max-sm:m-0">
     <div className="relative aspect-[16/9]">
    <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
    ></iframe>
</div>

      <div className="bg-white shadow-lg">
        {console.log(titleDescription)}
        <p className="text-2xl font-semibold">{titleDescription.snippet.title}</p>
      <p className="">{
  titleDescription.snippet.description.split('\n').map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ))
}
</p>
      
      </div>
      <div className="mt-4">
        <p className="text-2xl font-bold">Comments {titleDescription.statistics.commentCount}</p>
        {comments.length > 0 &&
          comments.map((comment) => (
            <div className="text-stone-900 flex flex-col mb-5">
              {" "}
              <CommentsPage comment={comment} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default WatchPage;
