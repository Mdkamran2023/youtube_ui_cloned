import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searcSlice";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);

  // console.log(searchQuery);

  /**
   * searchCache={
   * "iphone":["iphone 11","iphone pro max"]
   * }
   * 
   * searchQuery=iphone
   */

  useEffect(() => {
    //  API call will be here it will api call on every keyStrokes
    // but here we need to api call when the keyStrokes between two keyStroke is more then 200ms

    // make an API call after every key press
    // but if the difference between two APIs call is <200ms
    // decline the api call

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggesstions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /**
   * key-i
   * render the component
   * useEffect()
   * start timer ->make an API call after 200ms
   *
   * key -ip
   * **when pressed before 200ms then it will first destroy the component(reconcilation process start) and called (useEffect return method also)
   * render the Component
   * useEffect()
   * start timer  ->make an API call after 200ms because it a new variable everytime when it rerenders
   *
   *   setTimeout(200)->make an API call after 200ms if not any keypressed before 200ms
   */

  const getSearchSuggesstions = async () => {
    console.log("API call", searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    console.log(json);

    // update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="bg-white fixed top-0 w-full z-50 flex  p-4 shadow-lg">
      <div className="flex items-center mr-4">
        <span className="mr-2 cursor-pointer" onClick={toggleMenuHandler}>
          <FontAwesomeIcon icon={faBars} size="2x" />
        </span>
        <img
          className="h-12 rounded-lg"
          alt="youtube-logo"
          src="https://th.bing.com/th/id/R.e056183951b8daad25399dae1c110e24?rik=oblvZQKBF1XRIw&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fyoutube-icon-transparent-png%2fyoutube-icon-transparent-png-22.jpg&ehk=0TQftuLpmEmrWaFmMcvB8NFCLka2RGnAJI2QM%2bbyTmc%3d&risl=&pid=ImgRaw&r=0"
        ></img>
      </div>
      <div className="flex flex-col justify-center items-center w-[80%]">
        <div className="flex  justify-center items-center mx-4  w-[80%]">
          <button className="p-1 px-2   text-gray-400 border border-gray-400 rounded-l-3xl border-r-0">
            <FontAwesomeIcon icon={faSearch} size="lg" />
          </button>
          <input
            type="text"
            placeholder="Search"
            className="w-1/2  border border-gray-400 p-1 border-r-0 border-l-0 "
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          ></input>
          <button className="p-1 px-2 bg-gray-200  text-gray-400 border border-gray-400 rounded-r-3xl border-l-0">
            <FontAwesomeIcon icon={faSearch} size="lg" />
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute top-16 bg-white w-[40%] ">
            <ul className="">
              {suggestions.map((sugges) => (
                <li
                  key={sugges}
                  className="text-slate-500 rounded-lg shadow-sm px-8 py-2 xl:px-12 hover:bg-gray-100"
                >
                  {" "}
                  <FontAwesomeIcon icon={faSearch} size="sm" />{" "}
                  <span className="ml-1 text-slate-500">{sugges}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex items-center ml-4">
        <img
          className="h-12"
          alt="user"
          src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
        ></img>
      </div>
    </div>
  );
};

export default Head;
