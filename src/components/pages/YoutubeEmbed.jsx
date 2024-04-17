import React from 'react';


const YouTubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/nnMKn-9jOhY?si=t2HzZ67ThFmDlQzu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
);

export default YouTubeEmbed;
