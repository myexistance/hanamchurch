import React from "react";
import mrryu from '../../asset/mrryu.png';

export const About = () => {
  return (
    <div style={{backgroundColor: '#F8F9F9'}}className="about">
      <div className="about__content">
        <br />
        <br />
        <br />
        <img
          src={mrryu}
          style={{
            width: "260px",
            display: "block", // Ensures image is centered horizontally
            margin: "0 auto", // Centers the image horizontally
            borderRadius: '50%',
           
          }}
        />
        <br />
        <br />
        <br />
        <p style={{ 
          textAlign: "left",
          padding: "0 60px"
       }}>
                    교회를 찾는 사람들은 두 가지 감정을 갖게 됩니다. 먼저 기대(설렘)입니다. 좋은 교회를 만나 신앙의 기쁨과 은혜를 기대하지요. 그러나 머지않아 실망이라는 감정도 찾아옵니다. 기대가 빗나가면 아픔과 상처, 회의와 불신은 덤입니다. 
                    그럼에도 교회는 소망입니다. 
                    왜냐하면 하나님의 은혜의 불씨는 여전히 남아있기 때문이지요. </p><br />
                    
                <p style={{ 
          textAlign: "left",
          padding: "0 60px"
       }}>
                    불완전해도 좋습니다.                 
                    연약해도 괜찮습니다. 상처와 아픔이 있으면 어떤가요? 하나님은 완전한 교회, 완벽한 목사, 능력있는 성도를 바라신 적이 없습니다. 작은 마음, 작은 능력이 하나님의 은혜를 만나면 그 작음이 하나님의 위대하심으로 빚어지는 것이지요. </p><br />
                    
                <p style={{ 
          textAlign: "left",
          padding: "0 60px"
       }}>
                    웰링턴에 세워진 우리 교회가 궁금하시다면 눈과 귀로 몸과 마음으로 느껴보시는 건 어떨까요? 하나님이 궁금하다면, 찬양에 감격하고 싶다면, 말씀으로 하나님의 음성을 듣고 싶다면, 기도로 길을 묻고 싶다면, 성도의 교제와 사랑을 원한다면, 상처와 아픔으로 신음하고 있다면, 웰링턴하남교회로 오세요.</p><br />
        
      </div>
    </div>
  );;
};
