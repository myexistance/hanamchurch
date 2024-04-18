import React from "react";
import YouTubeEmbed from './YouTubeEmbed';

export const Services = () => {
  return (
    <>
      
      <div>
        <br />
        <br />
        <br />
        <p style={{ 
          textAlign: "left",
          padding: "0 80px"
       }}>
        </p>
      </div>
      <br />
      <div>
        <h2 style={{ 
          textAlign: "center",
          padding: "0 80px"
       }}>주일 예배시간</h2>
      </div>
      <br />
      <div style={{textAlign: "center",
          padding: "0 50px"}}>
        1부: 오후 1:30 Island Bay Church <br />
        2부: 오후 2:30 교제 모임 <br />
        주일학교: 오후 12:40 본당
      </div>
      <br />
      <div>
    <h2 style={{textAlign: "center"}}>주일예배 
    YouTube</h2>
    <br />
    <div style={{ 
    width: '100%',
    // display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center'
  }}>
    <YouTubeEmbed embedId="your-youtube-video-id" />
  </div>
            
          
    
  </div>
      <br />
      <div>
        
      </div>
      <br />
      <div>
        
      
      </div>
      <br />
      
    </>
  );
};
