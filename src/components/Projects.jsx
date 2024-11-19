import React from 'react';
import ChatAI from "../components/ChatAI";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900 p-6">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-gray-800">Oops!</h1>
        <p className="text-2xl font-semibold text-gray-700 mb-6">
          This page is still being updated.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          We’re working on something awesome! Please check back later.
        </p>
        <ChatAI />
      </div>
    </div>
  );
};

export default Projects;
