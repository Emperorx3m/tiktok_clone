import React, { useEffect, useRef, useState } from 'react'
import './Video.css'
import VideoFooter from './VideoFooter'
import VideoSideBar from './VideoSideBar'

function Video({vidurl,channel,song,desc,likes,shares,comments}) {
  const [playing, setPlaying] = useState(false)
  const vidref = useRef(null)

  useEffect(() => {
    var c = document.querySelector('.app_video__container')
    c.onscroll = (e) => {
      stopVid(vidref);
    }
  })
  
  const stopVid = (vr) => {
    var vrc = vr.current;
      vr.current.pause();
      setPlaying(false);

    // console.log('stopping video', vrc)
  }

  const handleVidClick = () => {
    if (playing) {
      vidref.current.pause();
      setPlaying(false)
    } else {
      vidref.current.play();
      setPlaying(true)
    }
  }

  return (
    <div className='video'>
      <video
        onClick={handleVidClick}
        ref={vidref}
        className='video__player'
        loop
        src={vidurl} ></video>

      <VideoFooter
        channel={channel}
        song={song}
        desc={desc}

      />
      <VideoSideBar
        likes={likes}
        shares={shares}
        comments={comments}

      />
     
    </div>
  )
}

export default Video