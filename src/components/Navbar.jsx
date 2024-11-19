import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/icon/command.svg";
import git from "../assets/icon/git.svg";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className="flex justify-between h-20 items-center px-4 md:px-10">
        {/* Logo Section */}
        <div className="flex gap-2 items-center">
          <img className='w-7' src={logo} alt="" />
          <h1 className='font-semibold text-lg'>jonathana-fadel</h1>
        </div>

        {/* Desktop Navigation */}
        <ul className='hidden md:flex text-sm gap-5'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/skills">Skills</Link></li>
        </ul>

        {/* Collaborate Button - Desktop */}
        <a className='hidden md:flex text-sm gap-2 items-center bg-white shadow-xl border border-gray-400 px-4 py-2 rounded-full' href="">
          Collaborate <img className='w-5' src={git} alt="" />
        </a>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="z-50 relative">
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Sliding Sidebar */}
      <div className={`
        fixed top-0 right-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-40
        ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="flex flex-col text-sm h-full pt-20 px-6 space-y-6">
          {/* <div className="absolute top-6 right-6">
            <button onClick={toggleSidebar}>
              <X size={24} />
            </button>
          </div> */}
          
          <Link 
            to="/" 
            onClick={toggleSidebar} 
            className="text-lg font-medium hover:text-gray-600 transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            onClick={toggleSidebar} 
            className="text-lg font-medium hover:text-gray-600 transition-colors"
          >
            About
          </Link>
          <Link 
            to="/projects" 
            onClick={toggleSidebar} 
            className="text-lg font-medium hover:text-gray-600 transition-colors"
          >
            Projects
          </Link>
          <Link 
            to="/skills" 
            onClick={toggleSidebar} 
            className="text-lg font-medium hover:text-gray-600 transition-colors"
          >
            Skills
          </Link>
          
          <a 
            href="" 
            onClick={toggleSidebar} 
            className=" text-sm gap-2 items-center bg-white shadow-xl border text-black border-gray-400 px-4 py-2 rounded-full mt-auto mb-10 flex justify-center gap-2 items-center px-6 py-3 rounded-full"
          >
            Collaborate <img className='w-5' src={git} alt="" />
          </a>
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {isSidebarOpen && (
        <div 
          onClick={toggleSidebar} 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
        ></div>
      )}
    </>
  );
};

export default Navbar;