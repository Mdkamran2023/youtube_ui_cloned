import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searcSlice from "./searcSlice";

const store= configureStore({
     reducer:{
        app:appSlice,
        search:searcSlice,
     }
});


export default store;