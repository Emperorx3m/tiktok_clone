import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import AddIcon from '@mui/icons-material/Add';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

function _click() {
    console.log("clicked")
}

function AppFooter() {
    return (
        <div className="p-8 flex justify-between wideness text-white">
            <HomeIcon onClick={_click} />
            <PeopleOutlineIcon onClick={_click} />
            <div className='w-14 h-10 bg-gradient-to-r from-blue-500 to-red-500 rounded-lg relative p-4'>
                <button className='m-auto w-12 h-10 text-black absolute inset-0 bg-white border-2 border-transparent rounded-lg z-10'>
                    <AddIcon className='shadow-lg brder-4' onClick={_click} />
                </button>
            </div>
            <ChatBubbleOutlineIcon onClick={_click} />
            <PersonOutlineIcon onClick={_click} />
        </div>
    )
}

export default AppFooter

{/* <div className='bg-white text-black px-2 py-0.5 shadow-lg bg-gradient-to-r from-blue-500  to-red-500 rounded-lg '>
                <AddIcon className='shadow-lg brder-4' onClick={_click} />
            </div> */}