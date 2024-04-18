import React from 'react';
import backgroundImage from '../../asset/background.png';

export const Home = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          minHeight: "100vh", // Ensures the background covers the entire viewport
        }}
      >
        <div style={{ flex: 0.5, padding: '30px'}}></div>
        <div style={{ flex: 0.5, margin: '25px',padding: '35px', background: '#00003333'}}>
          <p style={{ 
            color: 'white', 
            fontSize: '18px' }}>
            <span style={{ fontFamily: 'arial, sans-serif', fontSize: '21px', fontWeight: 'bold' }}>웰링턴하남교회</span>
            는 대한예수교 장로회 합동 교단(사랑의 교회, 수영로교회 등)에 소속된 교회로 하남교회에서 뉴질랜드 웰링턴에 교회를 설립하여 복음전도 사역의 일환으로 세워졌습니다.
          </p>
          <br />
          <p style={{ color: 'white', fontSize: '19px' }}>
            하남교회는 류일선 목사를 파송하여 2023년 1월 15일(주일) 첫 예배를 드리고, 하나님의 은혜로 성장하며, 진정한 예배, 진정한 사랑, 진정한 교회의 본질 회복을 통해 영혼을 구원하고 하나님의 나라를 구현해 가고 있습니다.
          </p>
        </div>
      </div>
    </>
  );
};


// import React from "react";
// import backgroundImage from "./background.jpg"; // Adjust the path to your image

// const ComponentWithBackgroundImage = () => {
//   return (
//     <div
//       className="component"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundPosition: "center",
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         minHeight: "100vh", // Ensures the background covers the entire viewport
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         flexDirection: "column",
//         textAlign: "right", // Aligns text to the right
//         padding: "0 20px" // Adds padding to the paragraph
//       }}
//     >
//       <p className="paragraph">
//         This is some text in the right-middle.
//       </p>
//     </div>
//   );
// };

// export default ComponentWithBackgroundImage;