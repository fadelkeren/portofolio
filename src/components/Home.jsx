import React from 'react';
import ChatAI from "../components/ChatAI";
import ig from "../assets/icon/ig.svg";
import github from "../assets/icon/github.svg";
import chat from "../assets/icon/chat.svg";
import bg from "../assets/bgabs.jpg";
import padel from "../assets/ey.png";
import pp from "../assets/pp.png";
import spotify from "../assets/spo.webp";
import "../styles/App.css";

const Home = () => {
  return (
    <div>
      {/* Header Section - Responsive Layout */}
      <div className="flex flex-col md:flex-row items-center mt-8 justify-between px-4 md:px-10">
        <div className="text-center md:text-left mb-8 md:mb-0">
          <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl">
            From Idea <span className='text-gray-500'>to Deployment</span> –
          </h1>
          <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl">
            Full<span className='text-gray-400'>stack Developm</span>ent by Im Fadel
          </h1>
          <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl">
            Fullstack Expertise That <span className='text-gray-600'>Delivers</span>
          </h1>
          <div className="flex flex-col md:flex-row items-center mt-5 gap-5">
            <div className="flex gap-2 mb-4 md:mb-0">
              <div className="w-5 h-5 bg-violet-700 rounded-full"></div>
              <div className="w-5 h-5 bg-orange-500 rounded-full"></div>
              <div className="w-5 h-5 bg-green-400 rounded-full"></div>
            </div>
            <div className="flex flex-wrap justify-center gap-3 items-center text-sm md:text-lg">
              <span className='bg-white border-2 border-gray-700 p-1 px-4 rounded-full'>Fullstack</span>
              <span className='bg-white border-2 border-gray-700 p-1 px-4 rounded-full'>GameDev</span>
              <span className='bg-white border-2 border-gray-700 p-1 px-4 rounded-full'>UI/UX Design</span>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col gap-4 md:gap-7 items-center bg-white py-4 md:py-7 px-3 rounded-full shadow-lg">
          <a href="" className=""><img className='w-6' src={ig} alt="" /></a>
          <a href="" className=""><img className='w-6' src={github} alt="" /></a>
          <a href="" className=""><img className='w-6' src={chat} alt="" /></a>
        </div>
      </div>

      {/* Chat Assistant Section - Responsive Layout */}
      <div className="mt-14 px-4 md:px-10 mb-16 md:mb-32 flex flex-col md:flex-row gap-5 md:gap-10">
        <div className="bgabs rounded-lg w-full md:w-2/5 h-64 md:h-auto"></div>
        <div className="bg-white border-2 shadow-xl text-2xl md:text-4xl lg:text-6xl p-5 md:p-10 font-bold w-full md:w-3/5 border-gray-700 rounded-lg">
          <h1>Instant Help, Real-time Solutions – <span className='text-gray-600'>Explore the Chat Assistant by Fadel!"</span></h1>
          <div className="flex flex-col md:flex-row justify-between items-center mt-5">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <img className='rounded-full border-2 border-gray-900 w-10 md:w-12 h-10 md:h-12' src={padel} alt="" />
              <h2 className='text-xl md:text-3xl'>Fadel Ai</h2>
            </div>
            <a href='' className='text-xs md:text-sm text-gray-800 font-medium border border-gray-600 p-2 rounded-full px-4'>Baca Selengkapnya...</a>
          </div>
        </div>
      </div>

      {/* Spotify Section - Responsive Layout */}
      <div className="bg-black pb-10 md:pb-20">
        <div className="flex items-center p-4 md:p-10">
          <img className='w-12 md:w-20' src={spotify} alt="" />
          <h1 className='text-xl md:text-3xl font-bold text-white'>My Playlist</h1>
        </div>
        <div className="flex flex-col w-full px-4 md:px-10">
          <div className="rounded-lg p-5">
            <div className="flex md:flex-row items-center gap-5 md:gap-10">
              <img className='rounded-lg' src={pp} alt="" />
              <div className="text-left">
                <h1 className='text-3xl md:text-6xl text-white font-bold'>soft serenity</h1>
                <div className="flex md:flex-row mb-8 gap-3 text-white font-semibold items-center justify-center md:justify-start">
                  <img className='w-10 h-10 rounded-full' src={padel} alt="" />
                  <p>perkedelmewing</p>
                  <p className='hidden md:block'>-</p>
                  <p className='text-gray-500'>34 lagu, sekitar 2 jam</p>
                </div>
                <div className="flex md:justify-start">
                  <a className='text-green-500 text-sm p-2 px-4 border border-green-600 rounded-lg' href="">Kunjungi Playlist</a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-5 p-4 md:p-10 px-0">
            <h1 className='text-2xl md:text-3xl font-bold text-white'>Apa Kata Mereka?</h1>
            <p className='text-xs md:text-sm text-gray-300'>Commentar ini diambil berdasarkan survei google form pada 11/18/24</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {name: "unknown", comment: "Uyy fadellll❤️", bg: "bg-white"},
              {name: "rakhasukacoklat", comment: "kereenn ajarin dongg😥", bg: "bg-white"},
              {name: "ryallnyel", comment: "Elek dell", bg: "bg-gray-600"},
              {name: "Fatartyl", comment: "anjir ada ai ne, gg gg", bg: "bg-gray-700"},
              {name: "Lukman hytdn", comment: "Wahaha keren fadell😆", bg: "bg-white"},
              {name: "Dewi", comment: "tailwind?", bg: "bg-gray-700"},
              {name: "rozi", comment: "ngerii rpl1🔥", bg: "bg-gray-700"}
            ].map((item, index) => (
              <div key={index} className={`${item.bg} text-${item.bg === 'bg-white' ? 'black' : 'white'} p-3 md:p-5 border border-gray-800 rounded-lg`}>
                <h2 className={`text-sm md:text-lg font-bold ${item.bg === 'bg-white' ? 'text-black' : 'text-white'}`}>{item.name}</h2>
                <p className="text-xs md:text-base">{item.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ChatAI/>
    </div>
  );
};

export default Home;