import React, { useRef, useEffect } from 'react';
import './Content.css';
import VideoBG from './assets/FinalFinal.mp4'; // Ensure the video exists

function Content() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener("ended", () => {
        setTimeout(() => {
          video.play(); 
        }, 3000); 
      });
    }
  }, []);

  return (
    <div className="content">
      <video ref={videoRef} className="background-video" autoPlay muted>
        <source src={VideoBG} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Content;
