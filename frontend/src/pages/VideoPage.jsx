import React from 'react'
import { useLocation } from "react-router-dom";

function VideoPage() {

    const location = useLocation();
    const videoUrl = location.state?.videoUrl;

    if (!videoUrl) {
        return <p>No video available to play.</p>;
    }

    const getVideoId = (url) => {
        try {
          const urlObj = new URL(url);
          if (urlObj.hostname === "youtu.be") {
            return urlObj.pathname.slice(1); 
          } else if (urlObj.hostname.includes("youtube.com")) {
            return urlObj.searchParams.get("v"); 
          }
        } catch (error) {
          console.error("Invalid video URL:", url);
          return null;
        }
      };
    
      const videoId = getVideoId(videoUrl);
    
      if (!videoId) {
        return <p>Invalid video URL.</p>;
      }

    return (
        <>
            <div className="w-screen h-screen flex justify-center items-center bg-black">
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="video"
                ></iframe>
            </div>
        </>
    )
}

export default VideoPage
