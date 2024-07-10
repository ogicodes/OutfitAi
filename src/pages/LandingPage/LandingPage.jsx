import IntroVideo from '../../componenets/IntroVideo/IntroVideo';
import Hero from '../../componenets/Hero/Hero'
import { useState, useEffect } from 'react'



export default function LandingPage() {

    const [showVideo, setShowVideo] = useState(true)

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowVideo(false)
      }, 2000)
  
      return () => clearTimeout(timer)
    }, []);

    return (
        <>
        {showVideo && <IntroVideo />}
        <Hero />
        </>
    )
}