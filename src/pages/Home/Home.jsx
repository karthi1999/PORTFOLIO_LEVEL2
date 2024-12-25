import React from 'react';
import "./Home.scss"
import VideoWithFallback from '../../components/VideoWithFallback/VideoWithFallback';
import DownloadButton from '../../components/DownloadButton/DownloadButton';
import TypingEffect from '../../components/TypingEffect/TypingEffect';

const Home = () => {
  return (
    <main>
      <div className='home-section hidden sm:block'>
        <VideoWithFallback />
        <div className='home-container clip-path'></div>
        <div className='w-full h-full flex justify-center'>
          <div className='flex absolute z-10 top-32 lg:top-0 w-4/5 lg:h-full justify-center items-center mx-auto'>
            <div className='w-full h-full flex flex-col justify-center gap-1 md:gap-2'>
              <h3 className='text md:text-xl lg:text-3xl font-medium arial-font'>Hi There,</h3>
              <h1 className='text-lg md:text-2xl lg:text-5xl font-semibold'>I'm KARTHI BABU</h1>
              <h3 className='text md:text-xl lg:text-3xl mt-6 arial-font'>
                <TypingEffect />
              </h3>
              <div className='hidden md:flex gap-3 md:gap-7 mt-5'>
                <img src='/fb.svg' alt='facebook' className='w-6 h-6' />
                <img src='/insta.svg' alt='instagram' className='w-6 h-6' />
                <img src='/linkedIn.svg' alt='linkedIn' className='w-6 h-6' />
              </div>
              <DownloadButton />
            </div>
            <div className='w-full h-full flex justify-center items-center relative'>
              <img src='/cartoon.png' className='w-[65%] h-auto object-cover absolute left-[15%]' />
              <img src='/final-bg.png' className='w-[55%] h-auto object-cover' />
            </div>
          </div>
        </div>
      </div>

      {/* Moblie View */}
      <div className='relative h-screen sm:hidden'>
        <div className='m-14 mt-20 h-4/5 bg-slate-200 rounded-3xl'></div>
        
        <img src='final-bg.png' className='absolute top-14 z-10'  />
        <img src='cartoon.png' className='absolute -top-16 z-10' />
        <div className='absolute top-1/4 z-10'>
            <h3 className='text-3xl font-medium text-white'>Hi There,</h3>
            <h1 className='text-5xl font-bold text-white py-3'>I'm Karthi</h1>
            <h3 className='text-3xl font-medium text-white'>Web Developer</h3>
        </div>
        <div className='absolute top-[22%] z-10 flex flex-col gap-3 right-6'>
            <img src='/fb-white.svg' alt='facebook' className='w-6 h-6' />
            <img src='/insta-white.svg' alt='instagram' className='w-6 h-6' />
            <img src='/linkedIn-white.svg' alt='linkedIn' className='w-6 h-6' />
        </div>
        <div className='absolute top-[42%] z-10 flex gap-3 right-6'>
            <DownloadButton />
        </div>
      </div>
    </main>
  )
}

export default Home