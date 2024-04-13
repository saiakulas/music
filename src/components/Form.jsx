import React from 'react';
import music from './music.jpg';
import './form.css';

const Form = () => {
  const handleMusicUpload = (event) => {
    const file = event.target.files[0];
  };

  const handleCoverUpload = (event) => {
    const file = event.target.files[0];
  
  };

  return (
    <div className="form-container" style={{ background: 'linear-gradient(115deg, #000000, #444444)' }}>
      <div className="content flex flex-col items-center justify-center">
        <div className="flex justify-between w-full px-4 items-center">
        <div className="w-5 h-5 bg-red-500 rounded-full mr-4  text-center"></div>
          <h1 className="text-white text-2xl font-bold flex-grow text-center">MY UPLOADS</h1>
          <div className="flex">
            <a href="#" className="bg-black border-2 border-red-500 text-white font-bold py-2 px-4 rounded">Home</a>
          </div>
        </div>
        <div className="bg-black rounded-lg p-8 mt-8 flex flex-col md:flex-row transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg shine-border">
          <div className="mb-8 md:mr-20 md:mb-0 w-full md:w-auto">
            <div className="mb-4">
              <img src={music} alt="Music" className="w-full h-auto rounded-lg border border-gray-500" />
            </div>
            <div className="flex space-x-4">
              <div className="mb-4">
                <input type="file" accept=".mp4" onChange={handleMusicUpload} className="hidden" id="musicUpload" />
                <label htmlFor="musicUpload" className="text-white font-bold text-lg bg-red-500 rounded-md p-2 transition duration-300 ease-in-out transform hover:bg-red-600">
                  Upload Music
                </label>
              </div>
              <div className="mb-4">
                <input type="file" accept=".jpg, .jpeg" onChange={handleCoverUpload} className="hidden" id="coverUpload" />
                <label htmlFor="coverUpload" className="text-white font-bold text-lg bg-red-500 rounded-md p-2 transition duration-300 ease-in-out transform hover:bg-red-600">
                  Upload Cover
                </label>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <form>
              <div className="mb-4">
                <input type="text" id="title" className="bg-gray-800 rounded-md p-2 w-full text-white" placeholder="Title" />
              </div>
              <div className="mb-4">
                <input type="text" id="subtitle" className="bg-gray-800 rounded-md p-2 w-full text-white" placeholder="Subtitle" />
              </div>
              <div className="mb-4">
                <input type="text" id="mainGenre" className="bg-gray-800 rounded-md p-2 w-full text-white " placeholder="Main Genre" />
              </div>
              <div className="mb-4">
                <input type="text" id="duration" className="bg-gray-800 rounded-md p-2 w-full text-white" placeholder="Duration" />
              </div>
              <button className="bg-black border-2 border-red-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:bg-red-500 hover:text-black">
                <svg className="inline-block h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
                </svg>
                Upload
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;














