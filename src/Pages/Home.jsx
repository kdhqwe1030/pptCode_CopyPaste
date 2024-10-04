import styled from 'styled-components';
import { useState } from 'react';
import ConvertButton from '../components/ConvertButton';
import TextField from '../components/TextField';
import CopyButton from '../components/CopyButton';
import HelpButton from '../components/HelpButton';
import Modal from './Modal';

function Home() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const onChangeInput = (e) => {
    setInput(e.target.value);
  };
  const onClickConvert = () => {
    const firstProcess = input.replace(/[“”]/g, '"');
    const secondProcess = firstProcess.replace(/^\d{2}/gm, '');
    const thirdProcess = secondProcess.replace(/^ /gm, '');
    setResult(thirdProcess);
  };
  const onClickCopy = () => {
    handleCopyClipBoard(result);
  };

  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('클립보드에 링크가 복사되었습니다.');
    } catch (e) {
      alert('복사에 실패하였습니다');
    }
  };

  const modalOpen = () => {
    setIsOpen(true);
    console.log(isOpen);
  };
  const modalClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <AllowedContainer>
        <TopContainer>
          <HelpButton modalOpen={modalOpen} />
        </TopContainer>
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
      <Modal isOpen={isOpen} modalClose={modalClose} />
    </>
  );
}

export default Home;

const AllowedContainer = styled.div`
  height: 100vh;
  padding: 20px;
`;
const TopContainer = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: end;
`;
const BaseContainer = styled.div`
  display: flex;
  padding: 20px;
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
