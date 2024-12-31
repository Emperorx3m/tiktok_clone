import React, { useState } from 'react'
import './Videosidebar.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MessageIcon from '@mui/icons-material/Message';
import ReplyIcon from '@mui/icons-material/Reply';
import TurnedInIcon from '@mui/icons-material/TurnedIn';

function VideoSideBar({ likes, comments, shares }) {
    const [liked, setLiked] = useState(false)
    const [likedCount, setLC] = useState(likes)

    return (
        <div className='videosidebar'>
            <div className='videosidebar_btn'>
                <div class="relative w-[4em] h-[4em] rounded-full bg-gray-300 flex items-center justify-center">
                    <img src="your-image-url.jpg" alt="" class="w-full h-full object-cover rounded-full" />
                    <div class="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 w-4 h-4 rounded-full flex items-center justify-center text-white text-xs">
                        <span>+</span>
                    </div>
                </div>


            </div>
            <div className='videosidebar_btn'>

                {liked ? (
                    <FavoriteIcon fontSize="large" onClick={(e) => {
                        setLiked(false);
                        setLC(Number(likedCount) - 1)
                    }} />
                ) : (
                    <FavoriteBorderIcon fontSize="large" onClick={(e) => {
                        setLiked(true);
                        setLC(Number(likedCount) + 1)

                    }} />
                )}
                <p>{likedCount}</p>
            </div>

            <div className='videosidebar_btn'>
                <MessageIcon fontSize="large" />
                <p>{comments}</p>
            </div>

            <div className='videosidebar_btn'>
                <TurnedInIcon fontSize="large" />
                <p>{shares}</p>
            </div>

            <div className='videosidebar_btn '>
                <ReplyIcon className='transform scale-x-[-1]' fontSize="large" />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSideBar