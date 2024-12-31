import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from 'react-ticker'
import Record from '/assets/images/record.png';

function VideoFooter({channel, desc, song}) {
    return (
        <div className='videofooter'>
            <div className='videofooter_text'>
                <h3> {channel} </h3>
                <p>{desc}</p>
                <div className='videofooter_tickerdiv'>
                    <MusicNoteIcon className='videofooter_tickerIcon' />
                    <marquee scrollamount="4" className="videofooter_ticker ticker">
                         <p>{song}</p>
                    </marquee>
                    
                </div>
            </div>
            <img src={Record} className='videofooter_record' alt='' />
        </div>
    )
}

export default VideoFooter