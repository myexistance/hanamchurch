import React, { useState, useEffect } from 'react';

const YouTubeEmbed = () => {
  const [latestVideoId, setLatestVideoId] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_SOME_KEY;  // Ensure the key is correctly set in .env

  useEffect(() => {
    const fetchLatestVideoId = async () => {
      try {
        // Replace with your correct channel ID
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=UC-5KZRaltWluIGIEZCPle7w&part=snippet&order=date&maxResults=1`);

        if (!response.ok) {
          throw new Error('Failed to fetch the data from YouTube API');
        }

        const data = await response.json();

        if (data.items && data.items.length > 0) {
          const latestId = data.items[0].id.videoId;
          setLatestVideoId(latestId);
        } else {
          setError('No videos found.');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    // Initial fetch
    fetchLatestVideoId();

    // Set up periodic fetch (1 hour interval)
    const intervalId = setInterval(fetchLatestVideoId, 3600000); 

    return () => clearInterval(intervalId);  // Cleanup on unmount
  }, [apiKey]);

  // Show loading or error state
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="video-responsive">
      {latestVideoId ? (
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
      ) : (
        <div>No latest video available.</div>
      )}
    </div>
  );
};

export default YouTubeEmbed;