import React from 'react'
import { MdOutlineRocketLaunch } from "react-icons/md";
import { PiNotePencilDuotone } from "react-icons/pi";
import { IoRemoveOutline } from "react-icons/io5";

const Banner = ({handleCreateClick, handleExploreClick}) => {
  return (
    <div className="banner px-10 pt-5 pb-20">
        <div className="company text-lg flex text-[#540A98] mb-3">
          <div className="flex items-center">BEST CHOICE</div>
          <div className="text-4xl flex items-center"><IoRemoveOutline /></div>
        </div>
        <div className="actionCall md:w-[50%] text-4xl md:text-6xl text-white font-bold mb-5">
          Discover, collect, and sell extraordinary NFTs
        </div>
        <div className="text-[#8E8E8E] font-normal text-xl mb-6">Explore on the world's best & largest NFT marketplace</div>
        <div className="buttons flex space-x-6">
          <button
            onClick={handleExploreClick} // Attach scroll handler
            className='flex space-x-3 px-5 py-3 rounded-full border-2'
          >
            <div className="icon text-white text-lg"><MdOutlineRocketLaunch /></div>
            <div className="text-white">Explore</div>
          </button>
          <button
            onClick={handleCreateClick} // Attach navigation handler
            className="flex space-x-3 px-5 py-3 rounded-full border-2"
          >
            <div className="icon text-white text-lg"><PiNotePencilDuotone /></div>
            <div className="text-white">Create</div>
          </button>
        </div>
    </div>
  )
}

export default Banner