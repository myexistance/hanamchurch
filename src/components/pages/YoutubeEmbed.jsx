
import React, { useState, useEffect } from 'react';

const YouTubeEmbed = () => {
  const [latestVideoId, setLatestVideoId] = useState('');

  // const YOUTUBE_LINK = 'https://www.googleapis.com/youtube/v3/search';

  const apiKey = import.meta.env.VITE_SOME_KEY;

  useEffect(() => {
    // Function to fetch the latest video ID
    const fetchLatestVideoId = async () => {
      try {
        // google API does not seem to work, needs a fix...
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=UC-5KZRaltWluIGIEZCPle7w&part=snippet&order=date&maxResults=1`);

        const data = await response.json();
        // Assuming the response contains the latest video ID
        const latestId = data.items[0].id.videoId;
        setLatestVideoId(latestId);
      } catch (error) {
        console.error('Error fetching latest video ID:', error);
      }
    };

    // Fetch the latest video ID initially
    fetchLatestVideoId();

    // Set up interval to fetch the latest video ID periodically (e.g., every hour)
    const intervalId = setInterval(fetchLatestVideoId, 3600000); // 1 hour

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="video-responsive">
      <iframe 
        width="100%" 
        height="100%" 
        src={`https://www.youtube.com/embed/${latestVideoId}`} 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
