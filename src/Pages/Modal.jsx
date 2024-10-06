import { useState } from 'react';
import styled from 'styled-components';
import closeIconUrl from '../assets/close.svg';
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
`;

const TopHeader = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-evenly;
`;

const ChooseWrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  height: 30px;
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
    height: 2px;
    background-color: ${({ $isSelected }) =>
      $isSelected ? 'black' : 'transparent'};
    transition: background-color 0.3s ease;
  }
`;

export default Modal;
