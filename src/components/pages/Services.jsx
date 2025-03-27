import React from "react";
import YouTubeEmbed from './YoutubeEmbed'; // Assuming you have a component for embedding YouTube videos

export const Services = () => {
  return (
    <>
    
    <div style={{ backgroundColor: '#F8F9F9', maxWidth: '100%', padding: '30px' }}>
      <div style={{ textAlign: 'center', marginBottom: '10px' }}>
        <h3>주일 예배시간</h3>
        <div style={{ textAlign: 'left',maxWidth: '800px', margin: '0 auto', padding: '30px' }}>
            <p>1부: 오후 1:30 본당</p>
            <p>2부: 오후 2:30 교제 모임</p>
            <p>주일학교: 오후 12:40 본당</p>
            <p>새벽기도 (미라클 모닝): 오전 6:00 본당</p>
        </div>

      <hr style={{ width: '100%', marginBottom: '20px' }} /> {/* Line */}

      </div>

      <div style={{ textAlign: 'center', marginBottom: '10px' }}>
        <h3>새벽기도 (미라클 모닝)</h3>
        <div style={{ textAlign: 'left',maxWidth: '800px', margin: '0 auto', padding: '30px' }}>
            <p>시간: 토요일 6:00am </p>
        </div>

      <hr style={{ width: '100%', marginBottom: '20px' }} /> {/* Line */}

      </div>
      
      <div style={{ textAlign: 'center' }}>
        <h3>셀 모임</h3>
        <div style={{ textAlign: 'left',maxWidth: '800px', margin: '0 auto', padding: '30px', lineHeight: '1.5'  }}>
        <p>
          시간: 주일 3:20pm <br />
          장소: 교회 라운지(교제실) <br />
          {/* 여성 1셀 <br />
          여성 2셀 <br />
          남성 1셀 <br />
          청년(유스) */}
        </p>
        </div>
        <hr style={{ width: '100%', marginBottom: '20px' }} /> {/* Line */}
      </div>

      <div style={{ textAlign: 'center' }}>
        <h3>주일예배 YouTube</h3>
        <br />
        <div style={{ 
          width: '100%',
          height: '100%',
          
          // padding: '0 30px', // Adjust padding as needed
          display: 'flex',
          justifyContent: 'center', 
          alignItems: 'center'
        }}>
          <YouTubeEmbed embedId="your-youtube-video-id" />
        </div>
      </div>
    </div>

    </>
  );
    
  
};
