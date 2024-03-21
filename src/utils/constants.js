export const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const YOUTUBE_VIDEOS_API =
  //  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key="+GOOGLE_API_KEY
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=NZ&maxResults=10&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

// export const PROFILE_PIC_URL=
// " https://www.googleapis.com/youtube/v3/channels?part=snippet&id="+CHANNEL_ID+"&fields=items%2Fsnippet%2Fthumbnails&key="+GOOGLE_API_KEY
