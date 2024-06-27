import React, { useEffect, useState } from 'react'
import './IntroVideo.scss'
import introVideo from "../../assets/videos/intro-video-hirez.mp4"

export default function IntroVideo() {
    const [fadeOut, setFadeOut] = useState(false);
  
    useEffect(() => {
      const video = document.getElementById('intro-video');
      
      video.onended = () => {
        setFadeOut(true);
      };
    }, []);
  
    return (
      <div className={`video-container ${fadeOut ? 'fade-out' : ''}`}>
        <video id="intro-video" className="video" autoPlay muted>
          <source src={introVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };