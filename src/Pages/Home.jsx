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
    const formatCode = input
      .replace(/[“”❛❜]/g, '"') // 코드 번호 제거
      .replace(/^\d{2}/gm, '') // 코드 번호 제거
      .replace(/^ /gm, ''); // 각 줄의 앞 공백 제거

    let indentLevel = 0;
    const indentSize = 4; // 탭 크기

    let formattedCode = formatCode
      .split('\n') // 코드를 줄 단위로 처리
      .map((line) => {
        line = line.trim(); // 각 줄의 앞뒤 공백을 제거
        if (line.startsWith('}')) indentLevel--; // 닫는 중괄호가 있는 경우 들여쓰기 레벨을 먼저 감소

        const indentedLine = ' '.repeat(indentLevel * indentSize) + line;
        if (line.endsWith('{')) indentLevel++; // 여는 중괄호가 있는 경우 들여쓰기 레벨을 증가
        return indentedLine;
      })
      .join('\n'); // 다시 줄을 합쳐서 반환

    setResult(formattedCode);
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 20px;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-items: center;
  @media (max-width: 1200px) {
    grid-template-columns: 3fr;
  }
`;
const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr;
  grid-template-rows: 150px auto;
  flex-direction: column;
  align-items: center;
  justify-item: center;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    grid-template-columns: 150px auto;
  }
`;
