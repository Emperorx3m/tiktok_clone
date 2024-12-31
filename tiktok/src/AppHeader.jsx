import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

function _click() {
    console.log("clicked")
}

function AppHeader() {
    return (
        <div className="p-8 flex justify-between text-white wideness">
        <div></div>
        <div className='flex'>
            <h6 className="text-md font-semibold pr-2 text-gray-500">Following</h6>
            <h6 className="text-md font-semibold pl-2 underline underline-offset-[12px]">For You</h6>
        </div>
            <SearchIcon onClick={_click} />
        </div>
    )
}

export default AppHeader