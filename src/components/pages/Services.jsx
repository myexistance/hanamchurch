import React from "react";
import YouTubeEmbed from './YouTubeEmbed'; // Assuming you have a component for embedding YouTube videos

export const Services = () => {
  return (
    <>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
      }}>
        <p style={{ 
          textAlign: "left",
          padding: "0 80px"
        }}>
          {/* Some content */}
        </p>
      </div>
      <div>
        <h2 style={{ 
          textAlign: "center",
          padding: "0 80px"
        }}>주일 예배시간</h2>
      </div>
      <div style={{ textAlign: "center", padding: "0 50px" }}>
        1부: 오후 1:30 Island Bay Church <br />
        2부: 오후 2:30 교제 모임 <br />
        주일학교: 오후 12:40 본당
      </div>
      <div>
        <h2 style={{ textAlign: "center" }}>주일예배 YouTube</h2>
        <div style={{ 
          width: '100%',
          height: '100%',
          padding: '0 20px', // Adjust padding as needed
          display: 'flex',
          justifyContent: 'center', 
          alignItems: 'center'
        }}>
          <YouTubeEmbed embedId="your-youtube-video-id" />
        </div>
      </div>
    </>
  );
};
