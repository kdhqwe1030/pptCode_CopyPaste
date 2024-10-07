import React from 'react';
import wtfImage from '../assets/wtf.png';
import styled from 'styled-components';
const Info = () => {
  return (
    <InfoContainer>
      <h2>
        강의자료에서 복사한 코드에서 불필요한 텍스트와 서식 때문에 스트레스
        받으신적 있나요?
      </h2>
      <img src={wtfImage} alt="image" width="80%" />

      <br />
      <p>
        코드를 복사했는데 특수문자나 불필요한 서식이 함께 복사돼서 매번
        수정하느라 시간을 낭비할때에는 불편함을 느낍니다.😡😡 <br />❝ ❞ ❛ ❜ 같은
        특수문자가 붙거나, 코드 앞에 붙어 있는 숫자들까지 복사되는 경우 말이죠.
      </p>
      <p>
        하지만 이제 그런 걱정은 하지 않으셔도 됩니다! 이 페이지는{' '}
        <strong>불필요한 텍스트와 서식을 자동으로 제거 </strong> 해 주어,{' '}
        <strong>순수한 코드만 남기도록 도와줍니다. </strong> <br />
        매번 복사한 후 일일이 텍스트를 정리하는 번거로움을 덜어주는{' '}
        <strong>편리한 도구입니다. </strong>
      </p>

      <p>
        더 이상 코드를 정리하느라 귀중한 시간을 낭비하지 않고, 중요한 일에만
        집중할 수 있습니다. 이 도구를 사용하여 편리하게 코드를 정리하고, 더 나은
        개발 경험을 만들어 보세요!
      </p>
    </InfoContainer>
  );
};

const InfoContainer = styled.div`
  padding: 10px;
`;
export default Info;
