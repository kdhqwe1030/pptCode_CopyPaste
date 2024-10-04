import React from 'react';
import styled from 'styled-components';
import closeIconUrl from '../assets/close.svg';
const Modal = ({ isOpen, modalClose }) => {
  return (
    <>
      {isOpen && (
        <>
          <BlurContainer onClick={modalClose} />
          <BaseContainer>
            <CloseContainer>
              <img
                src={closeIconUrl}
                alt="Close Icon"
                width="18px"
                onClick={modalClose}
              />
            </CloseContainer>
            <h1>모달창</h1>
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

const CloseContainer = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: end;
`;

export default Modal;
