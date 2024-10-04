import ConvertButton from './components/ConvertButton';
import TextField from './components/TextField';
import styled from 'styled-components';
import { useState } from 'react';
import CopyButton from './components/CopyButton';
function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const onChangeInput = (e) => {
    setInput(e.target.value);
  };
  const onClickConvert = () => {
    const firstProcess = input.replace(/[“”]/g, '"');
    const secondProcess = firstProcess.replace(/^\d{2}/gm, '');
    const thirdProcess = secondProcess.replace(/^ /gm, '');
    setResult(thirdProcess);
  };
  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('클립보드에 링크가 복사되었습니다.');
    } catch (e) {
      alert('복사에 실패하였습니다');
    }
  };
  const onClickCopy = () => {
    handleCopyClipBoard(result);
  };
  return (
    <AllowedContainer>
      <BaseContainer>
        <TextField
          text="📝 코드를 입력 하세요"
          value={input}
          onChange={onChangeInput}
        ></TextField>
        <ButtonWrapper>
          <ConvertButton onClick={onClickConvert}></ConvertButton>
          <CopyButton onClick={onClickCopy}></CopyButton>
        </ButtonWrapper>
        <TextField text="🤖 변환 결과" value={result}></TextField>
      </BaseContainer>
    </AllowedContainer>
  );
}

export default App;

const AllowedContainer = styled.div`
  padding: 50px;
  height: 100vh;
`;
const BaseContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-around;
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
`;
