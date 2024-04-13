import React from 'react';
import Logo from '../assets/upd1.png'

const Home = () => {
  return (
    <>
      <header className="bg-black text-black py-4"> 
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center"> 
            <img src={Logo} alt="Logo" className="w-30 h-20" /> 
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <button className="rounded py-2 px-4" style={{background: 'linear-gradient(115deg, #f97794, #623aa2)'}}>
                  <a href="#" className="text-white">Sign up</a>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="bg-black flex flex-col items-center justify-center h-screen bg-[url('/img/hero-pattern.svg')]">
      <div className="text-transparent bg-clip-text bg-gradient-to-r from-[rgba(222,0,75,1)] via-[rgba(191,70,255,1)] to-[rgba(0,212,255,1)] animate-gradient-text font-bold text-4xl md:text-6xl text-center">
        LEELOOP 
      </div>
        <div className="text-white text-2xl md:text-3xl mt-4"> {/* Increased font size */}
          A best way to sell your songs worldwide and become popular fans
        </div>
        <button className="text-lg bg-gradient-to-r from-[rgba(222,0,75,1)] via-[rgba(191,70,255,1)] to-[rgba(0,212,255,1)] text-white font-bold py-2 px-4 rounded mt-8"> {/* Set text color to white and increased font size */}
          Upload
        </button>
      </div>
    </>
  );
};

export default Home;




