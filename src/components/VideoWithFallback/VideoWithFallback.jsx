import React, { useState } from 'react';

const VideoWithFallback = () => {
  const [showFallback, setShowFallback] = useState(false);

  const handleVideoError = () => {
    setShowFallback(true); // Show the fallback image if the video fails to load
  };

  const handleVideoPlay = () => {
    setShowFallback(false); // Hide the fallback image when the video starts playing
  };

  return (
    <div className="relative w-full">
      {!showFallback ? (
        <video
          autoPlay
          muted
          loop
          onError={handleVideoError}
          onPlay={handleVideoPlay}
          className={`${showFallback ? 'hidden' : 'block'} mt-20`}
        >
          <source src="video-1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          src="video-1-img.png"
          alt="Fallback"
          className="block w-full"
        />
      )}
    </div>
  );
};

export default VideoWithFallback;
