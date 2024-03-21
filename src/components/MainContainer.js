import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className= 'ml-4 w-[90%] lg:w-[84%] mx-auto float-right'>
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}

export default MainContainer;