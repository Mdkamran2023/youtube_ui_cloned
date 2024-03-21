import Head from "./components/Head";
import Body from "./components/Body";
import {Provider} from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const appRouter= createBrowserRouter([{
  path :"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<MainContainer/>
    },
    {
      path:"/watch",
      element:<WatchPage/>
    }
  ]
}])


function App() {
  return (
    <Provider store={store}>
    <div className="App">
   <Head/>
   {/* <Body/> */}
   <RouterProvider router={appRouter}/>


      {/* 
      Header
      Body
        Sidebar
           MenuItems
        MainContainer
           ButtonList
           VideoContainer
               videoCard
      */}
    </div>
    </Provider>
  );
}

export default App;
