// import React from 'react';
// import backgroundImage from '../../asset/background.png';

// export const Home = () => {
//   return (
//     <>
//       <div
//         style={{
//           backgroundImage: `url(${backgroundImage})`,
//           backgroundPosition: "center",
//           backgroundSize: "cover",
//           minHeight: "100vh", // Ensures the background covers the entire viewport
//         }}
//       >
//         <div style={{ flex: 0.5, padding: '30px'}}></div>
//         <div style={{ flex: 0.5, margin: '25px',padding: '35px', background: '#00003333'}}>
//           <p style={{ 
//             color: 'white', 
//             fontSize: '23px' }}>
//             <span style={{ fontFamily: 'arial, sans-serif', fontSize: '21px', fontWeight: 'bold' }}>웰링턴하남교회</span>
//             는 대한예수교 장로회 합동 교단(사랑의 교회, 수영로교회 등)에 소속된 교회로 하남교회에서 뉴질랜드 웰링턴에 교회를 설립하여 복음전도 사역의 일환으로 세워졌습니다.
//           </p>
//           <br />
//           <p style={{ color: 'white', fontSize: '23px' }}>
//             하남교회는 류일선 목사를 파송하여 2023년 1월 15일(주일) 첫 예배를 드리고, 하나님의 은혜로 성장하며, 진정한 예배, 진정한 사랑, 진정한 교회의 본질 회복을 통해 영혼을 구원하고 하나님의 나라를 구현해 가고 있습니다.
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../../asset/background.png';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Section = styled.div`
  width: 20%;
  height: auto;
  margin-top: 20px;
  padding; 35px;

  @media screen and (max-width: 768px) {
    width: 90%;

    flex-wrap: wrap;

    &:first-child {
      margin-top: 50px;
      height: 10px;
    }
  }
`;

export const Home = () => {
  return (
    <Container style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          minHeight: "95vh", // Ensures the background covers the entire viewport
        }}>
      <Section></Section>
      <Section style={{ flex: 0.6,padding: '35px', background: '#00003333'}}>
        <p style={{ 
            color: 'white', 
            fontSize: '23px' }}>
            <span style={{ fontFamily: 'arial, sans-serif', fontSize: '24px', fontWeight: 'bolder' }}>웰링턴하남교회</span><br />
            는 대한예수교 장로회 합동 교단(사랑의 교회, 수영로교회 등)에 소속된 교회로<br /> 하남교회에서 뉴질랜드 웰링턴에 교회를 설립하여 복음전도 사역의 일환으로 세워졌습니다.<br /><br /> 
          </p>
          <br />
          <p style={{ color: 'white', fontSize: '23px' }}>
            2023년 1월 15일(주일) 첫 예배를 드리고 하나님의 은혜로 성장하고 있습니다.
            진정한 예배, 진정한 사랑, 진정한 교회의 본질 회복을 통해 영혼을 구원하고 
            하나님의 나라를 구현해 가고 있습니다. <br />
            신앙의 회복과 은혜의 예배를 사모하는 성도님을 환영하고 축복합니다.
          </p>
      </Section>
    </Container>
  );
};


