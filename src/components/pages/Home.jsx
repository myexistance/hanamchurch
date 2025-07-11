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
            <span style={{ fontFamily: 'arial, sans-serif', fontSize: '24px', fontWeight: 'bolder' }}>웰링턴 한인교회(하남교회)</span><br />는 하남교회(하남교회의 지교회, 2023년 설립)와 한인교회(1985년에 설립된 뉴질랜드 최초의 한인교회)와 합병을 통해 복음 사역을 확장하는 교회로 세워져 가고 있습니다. 본 교회는 대한예수교 장로회(합동) 소속 교회((사랑의 교회, 충현교회, 수영로교회 등)이며 웰링턴과 뉴질랜드의 복음화를 목표로 합니다. 하나님의 사랑과 말씀의 은혜, 기도의 열정이 있는 웰링턴한인교회(하남교회)에서 구원의 감격, 은혜와 위로, 감사와 기쁨을 경험하시길 바랍니다.<br /><br /> 
          </p>
          <br />
          {/* <p style={{ color: 'white', fontSize: '23px' }}>
            2023년 1월 15일(주일) 첫 예배를 드리고 하나님의 은혜로 성장하고 있습니다.
            진정한 예배, 진정한 사랑, 진정한 교회의 본질 회복을 통해 영혼을 구원하고 
            하나님의 나라를 구현해 가고 있습니다. <br />
            신앙의 회복과 은혜의 예배를 사모하는 성도님을 환영하고 축복합니다.
          </p> */}
      </Section>
    </Container>
  );
};

