import { createSlice } from "@reduxjs/toolkit";

const appSlice =createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
        infoVideo:[],
    },
    reducers:{
        toggleMenu:(state,action) =>{
            state.isMenuOpen = ! state.isMenuOpen
        },
        closeMenu:(state,action)=>{
            state.isMenuOpen=false;
        },
        infoVideos:(state,action)=>{
           state.infoVideo=action.payload;
        }
    }
})

export const {toggleMenu,closeMenu,infoVideos} = appSlice.actions;

export default appSlice.reducer;