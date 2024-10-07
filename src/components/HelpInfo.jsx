import React from 'react';
import fImage from '../assets/codeCopy.gif';
import sImage from '../assets/codeConvert.gif';
import tImage from '../assets/codePaste.gif';
import styled from 'styled-components';
const HelpInfo = () => {
  return (
    <HelpInfoContainer>
      <h3>❗주의사항❗: PDF 뷰어로 Chrome로 사용하셔야 원활합니다.</h3>
      <h2>1. 코드를 복사하세요.</h2>
      <p>
        강의자료, 웹페이지, 또는 기타 소스에서 코드를 복사하여 &quot;📝 코드를
        입력 하세요&quot; 칸에 넣어주세요.
      </p>
      <img src={fImage} alt="image" width="70%" />
      <br />
      <br />
      <hr />
      <br />
      <h2>2. 코드를 변환하세요.🔄️</h2>
      <p>변환 버튼을 클릭하여 코드를 변환해주세요.</p>
      <img src={sImage} alt="image" width="70%" />
      <br />
      <br />
      <hr />
      <br />
      <h2>3. 코드를 사용하세요!</h2>
      <p>
        변환된 깨끗한 코드를 확인하고, 복사 버튼을 눌러 필요에 맞게 사용하세요!
      </p>
      <img src={tImage} alt="image" width="70%" />
      <br />
      <br />
      <hr />
      <br />
    </HelpInfoContainer>
  );
};

const HelpInfoContainer = styled.div`
  padding: 10px;
`;
export default HelpInfo;
