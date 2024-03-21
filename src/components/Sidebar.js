import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic,faGamepad,faArchway,faHome} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Trending from "../Assets/trending.svg"
import Learning from "../Assets/Learning.svg";
import News from "../Assets/News.svg";
import Shopping from "../Assets/shopping.svg";
import Live from "../Assets/Live.svg";
import Sport from "../Assets/Sports.svg";
import Fashion from "../Assets/Fashion & Beauty.svg";
import Podcasts from "../Assets/Podcasts.svg";
import YoutubePremium from "../Assets/Youtube Premium.svg";
import YoutubeMusic from "../Assets/Youtube Music.svg";
import YoutubeStudio from "../Assets/Youtube Studio.svg";
import YoutubeKids from "../Assets/YouTube Kids.svg";
import Subscriptions  from "../Assets/Subscriptions.svg"


const Sidebar = () => {
const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);

// //  early return
//  if(!isMenuOpen) return null;

  return !isMenuOpen ? null: (
    <div className='fixed pl-5 pt-5 pr-4 h-[100%] overflow-y-auto  min-w-56 col-span-2 text-black max-md:col-span-4  z-40 bg-slate-300 float-left' >
     <ul className='mt-4'>
      <li className='mt-4'><span className='mr-4'><FontAwesomeIcon icon={faHome} size="lg" /> </span> <Link to="/">Home </Link></li>
      <li className='mt-4'><img className='w-5 h-5 inline-block mr-6'  alt="shorts" src="https://th.bing.com/th/id/OIP.hym_qZheXe_M8HBDagViUwHaJh?w=136&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" ></img>Shorts</li>
      <li className='mt-4 -pr-'><img className='inline-block' alt="Subscriptions" src={Subscriptions}></img><span className='ml-5 '>Subscriptions </span> </li>
     </ul>
     <hr className='mt-5 mb-5 bg-black'></hr>

      <h1 className='font-bold mt-5'> Explore</h1>
      <ul className='mt-5'>
        <li className=''><img className='inline-block' alt="Learning" src={Trending}></img><span className='ml-5 '>Trending </span> </li>
        <li className='mt-2'><span className='mr-7'><FontAwesomeIcon icon={faMusic} size="lg" /></span>Music</li>
        <li className='mt-2'><img className='inline-block' alt="Learning" src={Sport}></img><span className='ml-5 '>Sport </span> </li>
        <li className='mt-2'>  <span className='mr-4 '><FontAwesomeIcon icon={faGamepad} size="lg" /> </span>Gaming</li>
        <li className='mt-2'> <span className='mr-6 '><FontAwesomeIcon icon={faArchway} size="lg" /> </span>Movies</li>
        <li className='mt-2'><img className='inline-block' alt="Learning" src={Learning}></img><span className='ml-5 '>Learning </span> </li>
        <li className='mt-2'><img className='inline-block' alt="Learning" src={News}></img><span className='ml-5 '>News </span> </li>
        <li className='mt-2'><img className='inline-block' alt="Learning" src={Shopping}></img><span className='ml-5 '>Shopping </span> </li>
        <li className='mt-2'><img className='inline-block' alt="Learning" src={Live}></img><span className='ml-5 '>Live </span> </li>
        <li className='mt-2'><img className='inline-block' alt="Learning" src={Fashion}></img><span className='ml-5 '>Fashion </span> </li>
        <li className='mt-2'><img className='inline-block' alt="Learning" src={Podcasts}></img><span className='ml-5 '>Podcasts </span> </li>
      </ul>

      <hr className='mt-5 mb-5 bg-black'></hr>


      <h1 className='font-bold mt-5'> More from YouTube</h1>
      <ul className='mt-5'>
      <li className=''><img className='w-6 h-6 inline-block mr-4' alt="Learning" src={YoutubePremium}></img><span className='ml-5 '>YouTube Premium </span> </li>
      <li className='mt-2'><img className='w-6 h-6 inline-block mr-4' alt="Learning" src={YoutubeMusic}></img><span className='ml-5 '>YouTube Music </span> </li>
      <li className='mt-2'><img className='w-w-6 h-6 inline-block mr-4' alt="Learning" src={YoutubeStudio}></img><span className='ml-5 '>YouTube Studio </span> </li>
      <li className='mt-2 mb-32'><img className='w-6 h-6 inline-block mr-4' alt="Learning" src={YoutubeKids}></img><span className='ml-5 '>YouTube Kids </span> </li>
      </ul>


    </div>
  )
}

export default Sidebar