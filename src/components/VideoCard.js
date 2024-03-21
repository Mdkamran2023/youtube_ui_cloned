import React,{useEffect,useState} from "react";
import { GOOGLE_API_KEY } from "../utils/constants";


const VideoCard = ({ info }) => {
  const[profilepic,setProfilePic]= useState();
  console.log(info);

  const getProfilePicData= async()=>{
 const data= await fetch(" https://www.googleapis.com/youtube/v3/channels?part=snippet&id="+info.snippet.channelId+"&fields=items%2Fsnippet%2Fthumbnails&key="+GOOGLE_API_KEY)
 const json = await data.json();
 console.log(json.items[0].snippet.thumbnails.default.url);
 setProfilePic(json.items[0].snippet.thumbnails.default.url);

  }
  useEffect(()=>{
    getProfilePicData();
  },[])

  if (!info) {
    return <div>No video data</div>;
  }
  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;

  // Your timestamp
  let timestamp = publishedAt;
  // console.log(timestamp);

  // Create a new Date object
  let todayDate = new Date();
  let date = new Date(timestamp);
  let timeLapse = todayDate - date;
  // console.log(timeLapse);
  function msToTime(duration) {
    let seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24),
      days = Math.floor((duration / (1000 * 60 * 60 * 24)) % 30.44),
      months = Math.floor((duration / (1000 * 60 * 60 * 24 * 30.44)) % 12),
      years = Math.floor(duration / (1000 * 60 * 60 * 24 * 365.25));

    return {
      years: years,
      months: months,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  let releaseDate = msToTime(timeLapse);
  // console.log(releaseDate);
  let result = "";
  for (let [key, value] of Object.entries(releaseDate)) {
    if (value !== 0) {
      result += `${value} ${key}, `;
      break;
    }
  }
  // Remove the trailing comma and space
  result = result.slice(0, -2);
  // console.log(result); // Outputs: 2 days, 2 hours, 29 minutes, 3 seconds

  return (
    <div className="p-2 m-2 w-[288px] h-72 shadow-lg max-sm:w-[330px]">
      <img
        className="rounded-lg min-h-48 min-w-[222px]"
        alt="thumbnail"
        src={thumbnails.maxres.url}
      ></img>
      <ul className="ml-2 ">
        <div><img className="w-[60px] rounded-full float-left mt-2 mr-1" alt="channelIcon" src={profilepic}></img></div>
        <div className="">
        <li className="font-bold whitespace-nowrap overflow-x-auto no-scrollbar ">
          {" "}
          {title}
        </li>
        <li className="font-semibold">{channelTitle}</li>
        <li className="mr-2 inline-block">
          {Math.ceil(statistics.viewCount / 1000000)}M views{" "}
        </li>
        <li className="inline-block  font-bold mr-1 text-center">.</li>
        <li className="inline-block"> {result} ago</li>
        </div>
      </ul>
    </div>
  );
};

export const AddVideoCard = ({ info }) => {
  // console.log(info);
  return (
    <div className="bg-gradient-to-tr from-red-950">
      <div className="absolute text-white text-2xl">Ad</div>
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
