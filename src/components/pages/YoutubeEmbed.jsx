import React from 'react';


const YouTubeEmbed = ({ embedId }) => (
  <div className="video-responsive" >
    <iframe  
  width="100%" 
  height="100%" 
  src="https://www.youtube.com/embed/xY0znjOBY9w?si=pmaK5fk0HsZAvdZo" 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  referrerpolicy="strict-origin-when-cross-origin" 
  allowfullscreen
></iframe>
  </div>
);

export default YouTubeEmbed;
