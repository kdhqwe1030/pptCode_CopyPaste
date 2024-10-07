import { useState } from 'react';
import styled from 'styled-components';
import closeIconUrl from '../assets/close.svg';
import Info from '../components/Info';
import HelpInfo from '../components/HelpInfo';
const Modal = ({ isOpen, modalClose }) => {
  const [isSelected, setIsSelected] = useState(1);

  return (
    <>
      {isOpen && (
        <>
          <BlurContainer onClick={modalClose} />
          <BaseContainer>
            <TopHeader>
              <ChooseWrapper>
                <ChooseContainer
                  onClick={() => {
                    setIsSelected(true);
                  }}
                  $isSelected={isSelected}
                >
                  <h3>소개</h3>
                </ChooseContainer>
                <ChooseContainer
                  onClick={() => {
                    setIsSelected(false);
                  }}
                  $isSelected={!isSelected}
                >
                  <h3>도움말</h3>
                </ChooseContainer>
              </ChooseWrapper>
              <img
                src={closeIconUrl}
                alt="Close Icon"
                width="18px"
                onClick={modalClose}
                style={{ cursor: 'pointer' }}
              />
            </TopHeader>
            <Content>{isSelected ? <Info /> : <HelpInfo />}</Content>
          </BaseContainer>
        </>
      )}
    </>
  );
};
const BlurContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  z-index: 1;
`;
const BaseContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75vw;
  height: 85vh;
  border-radius: 20px;
  background-color: white;
  z-index: 2;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
`;

const TopHeader = styled.div`
  width: 100%;
  height: 60px;
  background-color: white;
  display: flex;
  justify-content: space-evenly;
`;

const ChooseWrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  height: 50px;
  background-color: white;
`;
const ChooseContainer = styled.div`
  width: 80px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${({ $isSelected }) =>
      $isSelected ? '#52b7fa' : 'transparent'};
    transition: background-color 0.5s ease;
  }
`;

const Content = styled.div`
  flex-grow: 1;
  overflow-y: auto;
`;
export default Modal;
