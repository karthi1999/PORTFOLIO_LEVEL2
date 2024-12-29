import React from 'react';
import "./Home.scss"
import VideoWithFallback from '../../components/VideoWithFallback/VideoWithFallback';
import DownloadButton from '../../components/DownloadButton/DownloadButton';
import TypingEffect from '../../components/TypingEffect/TypingEffect';

const Home = () => {
  return (
    <main>
      <div className='home-section hidden sm:block' id='home'>
        <VideoWithFallback />
        <div className='home-container clip-path'></div>
        <div className='w-full h-fit md:h-full flex justify-center'>
          <div className='flex absolute z-10 top-32 lg:top-0 w-4/5 lg:h-full justify-center items-center mx-auto'>
            <div className="w-full h-full flex flex-col justify-center gap-1 md:gap-2">
              <h3 className="text md:text-xl lg:text-3xl font-medium slide-in-animation" style={{ animationDelay: "0s" }}>
                Hi There,
              </h3>
              <h1 className="text-lg md:text-2xl lg:text-5xl font-semibold slide-in-animation" style={{ animationDelay: "0.3s" }}>
                I'm KARTHI BABU
              </h1>
              <h3 className="text md:text-xl lg:text-3xl font-medium slide-in-animation" style={{ animationDelay: "0.6s" }}>
                I'm a <TypingEffect colors={'text-red-500 border-red-500'} />
              </h3>
              <div className="hidden md:flex gap-3 md:gap-7 mt-5 slide-in-animation" style={{ animationDelay: "0.9s" }}>
                <a href='https://www.facebook.com/profile.php?id=100004663937920' target="_blank" rel="noopener noreferrer"><img src="/fb.svg" alt="facebook" className="w-6 h-6" /></a>
                <a href='https://www.instagram.com/br.karthi1999/' target="_blank" rel="noopener noreferrer"><img src="/insta.svg" alt="instagram" className="w-6 h-6" /></a>
                <a href='https://www.linkedin.com/in/karthi-babu/' target="_blank" rel="noopener noreferrer"><img src="/linkedIn.svg" alt="linkedIn" className="w-6 h-6" /></a>
              </div>
              <div className="slide-in-animation" style={{ animationDelay: "1.2s" }}>
                <DownloadButton />
              </div>
            </div>
            <div className="w-full h-full flex justify-center items-center relative mt-5">
              <img
                src="/cartoon.png"
                className="w-[60%] h-auto object-cover absolute z-10 left-[15%] animate-bottom-to-top"
              />
              <img
                src="/final-bg.png"
                className="w-[50%] h-auto object-cover animate-top-to-bottom"
              />
            </div>

          </div>
        </div>
      </div>

      {/* Moblie View */}
      <div className='relative h-screen sm:hidden'>
        <div className='m-14 md:mt-20 h-4/5 bg-slate-200 rounded-3xl'></div>

        <img src='final-bg.png' className='absolute top-14 z-10 animate-top-to-bottom' />
        <img src='cartoon.png' className='absolute -top-16 z-10 animate-bottom-to-top' />
        <div className='absolute top-1/4 z-10'>
          <h3 className='text-3xl font-medium text-white animate-left-to-right' style={{ animationDelay: "0s" }}>Hi There,</h3>
          <h1 className='text-5xl font-bold text-white py-3 animate-left-to-right' style={{ animationDelay: "0.3s" }}>I'm Karthi</h1>
          <h3 className='text-3xl font-medium text-white animate-left-to-right' style={{ animationDelay: "0.6s" }}><TypingEffect /></h3>
        </div>
        <div className='absolute top-[22%] z-10 flex flex-col gap-3 right-6'>
          <a href='https://www.facebook.com/profile.php?id=100004663937920' target="_blank" rel="noopener noreferrer"><img src='/fb-white.svg' alt='facebook' className='w-6 h-6 animate-right-to-left' style={{ animationDelay: "0.3s" }} /></a>
          <a href='https://www.instagram.com/br.karthi1999/' target="_blank" rel="noopener noreferrer"><img src='/insta-white.svg' alt='instagram' className='w-6 h-6 animate-right-to-left' style={{ animationDelay: "0.6s" }} /></a>
          <a href='https://www.linkedin.com/in/karthi-babu/' target="_blank" rel="noopener noreferrer"><img src='/linkedIn-white.svg' alt='linkedIn' className='w-6 h-6 animate-right-to-left' style={{ animationDelay: "0.9s" }} /></a>
        </div>
        <div className='absolute top-[42%] z-10 flex gap-3 right-6  animate-right-to-left' style={{ animationDelay: "0.9s" }}>
          <DownloadButton />
        </div>
      </div>
    </main>
  )
}

export default Home