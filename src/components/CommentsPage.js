import React from 'react'

const CommentsPage = ({comment}) => {
    // console.log(comment);
    const{textDisplay,authorDisplayName,authorProfileImageUrl}=comment.snippet.topLevelComment.snippet;
  return (
    <div className='flex gap-4 w-[90%] px-2'>
       <div>
        <img className='rounded-full min-w-[42px]' alt="userImage" src={authorProfileImageUrl}></img>
        </div>
        <div>
        <p className='font-bold'>{authorDisplayName}</p>
        <p>{textDisplay} </p>
        </div>
    </div>
  )
}

export default CommentsPage