import React, { useState, useEffect } from "react";

const YouTubeEmbed = () => {
  const [latestVideoId, setLatestVideoId] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_SOME_KEY;  // Ensure this is correctly set
  console.log("API Key:", apiKey); // Debugging: Check if API key is defined

  useEffect(() => {
    const fetchLatestVideoId = async () => {
      try {
        console.log("Fetching latest video...");
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=UC-5KZRaltWluIGIEZCPle7w&part=snippet,id&order=date&maxResults=1`
        );

        if (!response.ok) {
          throw new Error(`YouTube API Error: ${response.status} - ${response.statusText}`);
        }

        if (!response.ok) {
          throw new Error('Failed to fetch the data from YouTube API');
        }

        const data = await response.json();
        console.log("YouTube API Response:", data); // Debugging: Log the full API response

        if (data.items && data.items.length > 0) {
          const latestItem = data.items[0];
          const latestId = latestItem.id?.videoId || null;

          if (latestId) {
            setLatestVideoId(latestId);
          } else {
            setError("No valid video ID found.");
          }
        } else {
          setError("No videos found in the response.");
        }
      } catch (error) {
        setError(error.message);
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestVideoId();

    // Fetch every hour
    const intervalId = setInterval(fetchLatestVideoId, 3600000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [apiKey]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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